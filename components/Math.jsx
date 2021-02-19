import React from 'react';
import {Context} from '../pages/index'


export const MathComponent  = ( ) => {
    const UseCTX = React.useContext(Context);

    const refNumber = React.useRef({value: 0});
    const refType= React.useRef({value: ""})

    const [search,setSearch] = React.useState(0);
    const [type,setStype] = React.useState('');
    


    React.useEffect(() => {
        if(typeof search === 'number'){
            const asyncion = async () =>{
                let f = await fetch(`http://numbersapi.com/0/trivia?json`, {method: "get"})
                let r = await f.json();
                let ob = [r]
                console.log([r])
                UseCTX.setProvider({
                    type: "trivia",
                    name: "0",
                    ctx: [r]
                });
            } 

            asyncion ()
            
        }
        



    },[search,type ])


    function HandleChange (ev){
    
        console.log(refNumber.current.value,refType.current.value)


       
       const asyncion = async () =>{
                let f = await fetch(`http://numbersapi.com/${refNumber.current.value}/${refType.current.value}?json`, {method: "get"})
                let r = await f.json();

                UseCTX.setProvider({
                    ctx: [r]
                });
            } 

            asyncion ()
        
    }

    const HandleSubmit = (ev) => {
        
        ev.preventDefault();

        const asyncion = async () =>{
                let f = await fetch(`http://numbersapi.com/${search}/${type}?json`, {method: "get"})
                let r = await f.json();
                console.log(r)
                UseCTX.setProvider({
                    ctx: []
                });
            } 

            asyncion ()
    }
    return <>
        <form 
        className='form_content' 
        method="POST" 
        onSubmit={HandleSubmit}
        onChange={HandleChange}>
            <div className='form_fields'>
                <label htmlFor='search'>Search: </label>
                <input type="number" defaultValue="1" ref={refNumber}  name='search' id='search' ></input>
            </div>
            <div>
                <select name="type" ref={refType}  id="type">
                     <option value='trivia'>Trivia</option>
                     <option value='math'>Math</option>
                     <option value='date'>Date</option>
                     <option value='year'>Year</option>           
                </select>
            </div>
            <button className='submit' type='submit'>Search</button>
        </form>
    
    
    
    </>



}