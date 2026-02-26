import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {admin_login, clearMessage} from "../../store/reducers/authreducer.js";
import {PulseLoader} from "react-spinners";
import toast from "react-hot-toast";



export default function AdminLogin() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth,
  );
  const HandelFormData = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const Handelsubmit = (e)=>{
    e.preventDefault();
    dispatch(admin_login(state))
    if(successMessage !== ""){
      navigate('/')
    }

  }

  useEffect(()=>{
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage(state))
    }
    if (successMessage) {
      toast.success(successMessage);
      navigate("/")
      dispatch(clearMessage(state))
    }
  },[errorMessage,successMessage])
 

  return (
    <div className="flex justify-center items-center min-w-screen bg-gray-800  min-h-screen">
      <div className="w-[400px] rounded-2xl border-2 border-green-400 bg-transparent">
        <div className="flex justify-center items-center h-[50px] pt-5">
          <h1 className="font-medium text-white text-2xl ">Welcome Admin</h1>
        </div>
        <form onSubmit={Handelsubmit}>
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
              onChange={HandelFormData}
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
              onChange={HandelFormData}
            />
          </div>
          <div className="mx-5 flex flex-col justify-center gap-2 mt-6 ">
            <button
              type="submit"
              disabled={loader ? true : false}
              className=" mx-2 mt-3 mb-8 bg-opacity-100 bg-green-400 py-3 rounded-lg border-white border hover:bg-black text-white hover:shadow-md hover:shadow-gray-700/50"
            >
              {loader ? <PulseLoader color={"white"} /> : "Login"}
            </button>
          </div>
          <div className="mx-5 flex items-center gap-4  flex justify-center items-center mb-8">
            <p className="text-white text-sm font-medium">
              You don't have a aaccount
              <Link
                to="/register"
                className="text-white font-bold ml-2 hover:text-green-700"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
