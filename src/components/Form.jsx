import React, { useState } from 'react'
import Button from './Button'

const Form = ({ contactPopulater }) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [address, setaddress] = useState('')

    const saveContact = (param=null) => {
        let contactDetail = {
            name,
            email,
            number,
            address
        }

        contactPopulater(contactDetail);

        setname('')
        setemail('')
        setnumber('')
        setaddress('');
       
    }

    const saveInputValue = (stateSetter, event) => {
        stateSetter(event.target.value);
    }

    return (
        <>
            <div className='mt-5'>
                <div className="mb-3">
                    <input type="text" name="Name" value={name} id="" className="form-input" placeholder='Name' onChange={(e) => saveInputValue(setname, e)} />
                </div>
                <div className="mb-3">
                    <input type="email" name="Email" value={email} id="" className="form-input" placeholder='Email' onChange={(e) => saveInputValue(setemail, e)} />
                </div>
                <div className="mb-3">
                    <input type="tel" name="Phone" value={number} id="" className="form-input" placeholder='Number' onChange={(e) => saveInputValue(setnumber, e)} />
                </div>
                <div className="mb-3">
                    <input type="text" name="Address" value={address} id="" className="form-input" placeholder='Address' onChange={(e) => saveInputValue(setaddress, e)} />
                </div>
                <Button btnType='submit' btClass='btn btn-primary' clickHandler={saveContact} innerText='Add Contact'/>
            </div>
        </>

    )
}

export default Form;