let mongoose = require('mongoose');
let Bike = mongoose.model('Bike');


module.exports = {
    addBike: (req, res) => {
        var bike = new Bike(req.body);
        bike.save((err, bike) => {
            if (err) {} else {
                return;
            }
        })
    },
    getAllBikes: (req, res) => {
        Bike.find({}, (err, bikes) => {
            if (err) {} else {
                return res.json(bikes);
            }
        })
    },
    getBike: (req, res) => {
        Bike.findOne({
            _id: req.params.id
        }, (err, current_bike) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else {
                return res.json(current_bike);
            }
        })
    },
    get3Bikes: (req, res) => {
        Bike.find({}).limit(3).exec((err, bike) => {
            if (err) {} else {
                return res.json(bike);
            }
        })
    },
    // Bike ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // FILTER METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
    getExpensiveBikes: (req, res) => {
        Bike.find({}).sort('-price').exec((err, bikes) => {
            if (err) {} else {
                return res.json(bikes);
            }
        })
    },
    getCheapestBikes: (req, res) => {
        Bike.find({}).sort('price').exec((err, bikes) => {
            if (err) {} else {
                return res.json(bikes);
            }
        })
    },

    // getPopularBikes: (req, res) => {
    //     Bike.find({}).sort('-bought').exec((err, bikes) => {
    //         if (err) {} else {
    //             return res.json(accessories);
    //         }
    //     })
    // },

    getLimitedBikes: (req, res) => {
        Bike.find({
            limited: true
        }, (err, bikes) => {
            if (err) {} else {
                return res.json(bikes);
            }
        })
    },
}