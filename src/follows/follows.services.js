const followControllers = require('./follows.controllers')

const postFllower = (req, res) => {
    const followerId = req.user.id
    const followedId = req.params.id

    followControllers.followUser(followerId, followedId)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getMyFollowers = (req, res) => {
    const userId = req.user.id
    followControllers.findMyFollowers(userId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getMyFollowings = (req, res) => {
    const userId = req.user.id
    followControllers.findMyFollowing(userId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    postFllower,
    getMyFollowers,
    getMyFollowings
}