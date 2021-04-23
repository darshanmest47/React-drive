import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux'
import {useSelector,useDispatch} from 'react-redux'
import '../Main/Main.css'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import {storage,db} from '../../firebase'
import firebase from 'firebase'
import {firebaseApp} from '../../firebase'
import newFile from '../Redux/actionCreator'
import closeFile from '../Redux/actionCreator'

const Main = () => {
    const[uploading,setUploading]=useState(false)
    const[uploadcomplete,setUploadcomplete]=useState(false)
    const[upload,setUpload]=useState(false)
    const displayFileUpload = useSelector(state => state.newFile)
    const [cancel,setCancel]=useState(false)
    
    const[file,setFile]=useState(null)
    
    const dispatch = useDispatch()

   

    const chooseFileClick = (e)=>{
        setUpload(true)
        console.log(e.target.files[0])
        if(e.target.files[0]){
            setFile(e.target.files[0])
        }
        
    }


    

    const fileUpload=()=>{
        
        setUploading(true)
       
      

        
        storage.ref(`files/${file.name}`).put(file).then((snapshot)=>{

            storage.ref('files').child(file.name).getDownloadURL().then(url=>{
                db.collection('myfiles').add({
                    name:file.name,
                    urlFile:url,
                    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                    size:snapshot._delegate.bytesTransferred
                })
            })

            setUploading(false)
            setUploadcomplete(true)
            setTimeout(function(){
                window.location.reload();
             }, 5000);
           
           
           

           

        })
     


      
       


      


    }

    const cancelUpload =()=>{
        setCancel(true)
        window.location.reload(true);
    }
    return (
        <div>

            <div className="first__div">

                {(displayFileUpload && !uploadcomplete) && !cancel?(<Card className="firstdiv__card">
                <input type="file" onChange={ (e)=> chooseFileClick(e)}/>
                <div className="upload__div">
                    {uploading?(<em>Uploading.....</em>):(null)}
                   
                </div>
                <div className="uploadcancel__button">
                {upload?(<Button className="upload__button" color="primary" onClick={()=>fileUpload()}>Upload</Button>):(null)}
                <Button className="cancel__button" color="secondary" onClick={()=> cancelUpload()}>Cancel</Button>
                </div>
                
                </Card>):(null)}
                


            </div>


            
        </div>
    )
}

export default Main
