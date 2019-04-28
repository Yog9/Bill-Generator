let User = require('../models/User');
const bcrypt = require('bcryptjs');
module.exports = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name) {
        return res.send({
            success: false,
            message: 'Error: Name cannot be blank.'
        });
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error:Password cannot be blank.'
        });
    }

    User.findOne(
        { email: email }
    ).then((user, err) => {
        if (user) {
            //User Exists
            return res.send({
                success: false,
                message: 'Error: Email is registerd'
            });
        }
        else
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error:Server occured'
                });
            }

            else {
                const newUser = new User({
                    name,
                    email,
                    password
                })
                //hash password
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, function (err, hash) {
                        // Store hash in your password DB.
                        if (err) throw err;
                        //Set password to hash
                        newUser.password = hash;
                        //save user
                        newUser.save((err, user) => {
                            if (err) {
                                return res.send({
                                    success: false,
                                    message: 'Error: Server error'
                                });
                            }
                            return res.send({
                                success: true,
                                message: 'You are registered and can login'
                            });
                        });
                    });
                })
            }

    })
}