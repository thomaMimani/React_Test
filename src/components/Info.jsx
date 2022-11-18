import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'



const Info = props=>{


    return <div className="m-4 p-5 w-50">
        <h4>First Name: {props.name}</h4>
        
        <h4>Last Name: {props.lName}</h4>

        <h4>Email: {props.email}</h4>

        <h4>Hobby: {props.hobby.map((element,i,row)=>{

            return i+1===row.length? element.value: element.value+','
        })}</h4>
        
    </div>
}

export default Info