import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer,toast } from 'react-toastify';


function UserRegistor() {
  const mynav = useNavigate();
const {register,handleSubmit,formState: { errors }} = useForm()

const mysubmit = (e)=>
{
  console.log(e);
  toast.success("successfully registor user",{autoClose:2000,theme:"dark",position:'top-left'});
  setTimeout(()=>{
    mynav("/")
  },2000)

}

  return (
    <form onSubmit={handleSubmit(mysubmit)}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 border shadow'>
            <h1 className='pt-3 mb-5 text-center'>Registor page</h1>
            <ToastContainer/>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <MdOutlineMailOutline/> Email address</label>
                    <input type="email" class="form-control" {...register("email",{required:true})} />
                    {errors.email && <p className='text-danger'>email is required</p>}
                  </div>
                </div>
  
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> FullName</label>
                    <input type="text" class="form-control" {...register("fullname",{required:true})}/>
                    {errors.fullname && <p className='text-danger'>full name is required</p>}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/>DOB</label>
                    <input type="date" class="form-control" {...register("dob")}/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Gender</label>
                    <select className="form-select" {...register("gender")}>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Phone</label>
                    <input type="text" class="form-control" {...register("phone")}/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Course</label>
                    <select className="form-select" {...register("course")}>
                      <option>Mern</option>
                      <option>React</option>
                      <option>Angular</option>
                      <option>Express</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Password</label>
                    <input type="password" class="form-control" {...register("password",{required:true,minLength:5,maxLength:10})}/>
                    {errors.password?.type==="required" && <p className='text-danger'>password is requiredd</p>}
                    {errors.password?.type==="minLength" && <p className='text-danger'>minimum 5 charector requiredd</p>}
                    {errors.password?.type==="maxLength" && <p className='text-info'>max 10 charector requiredd</p>}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Profile</label>
                    <input type="text" class="form-control" placeholder='enter url only' {...register("profile")}/>
                  </div>
                </div>

                <div className='col-md-12 text-center'>
                   <div class="mb-3">
                   
                    <input type="submit" class="btn btn-success" value="Registor Now"/>
                   
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    )
}

export default UserRegistor