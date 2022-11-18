import CreatableSelect from 'react-select/creatable'
let options=[{value:'Programming', label:'Programming'}]

const Forms = props=>{


    
    const nameHandler=e=>{
            props.getName(e.target.value)     
        
    }

    const lNameHandler=e=>{
        props.getLName(e.target.value)
    }

    const emailHandler=e=>{
        props.getEmail(e.target.value)
    }

    const hobbyHandler=e=>{
        props.getHobby(e)
    }

    return <div className="m-4 p-4 w-50 ">
        <label htmlFor="name">First Name</label>
        <input onInput={nameHandler}  className="form-control" id="name"  type="text" />
        <label htmlFor="lName">Last Name</label>
        <input onChange={lNameHandler} type="text" id="lName"  className="form-control" />
        <label htmlFor="email">Email</label>
        <input onChange={emailHandler} type="text" id="email"  className="form-control" />
        <label htmlFor="">Hobby</label>
        <CreatableSelect isMulti onChange={hobbyHandler} className='w-100' options={options}>Hobbies:</CreatableSelect>

        
    </div>
}

export default Forms