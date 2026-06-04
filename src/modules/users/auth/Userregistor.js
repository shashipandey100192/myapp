import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';


function Userregistor() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (e) => {
        console.log(e);
        // fetch("http://localhost:7500/emp").then((d)=>{
        //     return d.json();
        // }).then((r)=>{
        //     console.log(r);
        // })

        if (e.fullname === "") {
            toast.warn("fullname is required");
        }
        else {
            fetch("http://localhost:7500/emp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)

            }).then((d) => {
                console.log(d);
            });
            toast.success("user registor succefully");

        }

    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 border p-3 bg-light shadow'>
                        <ToastContainer />
                        <div className='container-fluid '>
                            <div className='row '>
                                <div className='col-12 text-center'>
                                    <p className='h5 mb-5'>User Registor page</p>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" {...register('email', { required: true })} name='email' />
                                        {errors.email && <p className='text-danger'>email is required</p>}
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" {...register('fullname')} name='fullname' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">DOB</label>
                                        <input type="date" class="form-control" {...register('dob')} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Mobile No</label>
                                        <input type="text" class="form-control" {...register('mobile')} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Role</label>
                                        <select className='form-select' {...register('role')}>
                                            <option hidden>role</option>
                                            <option>user</option>
                                            <option>admin</option>
                                        </select>
                                    </div>
                                </div>




                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">password</label>
                                        <input type="password" class="form-control" {...register('pass', { required: true, minLength: 5, maxLength: 10, pattern: /^[a-d]/ })} />
                                        {errors.pass?.type === "required" && <p>password is required</p>}
                                        {errors.pass?.type === "minLength" && <p>minimum 5 char required</p>}
                                        {errors.pass?.type === "maxLength" && <p>to strong </p>}
                                        {errors.pass?.type === "pattern" && <p>pattern not match </p>}
                                    </div>
                                </div>
                                <div className='col-md-12 text-center'>
                                    <div class="mb-3">

                                        <input type="submit" class="btn btn-outline-success" value="Registor Now" />
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

export default Userregistor