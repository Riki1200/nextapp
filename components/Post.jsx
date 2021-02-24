import React from 'react';
import { PostCard, PostContainer } from './style-components/stylecomponents';
/**
 * We create Component for divide logic
 * @param {object} post
 * @param {Array<object>} post.post
 * @returns {JSX.Element}
 */
export function PostComponent({post}){
    return <>
        <PostContainer>

            {post[0].length > 0 ? post[0].map((value,index) => (
                 <PostCard key={value.id + index}>
                        <h2>{value.title}</h2>
                        <p>{value.body}</p>
                </PostCard>
            )) : <div>Not match resukts! Please, restart network</div>}
             
        </PostContainer>
    
    
    </>
}