import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/Login.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'seller',
        full_name: '',
        address: '',
        phone: '',
        bio: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/users/SignUp`, formData);
            // console.log('Sign-up successful:', response.data);
            setSuccess('Sign-up successful!');
            setError('');
        } catch (error) {
            // console.error('Sign-up failed:', error);
            if (error.response && error.response.status === 400) {
                setError('Email Already Exists');
            } else {
                setError('Sign-up failed. Please try again.');
            }

            setSuccess('');
        }
    };

    return (
        <div className="login-main">
            <div className="login-center">
                <h2>Sign Up</h2>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
                <form onSubmit={handleSubmit}>
                    {/* <input type="text" name="user_id" placeholder="User ID" value={formData.user_id} onChange={handleChange} /> */}
                    {/* <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} /> */}
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <select value={formData.role} onChange={handleChange}>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                    <input type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    <input type="text" name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} />
                    <button type="submit">Sign Up</button>
                </form>

                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
