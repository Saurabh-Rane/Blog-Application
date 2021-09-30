const PATH = './data.json';
const fs = require('fs');

class Post {
    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog() {
        /** Get One Blog Post */
    }

    add() {
        /** Add new Post */
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

}

module.exports = Post;