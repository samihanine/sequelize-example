const { models } = require('../database/sequelize');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
    try {
        const users = await models.user.findAll();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving users."});
    }
}

exports.getById = async (req, res) => {
	const id = req.params.id;

    try {
        const user = await models.user.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send('404 - Not found');
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving the user."});
    }
}

exports.create = async (req, res) => {
    const user = req.body;
    user.id = uuidv4();

    try {
        await models.user.create(user);
        res.status(200).json({ id: user.id });
    } catch(err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the user."});
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = req.body;
		await models.user.update(req.body, { where: { id: id }});
        res.status(200).json({ message: "user " + id + " updated"});
    } catch(err) {
        res.status(500).send({ message: err.message || "Some error occurred while updating the user."});
    }
}

exports.remove = async (req, res) => {
    const id = req.params.id;
    try {
        await models.user.destroy({ where: { id: id }});
        res.status(200).json({ message: "user " + id + " deleted"});
    } catch(err) {
        res.status(500).send({ message: err.message || "Some error occurred while deleting the user."});
    }
}
