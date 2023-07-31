// module.exports.profile = function(req, res){
//     res.end('<h1>users profile</h1>');
// }


// const User = require('../models/user') 
 const User = require('../models/user');
 
module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: 'User Profile'
    });
    
}
module.exports.singUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}
module.exports.singIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

//get up sighn up deta
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('error in finding user in signing up'); return}
        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating user while signing up'); return}
                return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }

    })

}


// sign in and create a secation for the user 
module.exports.createSession = function(req, res){
    User.findOne({email: req.body.email},function(err, user){
        if(err){console.log('error in finding uder in signing in')}
        //handle user found
        if(user){
            //handle password which do not match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            //handle session creaction
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile')
        }else{
            //handle user not found
            return res.redirect('back');
        }
        
    })
}