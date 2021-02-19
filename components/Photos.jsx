

import React from 'react';


import {CardsContainer,Img,ItemsContentCard} from './style-components/stylecomponents';


/**
 * 
 * @param {object} photos 
 * @param {Array<object>} photos.photos
 * @returns {JSX.Element}
 */
export const Photos = ({photos}) => {

    React.useEffect(() => {

        return () => {
            return photos = []
        }
    }, [photos])
    return <>
        <section className='section_content--hs'>
            <CardsContainer >
                   {photos[0].length > 0 ? photos[0].map((item,index) => (
                       <ItemsContentCard key={index}>
                        <hi>{item.title}</hi>
                        <Img loading='lazy' className={`img_loading-`+index} src={item.url} alt={item.id} />
                       </ItemsContentCard>
             )) : <div>Not match results</div>}


            </CardsContainer>
          

        </section>
       
    
    </>
}

