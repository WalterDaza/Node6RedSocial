const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Users = require('../models/users.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { // llave foranea
            key: 'id',
            model: Users
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Posts