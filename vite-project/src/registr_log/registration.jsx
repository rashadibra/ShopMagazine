import React from 'react'
import { useFormik } from 'formik';
import './registrs.css'
import {registrschema} from './schemas/schemas_registr'
import axios from 'axios';
import { Link } from 'react-router-dom';

const onSubmit=async(values,actions)=>{
  axios.post('http://localhost:3000/posts',
  {
    body:values
  })
  console.log(values);
await new Promise((resolve)=>{
setTimeout(resolve,100);
actions.resetForm()
})
}
function registration() {
    const {values,errors,isSubmitting,handleSubmit,handleChange} = useFormik({
        initialValues: {
          email: '',
          Name:'',
          password:'',
          age:''
        },
        validationSchema:registrschema,
        onSubmit
      });
  return (
    <div className="regstr_div_1">
        <form className='regstr_div' onSubmit={handleSubmit}>
<label>name</label>
<input 
value={values.Name}
id="Name"
placeholder='Name'
onChange={handleChange}
/>
{errors.Name}
<label>Email</label>
<input
className={errors.email ? 'input-error':''}
type="email"
 id="email"
 placeholder='Email'
 value={values.email}
 onChange={handleChange}
 />
 {errors.email &&  <p className="error">{errors.email}</p>}
 <label >Password</label>
 <input type="password"
 placeholder='password'
 id='password'
 value={values.password}
 onChange={handleChange}
 />
 {errors.password && <p className='error'>{errors.password}</p>}
<label >age</label>
 <input type="number"
 placeholder='age'
 id='age'
 value={values.age}
 onChange={handleChange}
 />
 {errors.age && <p className='error'>{errors.age}</p>}
 <button disabled={isSubmitting}>Click</button>
 <Link to='/'>Login</Link>

    </form>
    </div>
  )
}

export default registration