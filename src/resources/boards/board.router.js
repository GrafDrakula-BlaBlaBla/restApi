const boardsRoute = require('express').Router()
const boardsController = require('./board.controller');

boardsRoute.get('/', boardsController.getAllBoards);
boardsRoute.get('/:boardId', boardsController.getOneBoard);
boardsRoute.post('/', boardsController.createBoard);
boardsRoute.put('/:boardId', boardsController.updateBoard);
boardsRoute.delete('/:boardId', boardsController.deleteBoard);

module.exports = boardsRoute;
