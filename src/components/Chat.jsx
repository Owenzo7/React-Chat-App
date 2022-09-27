import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import { db } from '../firebase';
import Message from './Message'


const style = {


    main:`flex flex-col p-[10px] relative `,

}

function Chat() {

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(()=> {

        const q = query(collection(db, 'messages'), orderBy('timestamp'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {

                let messages =[]

                querySnapshot.forEach((doc)=> {

                    messages.push({...doc.data(), id: doc.id})
                })

                setMessages(messages)
        })

        return () => unsubscribe()

    }, [])
    



  return (
    <>
    
    <main className={style.main}>

        {messages && messages.map((message)=> (

            <Message key={message.id}  message={message}/>
        ))}
   
    </main>

    {/* Send Message Component */}

    <span ref={scroll}></span>
    
    </>
    
  )
}

export default Chat