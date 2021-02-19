import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import {Navbar} from '../components/navbar';
/**
 * 
 * @param {Array<object>} post
 * @returns
 */

function About() {

     return <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar/>
            <main className='about' style={{padding: "20px 30px"}}>

                    <section className='about_section--section'>
                            <article className='article_section--about'>
                                <h1>NextJS</h1>
                                <p>
                                    NextJS, is a framework of ReactJS for SSR(Service Server Rendering) what function for create static web with ReactJS

                                </p>
                            </article>
                    </section>
                
            </main>
            <Footer/>
     </>
 } 




export default About;