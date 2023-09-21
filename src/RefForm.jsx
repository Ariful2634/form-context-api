import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef=useRef(null)
    const mailRef=useRef()

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const sub=e=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(mailRef.current.value)
    }

    return (
        <div>
            <form onSubmit={sub} action="">
                <input ref={nameRef}  type="text" name="name" id="" /> <br />
                <input ref={mailRef} type="email" name="email" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;