const express = require('express');
const {getPosts, createPost} = require('../controllers/post');
const validator = require('../validator')
const app = express();

const router = express.Router()

router.get('/',getPosts)
router.post('/post', validator.createPostValidator,createPost)


module.exports = router;

