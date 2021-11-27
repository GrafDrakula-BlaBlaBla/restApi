const {Task} = require('./task.model')
let {dbtasks} = require('../db');

const createTask = async(boardId, newTask) => {
    const newT = await new Task({...newTask,boardId})
    dbtasks.push(newT);
    return {...newT}
}

const getAllTask = async(boardId) => {
    const result = await dbtasks;
    if(!result.length) {
        dbtasks.push(new Task(boardId))
    }
    return result
}

const getOneTask = async(boardId, taskId) => {
    const res = await dbtasks.find(el => 
        el.boardId === boardId && el.id === taskId)
    return res
}

const updateTask = async(boardId, taskId, newTask) => {
    dbtasks.forEach((el, i) => {
        if(el.boardId === boardId && el.id === taskId) {
            dbtasks[i] = {...newTask}
        }
    })
    const res = await dbtasks.find(el => el.id === taskId)
    return res
}

const deleteUserTask = async(userId) => {
    await dbtasks.forEach((task, i) => {
        if(task.userId === userId) {
          dbtasks[i].userId = null;
        }
    });    
}

const deleteBoardTask = async(boardId) => {
    const n = await dbtasks.filter((task) => task.boardId !== boardId); 
    dbtasks = [...n]   
}

const deleteTask = async(boardId, taskId) => {
    const res = await dbtasks.find((el, i) => {
        if(el.boardId === boardId && el.id === taskId) {
           dbtasks.splice(i, 1)
           return el.id
        }
        return ''
    })
    return res.id
}

module.exports = {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    deleteUserTask,
    deleteBoardTask,
    deleteTask,
}