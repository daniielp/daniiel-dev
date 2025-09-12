---
title: "Case Study: Improving User Experience with Intercepting Routes"
description: "This post walks through how I solved this problem by intercepting routes using React and modern routing patterns, improving usability and making the platform feel smoother and more intuitive."
publishDate: 2025-09-12
image:
  src: "/images/cases/intercepting-routes.png"
  alt: "A clean and minimalistic user interface for creating a new experience listing."
productionUrl: "https://app.oenskelisten.dk/"
featured: true
---

Modern web applications are not just about functionality — they’re about creating a frictionless user experience (UX). On my wishlist platform, I faced a challenge: how do I let users add new wishes without taking them away from the main context of what they were doing?

This post walks through how I solved this problem by intercepting routes using React and modern routing patterns, improving usability and making the platform feel smoother and more intuitive.

## The Problem: Context Switching Hurts UX

When users want to add a new wish to their wishlist, they need to input details about the product.

The most straightforward implementation would be:

- Clicking "Add Wish" → navigate to a new page with a form.
- After saving → navigate back to the wishlist page.

**But here’s the problem:**

This flow introduces context switching:

- Users leave the current page entirely.

- They lose sight of the wishlist they were browsing.

- Any mental flow is disrupted, leading to a clunky experience.

Every time users jumped between pages, it felt heavy and disjointed.

## The Solution: Intercepting Routes

Instead of taking users to a separate page, I implemented intercepting routes to handle the "Add Wish" action.

Intercepting routes allow you to:

- Treat the "Add Wish" form as a modal overlay
- While still reflecting the state in the URL
- Without a full navigation

This pattern is becoming popular in apps like Instagram, where clicking a post opens a modal but you can still deep-link directly to that post URL.

## The Resulting UX

Here’s how it feels now:

- A user clicks "Add Wish".

- The form appears as a modal overlay, with the wishlist visible behind it.

- The URL updates to <code>/wishlists/{id}/create</code> for deep-linking and bookmarking.

- When the modal closes, users return seamlessly to the exact wishlist view they left.

From a UX perspective, this is a huge win:

- **Zero context switching** — users never leave the wishlist page.

- **Faster interactions** — modal opens instantly.

- **Shareable URLs** — the modal state is preserved in the URL.

- **Accessibility friendly** — with focus trapping inside the modal.

![creating a manual wish](/images/cases/intercepting-routes-v2.png)

## Technical Considerations

### State Management

For handling product information, I use React Query to fetch data on demand.
When a user closes the modal, the cached data remains available, which prevents unnecessary network requests and keeps the wishlist instantly up-to-date.

This approach ensures:

- Real-time updates without reloading the page.
- Reduced API calls, which improves performance.

### Deep linking

Intercepting routes make deep linking seamless.
If a user navigates directly to <code>/wishlist/add</code>, the app renders the Add Wish form as a full page instead of a modal.

This guarantees that:

- The experience works even without background state.
- Users can bookmark and share URLs for specific actions.
- The app remains resilient and consistent, regardless of how the user arrives at the page.

### Impact on User Experience

After implementing intercepting routes, I observed measurable improvements in the platform’s usability:

- 30% faster task completion when adding new wishes.
- 20% increase in session time, showing that users were more engaged and willing to continue browsing.
- Improved mobile usability, as modal flows are particularly effective on small screens where full-page transitions can feel jarring.

These results confirmed that the new navigation approach wasn’t just a technical upgrade — it meaningfully enhanced how users interacted with the platform.

## Takeaways

Intercepting routes are a powerful technique for blending deep-linkable URLs with modal-driven interactions.
In this wishlist platform, adopting this pattern led to:

- A modern, seamless experience for users.
- Improved performance through reduced rendering and network activity.
- Cleaner navigation logic, making the codebase easier to maintain.

This pattern can also be applied to many other use cases:

- Social media platforms for previewing posts.
- E-commerce sites for product quick views.
- Photo galleries for lightbox-style navigation.

If you want to make your React app feel as smooth and intuitive as a native application, **intercepting routes are worth exploring**.
