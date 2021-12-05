const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        comment_body: "wow what a great resource ",
        post_id: 1

    },
    {
        user_id: 2,
        comment_body: "Hahaha",
        post_id: 1
    },
    {
        user_id: 1,
        comment_body: "Love this",
        post_id: 2
    }
];

const genCommentData = () => Comment.bulkCreate(commentData);

module.exports = genCommentData;