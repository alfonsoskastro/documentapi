const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


/* Start Realm Question Types */
const RootSchema = new mongoose.Schema({
    key: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    iduser: { type: String, required: true, trim: true },
    document:
    [{
        key: { type: String, required: true, trim: true },
        name: { type: String, required: true, trim: true },
        text: { type: String, required: true, trim: true }
    }]
});

RootSchema.plugin(timestamps);
const RootDocument = mongoose.model('RootDocument', RootSchema);
module.exports.RootModel = RootDocument;
