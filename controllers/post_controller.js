const post = require('../models/post')
module.exports.create = function(req,res){
    post.create({
        content:req.body.content,
        user: req.user_id
    },function(err,post){

    if(err){console.log('err in creating a post'); return;}

    return res.redirect('back');
    
    })
    
}