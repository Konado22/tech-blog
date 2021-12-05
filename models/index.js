const Users= require('./User')
const Posts= require('./Post')
const Comments= require('./Comment')


Users.hasMany(Posts, {
    foreignKey:'id'
})
Posts.belongsTo(Users, {
    foreignKey: 'id'
})
Comments.belongsTo(Posts, {
    foreignKey:'post_id'
})
Posts.hasMany(Comments, {
    foreignKey:'post_id'
})
module.exports = {Users, Posts, Comments}