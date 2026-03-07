import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, seller_register} from "../../store/reducers/authreducer.js";
import toast from "react-hot-toast";
import {PulseLoader} from "react-spinners";

export default function Register() {


  const dispatch = useDispatch();
  const msg = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const [state,setState] = useState({
    name :"",
    email : "",
    password : ""
  })


  const handelFormData = (e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handelSubmitData = (e)=>{
    e.preventDefault();
    dispatch(seller_register(state))

  }

  useEffect(() => {
      if(msg.errorMessage !== "") {
        toast.error(msg.errorMessage)
        dispatch(clearMessage(state))
        navigate('/')
      }
      if(msg.successMessage !== ""){
        toast.success(msg.successMessage)
        dispatch(clearMessage(state))
      }


  }, [msg]);

  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen bg-gray-800">
      <div className="w-[400px] bg-transparent border-2 border-green-400 rounded-2xl ">
        <div className="flex justify-center items-center h-[50px] pt-5">
          <h1 className="font-medium text-white text-2xl ">
            Welcome to E-commerce
          </h1>
        </div>
        <form onSubmit={handelSubmitData}>
          <div className="mx-5 flex flex-col justify-center gap-2 mt-6">
            <label htmlFor="name" className="text-white text-md">
              Full Name
            </label>
            <input
              className="bg-gray-900 opacity-80 rounded-2xl px-3 py-4 text-white  border border-white"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={state.name}
              onChange={handelFormData}
            />
          </div>
          <div className="mx-5 flex flex-col justify-center gap-2 mt-6">
            <label htmlFor="email" className="text-white text-md">
              Email address
            </label>
            <input
              className="bg-gray-900 opacity-80 rounded-2xl px-3 py-4 text-white  border border-white"
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              value={state.email}
              onChange={handelFormData}
            />
          </div>
          <div className="mx-5 flex flex-col justify-center gap-2 mt-6">
            <label htmlFor="password" className="text-white text-md">
              Password
            </label>
            <input
              className="bg-gray-900 opacity-80 rounded-2xl text-white px-3 py-4  border border-white"
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value={state.password}
              onChange={handelFormData}
            />
          </div>
          <div className="mx-5 flex items-center gap-4 mt-6 ">
            <input
              type="checkbox"
              name="checkbox"
              id="chechbox"
              className="ml-3 w-5 h-6 bg-black border  border-white rounded-lg accent-green-400 focus:ring-2 focus:ring-gray-700"
            ></input>
            <label
              htmlFor="checkbox"
              className="text-white text-sm font-medium"
            >
              I agree to privacy policy & terms{" "}
            </label>
          </div>
          <div className="mx-5 flex flex-col justify-center gap-2 mt-6 ">
            <button disabled={msg.loader ? true : false} type="submit"
              type="submit"
              className=" mx-2 mt-3  bg-opacity-100 bg-green-400 py-3 rounded-lg border-white border hover:bg-black text-white hover:shadow-md hover:shadow-gray-700/50"
            >
              {msg.loader ? <PulseLoader color={"white"} /> : "Sing up"}
            </button>
          </div>
          *
          <div className="mx-5 flex items-center gap-4  flex justify-center items-center mb-8">
            <p className="text-white text-sm font-medium">
              already have you a aaccount{" "}
              <Link
                to="/login"
                className="text-white font-bold hover:text-green-400"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
