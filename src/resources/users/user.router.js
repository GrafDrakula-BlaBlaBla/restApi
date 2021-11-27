const usersRoute = require('express').Router();
const userController = require('./user.controller');

usersRoute.get('/', userController.getAllUsers);
usersRoute.get('/:userId', userController.findOneUser);
usersRoute.post('/', userController.createUser);
usersRoute.put('/:userId', userController.updateUser);
usersRoute.delete('/:userId', userController.deleteUser);

module.exports = usersRoute;
