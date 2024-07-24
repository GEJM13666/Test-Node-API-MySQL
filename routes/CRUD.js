'use strict'
const express=require('express');
const crudRoute = express.Router();
const connection=require('../db');


crudRoute.post('/books',function (req,res,next){
    connection.execute(`INSERT INTO books (title,author, published_year,genre,available) VALUES (?,?,?,?,?);`,[req.body.title, req.body.author, req.body.published_year, req.body.genre, req.body.available]).then(()=>{
            console.log('ok');
            res.status(201).send('Insert Successfully');
    }).catch((err)=>{
        console.log(err);
    })
    res.end;
})




crudRoute.get('/books',function (req,res,next){
    connection.execute(`SELECT * FROM books;`).then((result)=>{
        var rawData=result[0];
        // res.send(JSON.stringify(rawData));
        res.send(rawData);
    }).catch((err)=>{
        console.log(err);
    })
    res.end;
})

crudRoute.get('/books/:id', function (req,res,next){
    connection.execute(`SELECT * FROM books WHERE id =?;`,[req.params.id]).then((result)=>{
        console.log('ok');
    }).catch((err)=>{
        console.log(err);
    });
    res.end();
})

crudRoute.put('/books/:id',function (req,res,next){
    connection.execute("UPDATE books SET title=?,author=?,published_year=?,genre=?,available=? WHERE id=?;",[req.body.title, req.body.author, req.body.published_year, req.body.genre, req.body.available,req.params.id]).then(()=>{
            console.log('ok');
            res.status(201).send('Update Successfully');
    }).catch((err)=>{
        console.log(err);
    })
    res.end;
})

crudRoute.delete('/books/:id', function (req,res,next){
    connection.execute(`DELETE FROM books WHERE id =?;`,[req.params.id]).then(()=>{
        // res.send(JSON.stringify(rawData));
        console.log('ok');
    }).catch((err)=>{
        console.log(err);
    });
    res.end();
})


module.exports=crudRoute;