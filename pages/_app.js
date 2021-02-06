import MainLayout from '../components/Layouts/MainLayout'
import RouteWithLayout from '../components/Layouts/RouteWithLayout'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
  )
}

export default MyApp
