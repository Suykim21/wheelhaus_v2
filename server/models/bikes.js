let mongoose = require('mongoose');
let BikeSchema = new mongoose.Schema({

    title: {
        type:String, required:[true,"Require bike title"]
    },

    description: {
        type:String, required:[true, "Require bike description"]
    },

    price: {
        type:Number, required:[true, "Require bike price"]
    },

    image_url: {
        type:String
    },

    limited:{
        type:Boolean
    },
    
}, {timestamps:true})

let Bike = mongoose.model('Bike', BikeSchema);