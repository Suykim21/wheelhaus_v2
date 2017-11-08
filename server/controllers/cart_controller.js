let mongoose = require('mongoose');
let Bike = mongoose.model('Bike');
let Essential = mongoose.model('Essential');

module.exports = {
    // CART ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
    getCart: (req, res) => {
        if (!req.session.cart) {
            req.session.cart = [];
        }
        return res.json(req.session.cart);
    },
    addItem: (req, res) => {
        if (req.params.type == 'essential') {
            Essential.find({
                _id: req.body.id
            }, (err, essential) => {
                if (err) {} else {
                    if (req.session.cart.length > 0) {
                        for (var i = 0; i < req.session.cart.length; i++) {
                            if (req.session.cart[i]._id == req.body.id) {
                                req.session.cart[i].quantity++;
                                req.session.save();
                                var added = true;
                                return res.json({
                                    success: true
                                });
                            }
                        }
                        if (!added) {
                            essential[0].quantity = 1;
                            req.session.cart.push(essential[0]);
                            req.session.save();
                            return res.json({
                                success: true
                            });
                        }
                    } else {
                        essential[0].quantity = 1;
                        req.session.cart.push(essential[0]);
                        req.session.save();
                        return res.json({
                            success: true
                        });
                    }
                }
            })
        } else if (req.params.type == 'bike') {
            Bike.find({
                _id: req.body.id
            }, (err, bike) => {
                if (err) {} else {
                    if (req.session.cart.length > 0) {
                        for (var i = 0; i < req.session.cart.length; i++) {
                            if (req.session.cart[i]._id == req.body.id) {
                                req.session.cart[i].quantity++;
                                req.session.save();
                                var added = true;
                                return res.json({
                                    success: true
                                });
                            }
                        }
                        if (!added) {
                            bike[0].quantity = 1;
                            req.session.cart.push(bike[0]);
                            req.session.save();
                            return res.json({
                                success: true
                            });
                        }
                    } else {
                        bike[0].quantity = 1;
                        req.session.cart.push(bike[0]);
                        req.session.save();
                        return res.json({
                            success: true
                        });
                    }
                }
            })
        }
    },
    removeItem: (req, res) => {
        for (var i = 0; i < req.session.cart.length; i++) {
            if (req.session.cart[i]._id == req.params.id) {
                req.session.cart.splice(i, 1);
            }
        }
        req.session.save();
        return res.json(req.session.cart);
    },
    clearCart: (req, res) => {
        req.session.cart = [];
        req.session.save();
        return res.json(req.session.cart);
    },
}