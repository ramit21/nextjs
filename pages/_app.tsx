import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("Inside _app.tsx");
  return <Component {...pageProps} />
}

export default MyApp
