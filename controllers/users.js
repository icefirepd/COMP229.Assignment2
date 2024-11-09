let UsersModel = require('../models/users.js');

module.exports.create = async function (req, res, next) {
    try {
        let newUsers = new UsersModel(req.body);

        let result = await UsersModel.create(newUsers);
        res.json(
            {
                success: true,
                message: 'User created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {

    try {
        let users = await UsersModel.find();

        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.usersGet = async function (req, res, next) {
    try {
        let uID = req.params.usersID;

        req.users = await UsersModel.findOne({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.usersByID = async function (req, res, next) {
    res.json(req.users);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.usersID;

        let updateUsers = new UsersModel(req.body);
        updateUsers._id = uID;

        let result = await UsersModel.updateOne({ _id: uID }, updateUsers);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Users updated successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Users not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let uID = req.params.usersID;
        console.log("uid ", uID)
        let result = await UsersModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Users deleted successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Users not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}