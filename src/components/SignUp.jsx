import React,{useState,useEffect} from 'react';

import styles from './SignUp.module.css'

import { validate } from './validate';
import { notify } from './toast';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data , setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    });

    const [errors,setErrors] = useState({})
    const [toched,setToched] = useState({})

    useEffect(() => {
        setErrors(validate(data,"signup"))
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
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }

    return ( 
        <>
            <div className={styles.container}>
               <form className={styles.formContainer} onSubmit={submitHandler}>

                 <h1 className={styles.header}>SIGNUP</h1>

                  <div className={styles.formField}>
                      <label>Name</label>
                      <input className={(errors.name && toched.name? styles.uncompleted : styles.formInput)} type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                      {errors.name && toched.name &&<span>{errors.name}</span>}
                  </div>
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
                  <div className={styles.formField}>
                      <label>Confirm Password</label>
                      <input className={(errors.confirmPassword && toched.confirmPassword ?styles.uncompleted : styles.formInput)} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                      {errors.confirmPassword && toched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                      <label>I accept terms of privacy policy</label>
                      <input  type="checkbox"  name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    </div>
                      {errors.isAccepted && toched.isAccepted &&<span>{errors.isAccepted}</span>}  
                  </div>
                  <div className={styles.formButtons}>
                      <Link to="/login">LOGIN</Link>
                      <button type='submit'>SUBMIT</button>
                  </div>
                  <ToastContainer />
               </form>
            </div>
        </>
     );
}
 
export default SignUp;