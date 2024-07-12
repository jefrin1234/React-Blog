const express = require('express')
const blogRouter = express.Router()
const {fetchListOfBlogs,addNewBlog,updataABlog,deleteABlog} = require('../controller/blog-controller')


blogRouter.get('/',fetchListOfBlogs)
blogRouter.post('/add',addNewBlog)
blogRouter.put('/update/:id',updataABlog)
blogRouter.delete('/delete/:id',deleteABlog)



module.exports = blogRouter;