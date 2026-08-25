import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../../../service/Urlpath';

function Userdetails() {

    const { id } = useParams();

    const [user, updateuser] = useState({});

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


    return (

        <div className="container py-5">

            {/* Page Heading */}
            <div className="text-center mb-4">

                <h1 className="fw-bold">
                    User Details
                </h1>

                <p className="text-muted">
                    Complete User Information
                </p>

            </div>


            {/* Main Card */}
            <div className="card shadow border-0">

                {/* Header */}
                <div className="card-header bg-primary text-white">

                    <div className="d-flex justify-content-between align-items-center">

                        <h4 className="mb-0">
                            {user.fullname || "User"}
                        </h4>

                        <span className="badge bg-light text-primary">
                            {user.role || "N/A"}
                        </span>

                    </div>

                </div>


                {/* Card Body */}
                <div className="card-body">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">


                        {/* Fullname */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Full Name
                                    </h6>

                                    <h5>
                                        {user.fullname || "N/A"}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* ID */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        User ID
                                    </h6>

                                    <h6 className="text-break">
                                        {user._id || "N/A"}
                                    </h6>

                                </div>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Email
                                    </h6>

                                    <p className="mb-0 text-break">
                                        {user.email || "N/A"}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* DOB */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Date of Birth
                                    </h6>

                                    <h5>
                                        {user.dob || "N/A"}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* Mobile */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Mobile
                                    </h6>

                                    <h5>
                                        {user.mobile || "N/A"}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* Role */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Role
                                    </h6>

                                    <span className="badge bg-success fs-6">
                                        {user.role || "N/A"}
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Salary */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Salary
                                    </h6>

                                    <h5>
                                        ₹ {user.salary || 0}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* HRA */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        HRA
                                    </h6>

                                    <h5>
                                        ₹ {user.hra || 0}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* Extra */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Extra
                                    </h6>

                                    <h5>
                                        ₹ {user.extra || 0}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* Password */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Password
                                    </h6>

                                    <h5>
                                        {user.pass || "N/A"}
                                    </h5>

                                </div>

                            </div>

                        </div>


                        {/* Created At */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Created At
                                    </h6>

                                    <p className="mb-0">
                                        {user.createdAt
                                            ? new Date(user.createdAt).toLocaleString()
                                            : "N/A"
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Updated At */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Updated At
                                    </h6>

                                    <p className="mb-0">
                                        {user.updatedAt
                                            ? new Date(user.updatedAt).toLocaleString()
                                            : "N/A"
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Version */}
                        <div className="col">

                            <div className="card h-100 border">

                                <div className="card-body">

                                    <h6 className="text-muted">
                                        Version
                                    </h6>

                                    <h5>
                                        {user.__v ?? 0}
                                    </h5>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Footer */}
                <div className="card-footer text-muted">

                    User ID: {id}

                </div>

            </div>

        </div>

    );
}

export default Userdetails;