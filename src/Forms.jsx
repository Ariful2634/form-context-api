

const Forms = () => {
    const handle = e =>{
        e.preventDefault()
        // console.log('click')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handle} >
                <input type="text" name="name" id="" />
                <input type="email" name="email" id="" /> <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Forms;