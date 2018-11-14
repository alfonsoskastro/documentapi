"use strict";
var RootModel = require('../model/document').RootModel;

// Functions exported by this module
// this functions are going to be call by swagger in his definition
module.exports = {
    getdocuments: directory,
    updateroot: updateroot

};

function directory(req, res) {

    let iduser = req.swagger.params.iduser.value;
    RootModel.find({ iduser: iduser }, function (err, docs) {
        res.json(docs)
    });
}

function updateroot(req, res) {
    console.log(req.body);
    RootModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, docs) {     
       
        res.json(docs)
    });
}


