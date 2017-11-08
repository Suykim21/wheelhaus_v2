let mongoose = require('mongoose');

let EssentialSchema = new mongoose.Schema({
    title: {
        type:String, required:[true,"Require essential title"]
    },

    description: {
        type:String, required:[true, "Require essential's description"]
    },
    price: {
        type:Number, required:[true, "Require essential's price"]
    },
    image_url: {
        type:String
    },
    limited: {
        type:Boolean
    },
}, {timestamps:true})

let Essential = mongoose.model('Essential', EssentialSchema);

