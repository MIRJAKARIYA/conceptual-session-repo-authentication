import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error,setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)
    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.confirmPassword.value;
        if(password !== conPassword){
            setError("Passwords didn't match")
            return;
        }
        if(!/\d/.test(password)){
            setError("Password must have at least one number")
            return;
        }
        else if(!/[$%#^&*]/.test(password)){
            setError("Password must have at least on special characters")
            return;
        }
        setError("")
        createUser(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate(localStorage.getItem("path")?localStorage.getItem("path"):"/")
          })
          .catch((error) => {
            const errorMessage = error.message;
           setError(errorMessage)
          });
    }
    const handleNavigate = () =>{
        navigate("/login")

    }
    return (
        <div className='border-2 border-red-500 w-50% max-w-[500px] mx-auto flex items-center rounded-xl'>
            <form onSubmit={handleRegister} className='w-full p-10'>
                <div className='mt-2'>
                <p>Name</p>    
                <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full block" />
                </div>
                <div className='mt-2'>
                <p>Photo</p>    
                <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full  block" />
                </div>
                <div className='mt-2'>
                <p>Email</p>    
                <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full block " />
                </div>
                <div className='mt-2'>
                <p>Password</p>    
                <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full  block" />
                </div>
                <div className='mt-2'>
                <p>confirm password</p>    
                <input name='confirmPassword' type="password" placeholder="Type here" className="input input-bordered w-full block" />
                </div>
                {
                    error && <small className='text-red-5000'>{error}</small>
                }
                <button className="btn btn-primary w-full mt-5">Submit</button>
                <button onClick={handleNavigate}>login</button>
            </form>
        </div>
    );
};

export default Register;