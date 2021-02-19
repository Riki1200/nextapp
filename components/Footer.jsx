import React from 'react';




export const Footer = () => {
    const [date,setDate] = React.useState('')

    React.useEffect(() => {

        if(date !== null){
            setDate(new Date().getFullYear());
        }


    }, [date,setDate])


    return <footer style={{
        width:"100%",
        display:"flex", 
        marginTop:"20px", 
        alignItems:"center",
        gap:"20px",
        backgroundColor: "#000",
        color:"#fff",
        textAlign:"center",
        justifyContent:"center"
        
        
        }}>
        <h6 >RomeoDeveloper</h6>
        <span>@RomeoDev - {date}</span>
    </footer>
}