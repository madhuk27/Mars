import React, {useEffect, useState} from 'react';
import useForm from './useForm';
// import "./App.css";
// import {useForm } from 'react-hook-form';

const SignupForm = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
    return (
        <div className='container'>
            <div className='app-wrapper'>
            <div>
            <h2 className='title'>Create Account</h2>
        </div>
        <form className='form-wrapper'>
            <div className='name'>
                <label className='label'>FullName</label>
                <input 
                className='input'
                type='text'
                name="FullName"
                value={values.FullName}
                onChange={handleChange}/>
                {errors.FullName && <p className='error'>{errors.FullName}</p>}
            </div>
            <div className='email'>
                <label className='label'>Email</label>
                <input 
                className='input' 
                type='email' 
                name="Email" 
                value={values.Email} 
                onChange={handleChange}/>
                {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='password'>
                <label className='label'>Password</label>
                <input 
                className='input' 
                type='password' 
                name="Password"  
                value={values.Password}
                onChange={handleChange}/>
                {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div>
            <button className='submit' onClick={handleFormSubmit}>submit</button>
        </div>
        </form>
        </div>
        </div>
    )
}

export default SignupForm;