let ContactsModel = require('../models/contacts.js');

module.exports.create = async function (req, res, next) {
    try {
        let newContacts = new ContactsModel(req.body);

        let result = await ContactsModel.create(newContacts);
        res.json(
            {
                success: true,
                message: 'Contact created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {

    try {
        let contacts = await ContactsModel.find();

        res.json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactsGet = async function (req, res, next) {
    try {
        let uID = req.params.contactsID;

        req.contacts = await ContactsModel.findOne({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.contactsByID = async function (req, res, next) {
    res.json(req.contacts);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.contactsID;

        let updateContacts = new ContactsModel(req.body);
        updateContacts._id = uID;

        let result = await ContactsModel.updateOne({ _id: uID }, updateContacts);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contacts updated successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Contacts not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let uID = req.params.contactsID;
        console.log("uid ", uID)
        let result = await ContactsModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contacts deleted successfully.'
                }
            );
        } else {
            // Express will catch this on its own.
            throw new Error('Contacts not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}