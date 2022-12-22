const postsControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postsControllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getPostById = (req, res) => {
    const id = req.params.id
    postsControllers.findPostsById()
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid Id' + id})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postNewPosts = (req, res) => {
    const userId = req.user.id
    const {content} = req.body
    postsControllers.createPosts({userId, content})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                content: 'text'
            }})
        })
}

const patchPosts = (req, res) => {
    const id = req.params.id
    const {content} = req.body
    const userId = req.user.id
    postsControllers.updatePosts(id, userId, {content})
        .then((data) => {
            if(data){
                res.status(200).json({message: `Post with id: ${id} edited succesfully by the  user with ${userId}`})
            } else {
                res.status(400).json({message: 'Post not available'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })

}

const deletePosts = (req, res) => {
    const id = req.params.id
    postsControllers.removePosts(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPosts,
    patchPosts,
    deletePosts
}