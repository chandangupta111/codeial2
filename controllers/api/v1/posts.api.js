 const Post = require('../../../models/post');


module.exports.index = async function(req,res){



    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });


    // module.exports.index = function(req,res){
        return res.json(200,{
            massag: "List of posts",
            posts: posts       
        })
    // }
}