import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    // useEffect(()=>{
    //     const clear = setInterval(()=>{
    //         console.log("jack")
    //     },1000)
    //     return ()=> clearTimeout(clear)
    // },[])


    const {signInWithFacebook,signInWithGithub} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleFaceBook = () =>{
        signInWithFacebook().then(res=>navigate(location?.state?location.state:localStorage.getItem("path")?localStorage.getItem("path"):"/"))
    }
    const handleGithub = () =>{
        signInWithGithub().then(res=>navigate(location?.state?location.state:localStorage.getItem("path")?localStorage.getItem("path"):"/"))
    }
    const handleNavigate = () =>{
        localStorage.setItem("path",JSON.stringify(location.state))
        navigate("/register")

    }
    return (
       <>
        <div className='border-2 border-red-500 w-50% max-w-[500px] mx-auto flex items-center rounded-xl'>
            <form  className='w-full p-10'>
                <div className='mt-2'>
                <p>Email</p>    
                <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full block " />
                </div>
                <div className='mt-2'>
                <p>Password</p>    
                <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full  block" />
                </div>
              
                <button className="btn btn-primary w-full mt-5">Submit</button>
            </form>
        </div>
        <div className='text-center'>
            <button onClick={handleFaceBook} className='btn'>Sign in with facebook</button>
            <button onClick={handleGithub} className='btn'>Sign in with github</button>
            <button onClick={handleNavigate}>register</button>
        </div>
       </>
    );
};

export default Login;