const express = require('express')
const { createPost, getPosts, updatePost, deletePost, getPostById, getMyPosts } = require('../controllers/postController')
const protect = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/my-posts', protect, getMyPosts)  
router.get('/:id', getPostById)
router.get('/', getPosts)
router.post('/', protect, createPost)
router.put('/:id', protect, updatePost) 
router.delete('/:id', protect, deletePost) 

module.exports = router