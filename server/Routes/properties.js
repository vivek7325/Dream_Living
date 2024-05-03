import express from "express";
import con from "../utils/db.js";
import multer from "multer";
import path from "path";

const seller = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../server/uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const gallery = multer({
    storage: storage,

    limits: {
        fileSize: 6 * 1024 * 1024
    },

});

seller.post('/properties/create', gallery.array('gallery', 6), (req, res) => {
    
    const { title, address, price, bedrooms,
        bathrooms, type, status, parking,
        furnished } = req.body;

    const images = req.files.map(file => file.path);

    const createProperty = [title,
        address, price, bedrooms,
        bathrooms, type, status, parking,
        furnished, images[0]];

    const sql = `INSERT INTO properties (title,address,price,bedrooms,bathrooms,type,status,parking,furnished,image)
    VALUES(?,?,?,?,?,?,?,?,?,?)`;

    con.query(sql, createProperty, (err, result) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json(result);
    })
});

seller.get('/get_properties/', (req, res) => {
    const ID = req.params.id;
    console.log(ID);
    const sql = `SELECT * FROM properties`;
    con.query(sql, ID, (err, result) => {
        if (err) return res.status(404).json(err);

        if (!result || result.length === 0) return res.status(404).json({ error: 'Listing Not Found' });

        return res.status(201).json(result);
    });

});

seller.get('/get_properties/:id', (req, res) => {
    const ID = req.params.id;
    console.log(ID);
    const sql = `SELECT * FROM properties WHERE id = ?`;
    con.query(sql, ID, (err, result) => {
        if (err) return res.status(404).json(err);

        if (!result || result.length === 0) return res.status(404).json({ error: 'Listing Not Found' });

        return res.status(201).json(result);
    });

});

seller.put('/edit_properties/:id', (req, res) => {
    const ID = req.params.id;
    console.log(ID);
    const sql = `SELECT * FROM properties WHERE id = ?`;
    con.query(sql, ID, (err, result) => {
        if (err) return res.status(404).json(err);

        if (!result || result.length === 0) return res.status(404).json({ error: 'Property Not Found' });

        // return res.status(201).json(result);
    });
    // only seller can change own data only---------------------------------------------------karna h 
    console.log(req.body);
    const { title, address, price, bedrooms, bathrooms, type, status, parking, furnished } = req.body;

    const values = [title, address, price, bedrooms, bathrooms, type, status, parking, furnished, ID];

    const editEstate = `UPDATE properties set title = ?, address = ?, price = ?, bedrooms = ?, bathrooms = ?, type = ?, status = ?, parking = ?, furnished= ? Where id = ?`;

    con.query(editEstate, values, (err, result) => {
        if (err) return res.status(404).json(err);
        return res.status(201).json(result);
    });
});

seller.delete('/delete_properties/:id', (req, res) => {
    const ID = req.params.id;
    console.log(ID);
    const sql = `SELECT * FROM properties WHERE id = ?`;
    con.query(sql, ID, (err, result) => {
        if (err) return res.status(404).json(err);

        if (!result || result.length === 0) return res.status(404).json({ error: 'Property Not Found' });

        // return res.status(201).json(result);
    });
    // only seller can delete own data only ------------------------------------------ karna h

    const deleteEstate = `DELETE FROM properties WHERE id = ?`;

    con.query(deleteEstate, ID, (err, result) => {

        if (err) return res.status(404).json(err);

        return res.status(201).json({ Result: result, success: 'Deleted Successfully' });
    });
})



export default seller;