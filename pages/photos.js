
import {Photos} from '../components/Photos';
import {Navbar} from '../components/navbar';
import { Footer } from '../components/Footer';

const Phothos = ({photos}) => {
    return <>
        <Navbar></Navbar>
        <main className='main_content'>
            <Photos photos={photos}/>
        </main>
        <Footer/>
    </>  
}


export async function getStaticProps(){
    try {
            
    const resImage = await fetch('https://jsonplaceholder.typicode.com/photos', {method:"get"})

    /**
     * @type {Array<object>}
     */
    let Resolvers = await Promise.all([await resImage.json()])
   
    
    return {
        props: {
            photos: Resolvers
        }
    }

    } catch (error) {
        
        return {
            props: {
                photos: []
            }
        }
    }
    
}


export default Phothos;