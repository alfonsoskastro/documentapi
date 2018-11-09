var RootModel = require('../model/document').RootModel;
var ObjectId = require('mongodb').ObjectID;

module.exports = {
    initDefaultSegments: initSegments
};


function validateRoot(rootValidate) {
    RootModel.findById(rootValidate._id, function (err, docs) {
        if (!docs) {
            saveroot(rootValidate);
        }
    });
}

function saveroot(rootValidate) {
    var newEvaluator = new RootModel(rootValidate);
    newEvaluator.save(function (err, segment) {
        console.log('save evaluator');
    })
}


function initSegments() {
    // Groups.
    validateRoot({
        _id: ObjectId("5aa718f7a85850c049ab983a"), key: "root", name: "root", iduser: 1, document: [{ key: "1", name: "doc1", text: "text document" }
            , { key: "2", name: "doc2", text: "text document" }, { key: "3", name: "doc3", text: "text document" }, { key: "4", name: "doc4", text: "text document" },
        { key: "5", name: "doc5", text: "text document" }]
    });

}

