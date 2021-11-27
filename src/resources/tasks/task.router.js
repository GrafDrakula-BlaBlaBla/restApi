const tasksRoute = require('express').Router();
const taskService = require('./task.controller')

tasksRoute.get('/:boardId/tasks', taskService.getAllTasks);
tasksRoute.get('/:boardId/tasks/:taskId', taskService.getOneTask);
tasksRoute.post('/:boardId/tasks', taskService.createTask);
tasksRoute.put('/:boardId/tasks/:taskId', taskService.updateTask);
tasksRoute.delete('/:boardId/tasks/:taskId', taskService.deleteTask);

module.exports = tasksRoute;
