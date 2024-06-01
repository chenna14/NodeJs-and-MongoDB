const User = require('../users/models/user');

const bcrypt = require('bcrypt');

module.exports = {
    findByEmail:async (email) => {
        return await User.findOne({email:email});
    },
    findByUserID: async(userID) => {
        return await User.findById(userID);
    },
    findByUsername: async(username) => {
        return await User.findOne({username});
    },
    create:async(data) => {

        data.password = await bcrypt.hash(data.password, 10);

        return await User.create(data);

    },

    isUsernameExist:async(username) => {
        return await User.exists({username});
    },

    isEmailExist:async(email) => {
        return await User.exists({email});
    },

};
