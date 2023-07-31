import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';


import styles from './SignUp.module.css'

import { validate } from './validate';
import { notify } from './toast';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [data , setData] = useState({
        email:"",
        password:"",
    });

    const [errors,setErrors] = useState({})
    const [toched,setToched] = useState({})

    useEffect(() => {
        setErrors(validate(data,"login"))
    },[data,toched])



    const changeHandler = event => {
        if (event.target.name === "isAccepted"){
            setData({...data , isAccepted : event.target.checked});
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    } 

    const focusHandler = event => {
        setToched({...toched , [event.target.name]:true})
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            notify("You signed up succesfully","succes")
        }else{
            notify("Invalid data!","error")
            setToched({
                email:true,
                password:true,
            })
        }
    }

    return ( 
        <>
            <div className={styles.container}>
               <form className={styles.formContainer} onSubmit={submitHandler}>

                 <h1 className={styles.header}>Login</h1>

                  
                  <div className={styles.formField}>
                      <label>Email</label>
                      <input className={(errors.email && toched.email?styles.uncompleted : styles.formInput)} type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                      {errors.email && toched.email &&<span>{errors.email}</span>}
                  </div>
                  <div className={styles.formField}>
                      <label>Password</label>
                      <input className={(errors.password && toched.password?styles.uncompleted : styles.formInput)} type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                      {errors.password && toched.password &&<span>{errors.password}</span>}
                  </div>
                  
                  <div className={styles.formButtons}>
                      <Link to="/signup">Sign Up</Link>
                      <button type='submit'>SUBMIT</button>
                  </div>
                  <ToastContainer />
               </form>
            </div>
        </>
     );
}
 
export default Login;