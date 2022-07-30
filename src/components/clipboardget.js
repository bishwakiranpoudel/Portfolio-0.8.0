import React, { useState } from 'react';
import { firestore } from "../firebase";
import { collection, getDocs,where ,limit,query} from "firebase/firestore";
import { async } from '@firebase/util';


function ClipboardGet() {
    const [message,setmessage]=useState([]);
    const [id, setid] = useState();
    function test(){
        console.log(id);
    }
    const retrive=async()=>{
        const i = parseInt(id)
        const q=  query(
            collection(firestore, "messages"),
            limit(1),
            
            where("code","==",i)
            
            
          );
          const data=await getDocs(q);
          setmessage(data.docs.map((doc) => ({ ...doc.data(), id:doc.id})));
          
          
        
    }

  return (
    <div className='cget'>
        <h1>Online Clipboard</h1>
        <input type="text" onChange={(e) => setid(e.target.value)}/>
        <button onClick={retrive}>Retrive</button>
        
        {message.map((m)=>{
            return <p key={m.id}>{m.message}</p>
        })

        }
    </div>
  )
}

export default ClipboardGet