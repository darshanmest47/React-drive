import React, { useEffect,useState } from 'react'

import {db} from '../../firebase'
import FileCard from './FileCard'
import '../Main/Filedisplay.css'

const Filesdisplay = () => {
    const[files,setFiles] = useState([])

    useEffect(()=>{

        db.collection('myfiles').orderBy('createdAt','desc').onSnapshot((snapshot)=>{
            
           setFiles(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
           })))
        })

    

    },[])

    return (
     <div className="filedisplay__div">{files.map((item)=>{
         console.log(item.data)
         return(
             <div key={item.id} >
            <FileCard id={item.id} size={item.data.size} url={item.data.urlFile} created={item.data.createdAt} name={item.data.name}/>
               
             </div>
         )
     })}</div>
    )
}

export default Filesdisplay
