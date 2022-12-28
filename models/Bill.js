const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    userName:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
    },
    amount: {
        type : Number,
        require : true,
        default: 0,
    },
    idTour: {
        type : String,
        required : true,
    },
    idUser: {
        type : String,
        required : false,
    },
    billStatic: {
        type : String,
        required : true,
    },
    sumPrice: {
        type: Number,
        require: true,
        default: 0,
    }
},{timestamps:true})

const bill = mongoose.model('Bill',billSchema);
module.exports = bill ;