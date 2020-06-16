const { Router } = require('express')
const repositoryController = require('./controllers/repositoryController')

const app = Router()

app.get("/repositories", repositoryController.index)

app.post("/repositories", repositoryController.create)

app.put("/repositories/:id", repositoryController.update)

app.delete("/repositories/:id", repositoryController.delete)

app.post("/repositories/:id/like", repositoryController.like)

module.exports = app