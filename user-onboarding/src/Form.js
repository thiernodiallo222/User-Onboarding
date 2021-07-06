import React from 'react'
import './Form.scss';

export default function Form() {
    return (
        <div>
            <p>This is the form  using Formik !</p>
            <form className = 'form-field'>
                <input name='name' type='text' placeholder='Name' />
                <input name='email' type='email' placeholder='Email' />
                <input name='password' type='password' placeholder='Password' />
                <label>
                    <input name='name' type='checkbox' />
                    <p className ='paragraph'>By checking this box, you agree to our terms and conditions.</p>
                </label>
                <button className ='button' type ='submit'> Submit </button>
                
            </form>
        </div>
    )
}
