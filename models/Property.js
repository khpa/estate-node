const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const PropertySchema = new Schema({
    type:{
        type:String,
        required:true
    },
    rooms:{
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    agent: {
        type:String,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    size:String,
    price: Number,
    date:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('Property', PropertySchema);