import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Boy from '../../assets/boy.png'
import Logo from '../../assets/logo.png'
import './SignUp.css'
import Nav from '../Nav'
const SignUp = () => {
    const navigater = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",

    })

    const submitFun = async (e) => {
        e.preventDefault()

        // console.log(data);
        let result = await fetch('http://localhost:8080/login', {
            method: "post",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
        result = await result.json()
        if (result) {
            navigater('/')
        }

    }
    const changeFun = (e) => {
        const { value, name } = e.target;
        setData((obj) => {
            return ({
                ...obj,
                [name]: value
            })
        })


    }
    return (
        <>
            <div className='form_main'>
                <Nav/>
                <div className='form_body'>
                <form className='form' action="/profile" method="post" encType="multipart/form-data" onSubmit={submitFun}>
                  

                    <div className='form_div'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={changeFun} />
                    </div>

                    <div className='form_div'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={changeFun} />
                    </div>
                  
                    <div className='btn_container'>
                    <button className='sign_up_btn'>Log In</button>
                    <Link to={'/signup'} className='login_router'>Sign Up</Link>
                    </div>
                </form>
                <div className="right_content">
                    
                    <img src={Boy} alt="boy" className='signup_boy_img'/>
                </div>
                </div>
            </div>
        </>
    )
}

export default SignUp