const router = require('express').Router();

const multer = require('multer');
const { Profile } = require('../controller/user.profile')

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
            cb(new Error('Please uplaod a image'))
        cb(undefined, true)
    }
})


router.post('/register', upload.single('upload'), Profile)


router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
    } catch (err) {
        console.log(err)

    }
})





module.exports = router