import React, { useRef, useState} from 'react';
import { firestore } from "../firebase";
import { addDoc,collection } from "@firebase/firestore";
import { Link } from 'react-router-dom';
import {  getDocs,where ,limit,query} from "firebase/firestore";

function Clipboard() {
    const [message,setmessage]=useState([]);
    const messageRef = useRef();
    const ref = collection(firestore,"messages");

    const handelSave = async (e) =>{
        var a = Math.floor(Math.random()*90000) + 10000;
        e.preventDefault();
        console.log(messageRef.current.value);
        let data ={
            message:messageRef.current.value,
            code:a,

        };

        try{
            addDoc(ref,data);
        } catch(e){
            console.log(e);
        }
        
        const q=  query(
            collection(firestore, "messages"),
            limit(1),
            
            where("code","==",a)
            
            
          );
          const d=await getDocs(q);
          setmessage(d.docs.map((doc) => ({ ...doc.data(), id:doc.id})));

    };
    function sopy(){
        var pw = document.getElementById("password");
        
        navigator.clipboard.writeText(pw.innerHTML);
      }


  return (
    <div className='clipboard'>
        <h1>Online Clipboard</h1>
        {message.map((m)=>{
            return <p key={m.id}>Your retrival code is <span id='password'>{m.code}</span><img onClick={ sopy } src={require("../static/clipboard.webp")} alt="" /></p>
        })

        }

        <form onSubmit={handelSave}>
            
            <textarea name="message" cols="30" rows="50" ref={messageRef}></textarea>
            <button type="submit" className='button'>Post</button>
            <Link to={"/retrive"} className="button2">Retrive</Link>
        </form>

    </div>
  )
}

export default Clipboard