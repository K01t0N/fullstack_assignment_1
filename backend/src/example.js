import { initDatabase } from "./db/init.js"

import { Post } from './db/models/post.js'

import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
    title: 'Hello Sixth Post!',
    author: 'John Doe',
    contents: 'This is my new exciting content.',
    tags: ['frontend'],
})
const createdPost = await post.save()

await Post.findByIdAndUpdate(createdPost._id, {
    $set: { title: 'Hello again, Mongoose!' },
})

const posts = await Post.find()
console.log(posts)