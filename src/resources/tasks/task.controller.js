const taskService = require('./task.service')

const createTask = async (req, res, next) => {
    try {
        const nTask = await taskService.createTask(req.params.boardId, req.body)
        if(!nTask) {
            res.status(400)
            throw new Error('Bas request')
        }
        res.status(201)
        return res.json(nTask);

    } catch(error) {
        return next(Error(`Service createTask ${error}`))
    }
}

const getAllTasks = async (req, res, next) => {
    try {
        const all = await taskService.getAllTask(req.params.boardId);
        if(!all.length) {
            throw new Error('')
        }
        res.status(200)
        return res.json(all)

    } catch(error) {
        return next(Error(`Service getAllTasks ${error}`))
    }
}

const getOneTask = async (req, res, next) => {
    try {
        const one = await taskService.getOneTask(req.params.boardId, req.params.taskId)
        if(!one) {
            res.status(404)
            throw new Error()
        }
        res.status(200)
        return res.json({...one})
    } catch(error) {
        return next(Error(`Service getOneTask ${error}`))
    }
}

const updateTask = async (req, res, next) => {
    try {
        const task = await taskService.updateTask(req.params.boardId, req.params.taskId, req.body)
        res.status(200)
        return res.json(task) 
    } catch(error) {
        return next(Error(`Service updateTask ${error}`))
    }
}

const deleteUserTask = async(userId) => {
    await taskService.deleteUserTask(userId)
}

const deleteTask = async (req, res, next) => {
    try {
        const task = await taskService.deleteTask(req.params.boardId, req.params.taskId)
        if(!task) {
            res.status(404)
            throw new Error('User not found');
        }
        
        res.status(204).send('The user has been deleted')
    } catch(error) {
        next(Error(`Service deleteTask ${error}`))
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getOneTask,
    updateTask,
    deleteUserTask,
    deleteTask
}