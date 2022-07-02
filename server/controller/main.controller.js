const db = require('../db')

class MainController {
    async getTable(req, res) {
        const table = await db.query(`SELECT * FROM public.items `)
        res.json(table.rows)
    }
}


module.exports = new MainController()