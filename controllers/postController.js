const Post = require('../models/Post')


const createPost = async (req, res) => {
    try {
        const { title, content } = req.body

        const post = new Post({
            title,
            content,
            author: req.user.id
        })
        await post.save()
        res.status(201).json({ message: "New post created", post })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email')
        if (!posts) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'name email')
        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.json(post)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getMyPosts = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user.id }).populate('author', 'name email')
        res.json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.status(404).json({ message: "Post not found" })

        if (post.author.toString() !== req.user.id)
            return res.status(403).json({ message: "Not authorized" })

        const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
        res.json({ message: "Post updated successfully", post: updated })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.status(404).json({ message: "Post not found" })

        if (post.author.toString() !== req.user.id)
            return res.status(403).json({ message: "Not authorized" })

        await Post.findByIdAndDelete(req.params.id)  
        res.json({ message: "Post deleted successfully" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


module.exports = { createPost, getPosts, getPostById, getMyPosts, updatePost, deletePost }