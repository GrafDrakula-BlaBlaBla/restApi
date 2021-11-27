const boardsService = require('./board.service')
const {deleteBoardTask} = require('../tasks/task.service')

const createBoard = async(req,res,next) => {
    try {
        const newBoard = await boardsService.createBoard(req.body)
        res.status(201)
        return res.json(newBoard)
    }catch(error) {
        return next (Error(`createBoard ${error}`))
    }
}

const getAllBoards = async(req, res, next) => {
    try {
        const allBoards = await boardsService.getAllBoards()
        if(!allBoards) {
            res.status(404);
            throw new Error('Not Found');
        }
        res.status(200);
        return res.json(allBoards)
    }catch(error) {
        return next (Error(`getAllBoards ${error}`))
    }
}

const getOneBoard = async(req,res,next) => {
    try {
        const board = await boardsService.getOneBoard(req.params.boardId)
 
        if(!board) {
            res.status(404)
            throw new Error('Not Found')
        }
        res.status(200)
        return res.json(board)
    }catch(error) {
        return next (Error(`getBoard by Id ${error}`))
    }
}

const updateBoard = async(req, res, next) => {
    try {
        const up = await boardsService.updateBoard(req.params.boardId, req.body)
        if(!up) {
            res.status(404)
            throw new Error('Not found')
        }
        res.status(200)
        return res.json({message: 'Created'})
    } catch(error) {
        return next(Error(`updateBoard ${error}`))
    }
}

const deleteBoard = async(req, res, next) => {
    try {
        await boardsService.deleteBoard(req.params.boardId)
        await deleteBoardTask(req.params.boardId)
        res.status(204)
        return res.json({message: 'The board has been deleted'})
    }catch(error) {
        return next(Error(`deleteBoard ${error}`))
    }
}

module.exports = {
    createBoard,
    getAllBoards,
    getOneBoard,
    updateBoard,
    deleteBoard
}