import { useState } from "react";

const StateForm = () => {
    const [name,steName]=useState()
    const [mail,setMail]=useState(null)


    const sub = e=>{
        console.log('click')
        e.preventDefault()
        console.log(mail)
        console.log(name)
    }

    const email=e=>{
        setMail(e.target.value)
    }
    const nam = e=>{
        steName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={sub} action="">
                <input onChange={nam} type="text" name="name" id="" /> <br />
                <input onChange={email} type="email" name="email" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;