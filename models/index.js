const {User}= require('./User')
const {Post}= require('./Post')
const {Comment}= require('./Comment')
const { userInfo } = require('os')
User.hasMany(Post, {
    foreignKey:'id'
})
Post.belongTo(User, {
    foreignKey: 'id'
})
Comment.belongTo(Post, {
    foreignKey:'post_id'
})
Post.hasMany(Comment, {
    foreignKey:'post_id'
})
module.exports = {User, Post, Comment}