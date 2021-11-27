const {User} = require('./user.model'); 
const {dbusers} = require('../db');


const getAllUsers = async() => {
  const res = await dbusers
  return res
};

const findOneUser = async (userId) => {
  const us = await dbusers.find(el => el.id === userId)
  return User.toResponse(us)
}

const createUser = async(user) => {
  const us = new User(user)
  dbusers.push(us)
  return User.toResponse(us)
}
    
const updateUser = async(userId, nBody) => {
  await dbusers.forEach((el, i) => {
      if(el.id === userId) {
        dbusers[i] = {...nBody}
      }
  })
  const newU = dbusers.find(el => el.id === userId)
  return newU
}

const deleteUser = async(userId) => {
  await dbusers.forEach((el, i) => {
      if(el.id === userId) {
        dbusers.splice(i, 1)
      }
  })
}

module.exports = { 
  createUser,
  getAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
};
