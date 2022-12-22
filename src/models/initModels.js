const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./post.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const Follows = require('./follows.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    // Users - Posts
    Users.hasMany(Posts) // un user tiene muchas publicaciones
    Posts.belongsTo(Users) // una publicación pertenece a un user

    //Posts - Likes
    Posts.hasMany(Likes) // una posts tiene muchos likes
    Likes.belongsTo(Posts) // un like le pertenece a una posts

    // Users - Likes
    Users.hasMany(Likes) // un user tiene muchos likes
    Likes.belongsTo(Users) // un like le pertenece a un user

    // Users - Follows (Followings)
    Users.hasMany(Follows)
    Follows.belongsTo(Users, {
        as: 'following',
        foreignKey: 'userId2'
    })
    Follows.belongsTo(Users, {
        as: 'followers',
        foreignKey: 'userId'
    })


}

module.exports = initModels