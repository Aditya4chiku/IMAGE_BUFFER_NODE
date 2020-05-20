
const User = require('../model/user')
exports.Profile = async (req, res) => {

    const data = await req.file.buffer
    
    try {
        const user = new User({
            avatar: data,
            name: req.body.name
        })
        await user.save()
        return res.status(200).json({ success: 'tes' })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}