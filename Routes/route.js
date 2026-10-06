// const express = require('express')
// const bookcontroller = require('../controller/bookController')


// router = express.Router()





// router.post(
//     '/add-product',
//     upload.single('image'),
//     bookcontroller.addProduct
// );




// module.exports = router

const express = require('express');

const bookcontroller = require('../controller/bookController');
const upload = require('../middleware/multer');

const router = express.Router();

router.post(
    '/add-product',
    upload.single('uploadimg'),
    bookcontroller.addProduct
);
// delete
router.get('/products', bookcontroller.getProducts)

router.delete(
    '/products/:id',
    bookcontroller.deleteProduct
);

//update
router.put(
    '/products/:id',
    upload.single('uploadimg'),
    bookcontroller.updateProduct
);

module.exports = router;