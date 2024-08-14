const postModel = require('../model/post');

exports.getpost = async (req, res, next) => {
    try {
        const post = await postModel.findAll();
        res.status(200).json({ message: 'its succefully fetch', post: post })
    } catch (error) {
        console.log(error);

    }
}

exports.createPost = async (req, res, next) => {
    const titleField = req.body.title;
    const contentfield = req.body.content;

    try {
        const post = await postModel.create({
            title: titleField,
            content: contentfield
        });
        res.status(201).json({ message: 'created succefully fetch', post: post })
    } catch (error) {
        console.log(error);

    }
};