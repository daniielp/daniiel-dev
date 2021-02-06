import MainLayout from '../MainLayout'

function RouteWithLayout(props) {
  const {Layout, Component, pageProps} = props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default RouteWithLayout
