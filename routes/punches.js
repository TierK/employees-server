const {setPunch} = require('../punch');

module.exports = function (app) {
    app
        .get('/api/punches',function (req,res) {
            res.json({message:'Hello world'})
        })

        .post('/api/punches/:email/:punchType',function (req,res) {
            const punchType = req.params.punchType;
            setPunch(req.params.email, punchType, function(err,punch){
                if (err) {
                    res.status(500).end();
                } else if (punchType === 'checkin' || punchType === 'checkout'){
                    res.json(punch).end();
                } else {
                    res.json({message: `ERROR: Punch type doesn't exist`}).end();
                }
            });
        });
};