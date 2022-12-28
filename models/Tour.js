const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    location:{
        type : String,
        required : true
    },
    totalTime : {
        type : String,
        required : true
    },
    imgURLs : {
        type : String,
        required : false,
    },
    like: {
        type: Number,
        default: 0
    },
    schedule:{
        type:String,
        required:true,
    },
    checkin:{
        type:Date,
        require:true
    },
    checkout:{
        type:Date,
        require:true
    },
    price:{
        type:Number,
        require:true,
        default:0,
    }
},{timestamps:true})

const Tour = mongoose.model('Tour',tourSchema);
module.exports = Tour ;