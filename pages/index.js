import React from 'react'
import Head from 'next/head'
import {MathComponent} from '../components/Math';
import {Navbar} from '../components/navbar.jsx';
import { MathCard, MathContent } from '../components/style-components/stylecomponents';
import { Footer } from '../components/Footer';

export const Context = React.createContext({setProvider: () => {}})

export default function Home({math}) {
  const [provider,setProvider] = React.useState(() => ({
      type: "",
      name: "",
      ctx: []
  }))


  return <>  
 
    <Head>
      <title>Home - Math Curiosity</title>
    </Head>
    <Navbar/>
   <Context.Provider value={{setProvider}}>
    <main className='home' style={{padding: "20px 30px"}}>
      <MathComponent/>
      <MathContent>
           {provider.ctx.length > 0 ?? Object.keys(provider.ctx)
        
           ? provider.ctx.map((value,index) => (
          
              <MathCard key={index}>
                  {JSON.stringify(value)} 
                  
              </MathCard>
  
           )) : null}
     
      </MathContent>
     
    </main>
    <Footer/>
  </Context.Provider> 
 </>
}

