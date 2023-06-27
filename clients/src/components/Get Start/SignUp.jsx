import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Boy from '../../assets/boy.png'
import Logo from '../../assets/logo.png'
import './SignUp.css'
const SignUp = () => {
    const navigater = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        cpassword: "",

    })

    const submitFun = async (e) => {
        e.preventDefault()

        // console.log(data);
        let result = await fetch('http://localhost:8080/signup', {
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
                <form className='form' action="/profile" method="post" encType="multipart/form-data" onSubmit={submitFun}>
                    <div className='form_div'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' onChange={changeFun} />
                    </div>
                    <div className='form_div'>
                        <label htmlFor="age">Age</label>
                        <input type="number" name='age' onChange={changeFun} />
                    </div>

                    <div className='form_div'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={changeFun} />
                    </div>

                    <div className='form_div'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={changeFun} />
                    </div>
                    <div className='form_div'>
                        <label htmlFor="password">confirm Password</label>
                        <input type="password" name='cpassword' onChange={changeFun} />
                    </div>
                    <div className='btn_container'>
                    <button className='sign_up_btn'>Sign Up</button>
                    <Link to={'/login'} className='login_router'>Log In</Link>
                    </div>
                </form>
                <div className="right_content">
                    <Link to={'/'} className='home_route_logo'>
                    <img src={Logo} alt="logo" className='sighup_logo_img' />
                    </Link>
                    <img src={Boy} alt="boy" className='signup_boy_img'/>
                </div>
            </div>
        </>
    )
}

export default SignUp