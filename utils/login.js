const loginAuth = (req,res,next)=> {
    if(!req.session.logged_in){
        res.redirect('/login')
    }
}
module.exports = loginAuth;