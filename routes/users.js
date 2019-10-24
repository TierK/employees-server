const {getUserByEmail} = require("../users");
const {setUser} = require("../users");
module.exports = function(app) {
    app
        .get('/api/users/:email', function (req, res) {
            console.log(req.params.email);
            getUserByEmail(req.params.email,function (err, user) {
                    if (err) {
                        res.status(500).end();
                    } else if (!user) {
                        res.status(404).json({message:'User not found'}).end();
                    } else {
                        res.json(user).end();
                    }
                }
            );
        })
        .post('/api/users', function (req, res) {
            setUser(req.body, function (err) {
                if(err){
                    res.status(500).end();
                }else {
                    res.json(req.body);
                }
            });
        })
        .put('/api/users', function (req, res) {
            res.json({message: 'Hello world'})
        })
        .delete('/api/users', function (req, res) {
            res.json({message: 'Hello world'})
        });
};