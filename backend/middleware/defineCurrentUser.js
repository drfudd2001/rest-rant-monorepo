const db = require("../models")
const jwt = require('jsonwebtoken')

const { User } = db;

async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = jwt.verify(token, process.env.JWT_SECRET)
            console.log(method, token, result)
            const { id } = result
            let user = await User.findOne({ 
                where: {
                    userId: id
                }
            })
            req.currentUser = user
            
        }
        next()
    } catch(err){
        req.currentUser = null
        next()
    }
}

module.exports = defineCurrentUser