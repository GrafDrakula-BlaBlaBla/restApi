const {Board} = require('./board.model');
const {dbboards} = require('../db');


const createBoard = async(newBoard) => {
    const newB = await new Board(newBoard)
    dbboards.push({...newB})
    return newB
}

const getAllBoards = async() => {
    const result = await dbboards;
    return result
}

const getOneBoard = async(boardId) => {
    const res = dbboards.find(el => el.id === boardId)
    return res;
}

const updateBoard = async(boardId, newBoard) => {
    dbboards.forEach((el, i) => {
        if(el.id === boardId) {
            dbboards[i] = {...newBoard}
        }
    })
    const newB = dbboards.find(el => el.id === boardId)
    return newB
}

const deleteBoard = async(boardId) => {
    await dbboards.forEach((el, i) => {
        if(el.id === boardId) {
            dbboards.splice(i, 1);
        }
    })
}


module.exports = {
    createBoard,
    getAllBoards,
    getOneBoard,
    updateBoard,
    deleteBoard
}