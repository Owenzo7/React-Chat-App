import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'


const style = {


    main:`flex flex-col p-[10px] relative `,

}

function Chat() {

    const scroll = useRef()

  return (
    <>
    
    <main className={style.main}>
    <Message />
    </main>

    {/* Send Message Component */}

    <span ref={scroll}></span>
    
    </>
    
  )
}

export default Chat