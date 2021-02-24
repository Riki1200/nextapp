import '../styles/globals.css'
import React from 'react'

export  const ContextLoad = React.createContext({theme: null})
function MyApp({ Component, pageProps }) {




  return <ContextLoad.Provider value={{theme: "black"}}>
     <Component {...pageProps} />
  </ContextLoad.Provider> 
}

export default MyApp
