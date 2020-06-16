const { uuid } = require("uuidv4")

const repositories = []

module.exports = {
    async index(req, res) {
        return res.json(repositories)
    },
    async create(req, res) {
        const { title, url, techs } = req.body

        const id = uuid()

        const repository = {id, title, url, techs, likes: 0}

        repositories.push(repository)

        return res.json(repository)
    },
    async update(req, res) {
        const { id } = req.params


        const { title, url, techs } = req.body

        const index = repositories.findIndex(rep => rep.id == id)

        if (index < 0)
            return res.status(400).json()

        repositories[index].title = title
        repositories[index].url = url
        repositories[index].techs = techs

        return res.json(repositories[index])
    },
    async delete(req, res) {
        const { id } = req.params

        const index = repositories.findIndex(rep => rep.id == id)

        if (index < 0)
            return res.status(400).json()

        repositories.splice(index, 1)

        return res.status(204).json()
    },
    async like(req, res) {
        const { id } = req.params

        const index = repositories.findIndex(rep => rep.id == id)

        if (index < 0)
            return res.status(400).json()

        repositories[index].likes++

        return res.json(repositories[index])
    },
}