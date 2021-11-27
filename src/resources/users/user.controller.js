const usersService = require('./user.service');
const {deleteUserTask} = require('../tasks/task.service')

const getAllUsers = async (req, res) => {
    const all = await usersService.getAllUsers();
    res.status(200)
    res.json(all);
};

const findOneUser = async (req, res) => {
  const us = await usersService.findOneUser(req.params.userId)
  res.status(200)
  res.json(us)
}

const createUser = async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  await usersService.updateUser(req.params.userId, req.body)
  res.status(200).json('update')
};

const deleteUser = async (req, res) => {
  await usersService.deleteUser(req.params.userId)
  await deleteUserTask(req.params.userId)
  res.status(200).json('delete')
};

module.exports = {
  createUser,
  getAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
};
