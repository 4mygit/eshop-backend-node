const login = (req, res) => {

    const {userid, password }= req.body;
    //const password = req.body.password;

    if(userid=='admin' && password == 'pass1234'){

        res.status(200).json({mssg:'Login success'})
    }
    else{
                res.status(200).json({mssg:'Wrong userid or password!'})

    }

}

module.exports = {
    login
}