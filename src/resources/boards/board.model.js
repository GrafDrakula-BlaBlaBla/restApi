const {v4: uuidv4} = require('uuid');

class Board {
    constructor({
        id = uuidv4(),
        title = "board title",
        columns = [
            {
                id: uuidv4(),
                title: 'column title',
                order: 0
            }
        ],
    } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}

module.exports = {Board}
