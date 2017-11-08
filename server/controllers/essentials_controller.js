let mongoose = require('mongoose');
let Essential = mongoose.model('Essential');

module.exports = {
    addEssential: (req, res) => {
        var essential = new Essential(req.body);
        essential.save((err, essential) => {
            if (err) {} else {
                return;
            }
        })
    },
    getAllEssentials: (req, res) => {
        Essential.find({}, (err, essentials) => {
            if (err) {} else {
                return res.json(essentials);
            }
        })
    },
    getAllEssentials: (req, res) => {
        Essential.findOne({
            _id: req.params.id
        }, (err, current_essential) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else {
                return res.json(current_essential);
            }
        })
    },
    get3Essentials: (req, res) => {
        Essential.find({}).limit(3).exec((err, essentials) => {
            if (err) {} else {
                return res.json(essentials);
            }
        })
    },
    // Essential ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // FILTER METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
    getExpensiveEssentials: (req, res) => {
        Essential.find({}).sort('-price').exec((err, essentials) => {
            if (err) {} else {
                return res.json(essentials);
            }
        })
    },
    getCheapestEssentials: (req, res) => {
        Essential.find({}).sort('price').exec((err, essentials) => {
            if (err) {} else {
                return res.json(essentials);
            }
        })
    },

    // getPopularEssentials: (req, res) => {
    //     Essential.find({}).sort('-bought').exec((err, essentials) => {
    //         if (err) {} else {
    //             return res.json(essentials);
    //         }
    //     })
    // },

    getLimitedEssentials: (req, res) => {
        Essential.find({
            limited: true
        }, (err, essentials) => {
            if (err) {} else {
                return res.json(essentials);
            }
        })
    },
}