const { Post } = require('../models');

const postData = [
    {
        user_id: "1",
        title: "Coding Practice Resources",
        post_body: "There are many great resources like:"
},
    {
        user_id: "2",
        title: "Secrets to MVC",
        post_body: "Practice"
},
    {
        user_id: "1",
        title: "welp",
        post_body: "testing"
}
];

const genPostData = () => Post.bulkCreate(postData);

module.exports = genPostData;