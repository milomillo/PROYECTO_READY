const Libro = require("../models/libros.model")

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let libro = new Libro({
        isbn: req.body.isbn,
        titulo: req.body.titulo,
        autor: req.body.autor,
        editorial: req.body.editorial,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        formato : req.body.formato,
        portada :req.body.portada
    })

    libro.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el libro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El libro se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Libro.find(function(err, libro){
        res.json(novios)
    })
}
exports.findOne = function(req,res){
    Libro.findOne({_id: req.params.id},function(err, libro){
        res.json(libro)
    })
}
exports.update = function(req,res){
    let libro = {
        isbn: req.body.isbn,
        titulo: req.body.titulo,
        autor: req.body.autor,
        editorial: req.body.editorial,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        formato : req.body.formato,
        portada :req.body.portada
    }

    Libro.findByIdAndUpdate(req.params.id, {$set: libro}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el libro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El libro modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Libro.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el libro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El libro eliminado correctamente"
        res.json(response)
    })
}