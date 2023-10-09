import React, { useState } from 'react'
import { validateForm } from './Validation';

export default function Form() {
    const [input, setInput] = useState({name:'', email:'', password:''});
    const [error, setError] = useState({})
    const handleOnChange = (e)=>{
        setInput({...input, [e.target.name]: e.target.value});
    }
    
    const formOnSubmit = (e)=>{
        e.preventDefault();
        setError(validateForm(input));
    }
  return (
    <div className="p-3">
        <form onSubmit={formOnSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label"><span className="text-danger">* </span>Name:</label>
                <input type="text" className="form-control" id="name" name="name" onChange={handleOnChange}/>
                {error.name && <p style={{color: 'red'}}>{error.name}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                {error.email && <p style={{color: 'red'}}>{error.email}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleOnChange}/>
                {error.password && <p style={{color: 'red'}}>{error.password}</p>}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="ckeck1" name="check1"/>
                <label className="form-check-label" htmlFor="ckeck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}
