
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate,useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { baseurl } from '../../../service/Urlpath';

function Useredit() {
    const { id } = useParams();
    const mynav = useNavigate();
    const [user, updateuser] = useState({
        dob:"",
        email:"",
        fullname:"",
        hra:"",
        mobile:"",
        extra:"",
        pass:"",
        salary:"",
        role:""
    });
    const { register, handleSubmit, formState: { errors } } = useForm();


    const singleuser = () => {
        axios.get(`${baseurl}/singleuser/${id}`)
            .then((r) => {
                console.log(r.data);
                updateuser(r.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        singleuser();
    }, [id]);


const fieldupdate = (f)=>{
    updateuser({
        ...user,
        [f.target.name]: f.target.value
    })
}


    const submit = () => {
        axios.patch(`${baseurl}/updateuser/${id}`,user).then((r)=>{
            console.log(r);
        })
    }   
         
    




  return (
     <form onSubmit={handleSubmit(submit)}>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-12 border p-3 bg-light shadow'>
                        <ToastContainer />
                        <div className='container-fluid '>
                            <div className='row '>
                                <div className='col-12 text-center'>
                                    <p className='h5 mb-5'>User Registor page</p>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" {...register('email', { required: true })} name='email' value={user.email} onInput={fieldupdate} />
                                        {errors.email && <p className='text-danger'>email is required</p>}
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" {...register('fullname')} name='fullname' value={user.fullname} onInput={fieldupdate}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">DOB</label>
                                        <input type="date" class="form-control" {...register('dob')} value={user.dob} onChange={fieldupdate}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Mobile No</label>
                                        <input type="text" class="form-control" {...register('mobile')} value={user.mobile} onInput={fieldupdate}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">salary</label>
                                        <input type="text" class="form-control" {...register('salary')} value={user.salary} onInput={fieldupdate}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">HRA</label>
                                        <input type="text" class="form-control" {...register('hra')} value={user.hra} onInput={fieldupdate}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">extra</label>
                                        <input type="text" class="form-control" {...register('extra')} value={user.extra} onInput={fieldupdate}/>
                                    </div>
                                </div>


                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Role</label>
                                        <select className='form-select' {...register('role')} value={user.role} onChange={fieldupdate}>
                                            <option hidden>role</option>
                                            <option>user</option>
                                            <option>admin</option>
                                        </select>
                                    </div>
                                </div>




                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">password</label>
                                        <input type="password" class="form-control" {...register('pass', { required: true, minLength: 5, maxLength: 10, pattern: /^[a-d]/ })} value={user.pass} onInput={fieldupdate}/>
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

export default Useredit