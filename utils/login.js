const loginAuth = (req,res,next)=> {
    console.log(req.session, "login auth")
    if(!req.session.logged_in){
        res.redirect('/login')
    }
    else {
        next()
    }
};
module.exports = loginAuth;