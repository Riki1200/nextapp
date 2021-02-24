import Cors from 'cors';


const cors = Cors({
    methods: ['GET', 'POST']
})

function middleWare(req,res,fn) {
    return new Promise((resolve,reject) => {
        fn(req,res, (r) => {
            if(r instanceof Error){
                return reject(r)
          
          
            }
       
             return resolve(r);   
        })


    })
}

 export default async function handler(req,res){
    const {
    query: { number,type },
  } = req

    await middleWare(req,res,cors);

    const api = await fetch(`http://numbersapi.com/${number}/${type}?json`, {method: "GET"})
    const json = await api.json();
    console.log(json)
    res.status(200).json(json)
}

