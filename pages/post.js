import Head from 'next/head';
import { Footer } from '../components/Footer';
import {Navbar} from '../components/navbar';
import {PostComponent} from '../components/Post';
export default function  Post({post}) {
   

    return <>
        <Head>
            <title>Post</title>
        </Head>
        <Navbar/>
        <main className='post'>
            <PostComponent post={post}/>
        </main>
       
        <Footer/>
    </>
}

export async function getStaticProps() {
    try {
            const resPost = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "get"})

            let Resolvers = await Promise.all([await resPost.json()])
           
    return {
        props: {
            post: Resolvers
            }
        }
    } catch (error) {
        return {
        props: {
                post: [[]]
            }
        }
    }
    
}