import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import multer from "multer";
// import path from "path";

const users = express.Router();

users.post('/SignUp', (req, res) => {

    const { email, password, full_name, address, phone, bio, role } = req.body;
    // console.log(req.body);
    const q = "SELECT * FROM users WHERE email = ?";
    con.query(q, [email], (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });

        if (data.length) return res.status(400).json({ error: "Email already exists" });


        //hash password and create user
        const salt = bcrypt.genSaltSync(11);
        const hash = bcrypt.hashSync(password, salt);

        const insertUser = "INSERT INTO users (email, password, full_name, address, phone, bio, role) VALUES (?, ?, ?, ?, ?, ?, ?)";

        con.query(insertUser, [email, hash, full_name, address, phone, bio, role], (err) => {
            if (err) {
                console.error("Error:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            // console.log(result);
            return res.status(200).json({ success: "Register successfully" });
        })
    })
});


users.post('/login', (req, res) => {

    const { Email, Password } = req.body;
    console.log(req.body);
    // console.log(`${Email},${Password}`);
    const sql = `SELECT * from users WHERE email = ? `;

    con.query(sql, [Email], (err, data) => {

        if (err) return res.json({ loginstatus: false, Error: "Query error" });

        if (!data || data.length === 0) return res.json({ error: 'Seller not found' });
        console.log(data[0].password);
        const isPasswordCorrect = bcrypt.compareSync(Password, data[0].password);
        if (isPasswordCorrect) {
            console.log("hlo");
            const token = jwt.sign(
                { email: data[0].email, id: data[0].user_id },
                'spiderman@123',
                { expiresIn: '1d' }
            );
            return res.status(200).json({ loginstatus: true, message: 'Log in Success', Token: token });
        }
        else {
            return res.json({ error: 'Invalid email or password' });
        }
    });
});

users.get('/logout', (req, res) => {

    res.clearCookie('token');

    return res.json({ Status: true });
});

// Get User
users.get('/:id', (req, res) => {
    const ID = req.params.id;

    const sql = `SELECT * FROM users WHERE id = ?`;

    con.query(sql, ID, (err, result) => {
        if (err) return res.status(500).json({ error: "Internal server error" });

        if (!result || result.length === 0) return res.status(404).json({ error: "User not found" });

        return res.status(200).json(result[0]);
    });
});

// Update User 
users.post('/update/:id', (req, res) => {
    const userId = req.params.id;
    const { email, password, full_name, address, phone, bio } = req.body;

    const updateUser = `UPDATE users SET email = ?, password = ?, full_name = ?, address = ?, phone = ?, bio = ? WHERE id = ?`;
    const values = [email, password, full_name, address, phone, bio, userId];

    con.query(updateUser, values, (err) => {
        if (err) return res.status(500).json({ error: "Internal server error" });

        return res.status(200).json({ success: "User updated successfully" });
    });
});

// Delete User 
users.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;

    const deleteUser = `DELETE FROM users WHERE id = ?`;

    con.query(deleteUser, userId, (err) => {
        if (err) return res.status(500).json({ error: "Internal server error" });

        return res.status(200).json({ success: "User deleted successfully" });
    });
});

export default users;