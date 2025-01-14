---
title: "Optimizing Data Loading with React Router and TanStack Query"
description: "Learn how to implement deferred loading patterns using React Router and TanStack Query for better user experience"
isDraft: true
publishDate: 2025-01-14
tags: ["react", "react-router", "tanstack-query", "performance"]
---

When building modern web applications, managing data loading states and providing a smooth user experience is crucial. In this post, I'll share my experience combining React Router's deferred loading capabilities with TanStack Query's powerful data fetching features.

**NOTE**: I'll demonstrate how to offload data fetching to React Router's loader while utilizing TanStack Query for intelligent caching.

## The Problem

When using React Router to build single-page applications, loading data for each route can be challenging. Especially because react router doesn't provide a built-in way to handle caching.

Traditional data loading approaches often lead to:

- Waterfall requests
- Poor user experience during loading states
- Unnecessary loading indicators
- Delayed page rendering and long wait times

## UI/UX benefits of deferred loading

One of the key advantages of combining React Router with TanStack Query is the ability to implement sophisticated loading patterns that enhance user experience. By leveraging React Router's `Await` component and TanStack Query's built-in suspense support, you can create a smooth, progressive loading experience.

### Progressive Loading with Suspense Boundaries

Instead of showing a full-page loading spinner, you can defer loading of specific components while immediately displaying others:

```typescript
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { useSuspenseQuery } from '@tanstack/react-query'

export const loader = async () => {
  return defer({
    criticalData: getCriticalData(), // Load immediately
    nonCriticalData: getNonCriticalData() // Load after initial render
  })
}

export default function Dashboard() {
  const { criticalData, nonCriticalData } = useLoaderData()

  return (
    <div className="dashboard">
      {/* Critical UI renders immediately */}
      <Header data={criticalData} />

      {/* Non-critical content loads progressively */}
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={nonCriticalData}>
          {(resolvedData) => <DashboardContent data={resolvedData} />}
        </Await>
      </Suspense>
    </div>
  )
}
```

This approach provides several UX benefits:

- **Users see meaningful content faster**
- **The application feels more responsive**
- **Loading states are localized to specific components**
- **Critical UI elements are immediately interactive**

## Granular Component Updates

Another powerful feature of this combination is the ability to achieve granular component updates based on query parameters or route changes. TanStack Query's cache management works seamlessly with React Router's navigation system to enable partial re-rendering.

### Implementing Partial Updates

```typescript
import { useSearchParams } from 'react-router-dom'
import { useSuspenseQuery } from '@tanstack/react-query'

function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  // This component only re-renders when 'q' changes
  const { data } = useSuspenseQuery({
    queryKey: ['search', query],
    queryFn: () => searchApi(query)
  })

  return <ResultsList results={data} />
}

function FilterPanel() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  // This component only re-renders when 'category' changes
  const { data } = useSuspenseQuery({
    queryKey: ['filters', category],
    queryFn: () => getFilters(category)
  })

  return <FilterOptions filters={data} />
}

export default function SearchPage() {
  return (
    <div className="search-page">
      {/* Each component manages its own updates */}
      <FilterPanel />
      <SearchResults />
      {/* This component never re-renders due to search/filter changes */}
      <StaticSidebar />
    </div>
  )
}
```

Key benefits here includes:

- Only affected components re-render
- Reduced computational overhead
- Smoother user experience during interactions

Also included some Developer Experience (DX) improvements:

- Clearer component responsibilities
- Easier debugging of update cycles
- More maintainable codebase

All in all this granular approach to updates and rendering creates a more responsive and efficient application.

## Common Pitfall: Avoiding `Promise.all` in components

A common mistake when combining React Router and TanStack Query is performing multiple asynchronous operations within components using Promise.all. While this approach may seem efficient, it introduces unnecessary complexity and potential race conditions.

Instead, leverage React Router loaders to handle concurrent data fetching outside your components.

### Important note

As discussed in the [[Feature]: Component to resolve multiple promise results from deferred loaders as they come #6149](https://github.com/remix-run/remix/discussions/6149#discussioncomment-8035005), using Promise.all inside components does not automatically rerun when a new promise is provided from the loader. This can cause your component to display stale data if the loader provides updated queries after navigation either through GET form submission or through actions getting called.

#### When data updates occur in React Router, they typically happen in two ways:

Data updates caused by GET form submission:

```typescript
<form method="get">
  <input name="query" />
  <button type="submit">Search</button>
</form>
```

Data updates caused by action:

```typescript
import { useForm } from 'react-hook-form';
import { useFetcher } from 'react-router-dom';

function SearchForm() {
  const fetcher = useFetcher();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetcher.submit(data, {
      method: 'post',
      action: '/search'
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('query', { required: true })} />
      <button type="submit">Search</button>
    </form>
  );
}
```

In both cases, React Router will re-run the loader after the navigation/action completes, potentially providing new data that needs to be handled correctly in your components.

While this article presents one approach to combining React Router with TanStack Query, it's worth noting that several excellent examples and patterns exist in the community. Here are some examples I found while research this:

- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/examples/react-router)
- [Code sandbox](https://codesandbox.io/p/sandbox/fervent-dawn-h6z5h3)

## Summary

Combining React Router loaders with TanStack Query provides a powerful way to optimize data loading in modern web applications. Use loaders to handle data fetching, revalidate queries inside actions using queryClient, and avoid performing asynchronous operations directly within components. By following these best practices, you can deliver a faster, more responsive user experience.
