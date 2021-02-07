import './_app.css'

import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Head from 'next/head'
// import withApollo from 'next-with-apollo'
// import AdminLayout from '~/src/components/layouts/AdminLayout'
// import Router from 'next/router'
// import { ApolloLink, HttpLink, ApolloProvider } from '@apollo/client'
// import { ApolloClient } from '@apollo/client/core'
// import { InMemoryCache } from '@apollo/client/cache'
import { CookiesProvider } from 'react-cookie'
import Cookie from 'cookie'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import theme from '../src/theme'

const noop = () => {}

const MyApp = ({ Component, pageProps, router: { pathname }, apollo }) => {
  if (process.env.NEXT_PUBLIC_ENV !== 'dev') {
    console.log = noop
    console.warn = noop
  }

  const Header = (
    <Head>
      <title>Codered</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0"
      />
    </Head>
  )

  let App = () => (
    <div>
      {Header}
      <Component {...pageProps} />
    </div>
  )

  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    // offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
  }

  return (
    <AlertProvider {...options} template={AlertTemplate}>
      <CookiesProvider>
        {/* <ApolloProvider client={apollo}> */}
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <App />
            </StyledThemeProvider>
          </ThemeProvider>
        </StylesProvider>
        {/* </ApolloProvider> */}
      </CookiesProvider>
    </AlertProvider>
  )
}

export default MyApp

// const isWhiteListUrl = (url) => {
//   return true
//   // return (
//   //   url === '/' ||
//   //   // url === '/card' ||
//   //   url.startsWith('/_error') ||
//   //   url.startsWith('/member/login') ||
//   //   url.startsWith('/member/join') ||
//   //   url.startsWith('/member/join-result') ||
//   //   url.startsWith('/member/not-verified') ||
//   //   url.startsWith('/member/verify') ||
//   //   url.startsWith('/member/reset-password')
//   // )
// }

// MyApp.getInitialProps = async ({ ctx }) => {
//   let serverSideCookie

//   const { req, res, pathname } = ctx

//   if (req) {
//     serverSideCookie = req.headers.cookie
//   }

//   const isSsr = typeof window === 'undefined'

//   const parsedCookies = parseCookies(serverSideCookie)

//   const accessToken = parsedCookies.accessToken
//   const isAuthenticated = accessToken !== undefined
//   // const redirectUrlWhenUnauthenticated = '/member/login'
//   const redirectUrlWhenUnauthenticated = '/'
//   const redirectUrlWhenAuthenticated = '/'

//   if (!isAuthenticated && !isWhiteListUrl(pathname)) {
//     if (pathname !== redirectUrlWhenUnauthenticated)
//       if (isSsr) {
//         if (pathname === '/card') {
//           res.writeHead(302, { Location: '/member/login' })
//         } else {
//           res.writeHead(302, { Location: redirectUrlWhenUnauthenticated })
//         }
//         res.end()
//       } else {
//         if (pathname === '/card') {
//           Router.push('/member/login')
//         } else {
//           Router.push(redirectUrlWhenUnauthenticated)
//         }
//       }
//   }

//   return {
//     serverSideCookie,
//   }
// }

// const parseCookies = (serverSideCookie, options = {}) => {
//   const isSsr = typeof window === 'undefined'
//   const cookie = isSsr ? serverSideCookie : window.document.cookie
//   return Cookie.parse(cookie || '', options)
// }

// export default withApollo(({ initialState, ctx }) => {
//   const httpLink = new HttpLink({
//     uri: `${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
//   })

//   const authLink = new ApolloLink((operation, forward) => {
//     const serverSideCookie = ctx && ctx.req && ctx.req.headers.cookie
//     const parsedCookies = parseCookies(serverSideCookie)
//     const { accessToken } = parsedCookies

//     operation.setContext({
//       headers: {
//         // authorization: accessToken ? `Bearer ${accessToken}` : '',
//         authorization:
//           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqZWh5ZW9rQGNvZGVyZWQuY29vbCIsInNjb3BlIjpbImRlZmF1bHQiXSwidXNlclV1aWQiOiJrcWlkb3JsZGJmIiwidXNlcklkIjo2NywiYXV0aG9yaXRpZXMiOlsiQVBQX1VTRVIiXSwianRpIjoiYTgxMDRhNzYtNzAyOC00ZmIwLWEwZjctNTY4MzBhODRlZDJhIiwiZW1haWwiOiJqZWh5ZW9rQGNvZGVyZWQuY29vbCIsImNsaWVudF9pZCI6ImZhY3RvcnkiLCJ1c2VybmFtZSI6IuygnO2YgeyKpCJ9.9wn30jW2jFWY-AQlFo2d19C8P39z1ne3BxgmJW9U6P0',
//       },
//     })
//     if (operation.variables) {
//       const omitTypename = (key, value) => {
//         return key === '__typename' ? undefined : value
//       }
//       operation.variables = JSON.parse(
//         JSON.stringify(operation.variables),
//         omitTypename,
//       )
//     }

//     return forward(operation)
//   })

//   const defaultOptions = {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//       errorPolicy: 'all',
//     },
//     query: {
//       fetchPolicy: 'network-only',
//       errorPolicy: 'all',
//     },
//     mutate: {
//       errorPolicy: 'all',
//     },
//   }

//   return new ApolloClient({
//     cache: new InMemoryCache().restore(initialState || {}),
//     link: authLink.concat(httpLink),
//     defaultOptions,
//   })
// })(MyApp)
