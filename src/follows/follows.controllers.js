const Follows = require('../models/follows.models')
const Users = require('../models/users.models')
const uuid = require('uuid')

const followUser = async (follower, followed) => {
    const data = await Follows.create({
        id: uuid.v4(),
        userId: follower,
        userId2: followed
    })
    return data
}

const findMyFollowers = async (userId) => {
    const data = await Follows.findAll({
        where: {
            userId2: userId
        },
        include: {
            model: Users,
            attributes: ['id', "firstName", 'lastName'],
            as: 'followers'
        }
    })
    return data.map(item => item.followers)
}


const findMyFollowing = async (userId) => {
    const data = await Follows.findAll({
        where: {
            userId: userId
        },
        include: {
            model: Users,
            attributes: ['id', "firstName", 'lastName'],
            as: 'following'
        }
    })
    return data.map(item => item.following)
}

module.exports = {
    followUser,
    findMyFollowers,
    findMyFollowing
}