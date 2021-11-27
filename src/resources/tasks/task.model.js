const {v4: uuidv4} = require('uuid')

class Task {
    constructor({
        id=uuidv4(),
        title="testModelTitel",
        order=0,
        description="testModelDesc",
        userId=uuidv4(),
        boardId=uuidv4(),
        columnId=uuidv4(),
    } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId=columnId;
    }
}

module.exports = {
    Task,
}