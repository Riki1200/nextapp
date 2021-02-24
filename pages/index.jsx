import React from 'react'
import Head from 'next/head'
import {MathComponent} from '../components/Math';
import {Navbar} from '../components/navbar.jsx';
import { MathCard, MathContent } from '../components/style-components/stylecomponents';
import { Footer } from '../components/Footer';

export const Context = React.createContext({setProvider: () => {},setMsg: () => {}})

export default function Home({math}) {
  const [msg,setMSG] = React.useState({msg:""})
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
   <Context.Provider value={{setProvider,setMSG}}>
    <main className='home' style={{padding: "20px 30px"}}>
      <MathComponent/>
      <MathContent>
           {provider.ctx.length > 0 ?? Object.keys(provider.ctx)
        
           ? provider.ctx.map((value,index) => (
          
              <MathCard key={index}>
      
                  <h2>Number of the knowledge: {value.number}</h2>
                  <div className='text_content'>
                     <h3><var>History out of the  number:</var>  {value.text}</h3>
                    </div>
              </MathCard>
  
           )) : msg.msg}
     
      </MathContent>
     
    </main>
    <Footer/>
  </Context.Provider> 
 </>
}

