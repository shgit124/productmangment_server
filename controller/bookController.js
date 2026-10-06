// const products = require('../models/productModels')


// Add Product
const products = require('../models/productModels');

exports.addProduct = async (req, res) => {
    try {

        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const { title, price, category, description } = req.body;

        const uploadimg = req.file ? req.file.filename : null;

        const newProduct = new products({
            title,
            price,
            category,
            description,
            uploadimg
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error adding product",
            error: error.message
        });
    }
};

exports.getProducts = async (req, res) => {
    try {

        const allProducts = await products.find()

        res.status(200).json({
            message: "Products fetched successfully",
            products: allProducts
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Error fetching products",
            error: error.message
        })
    }
}



// Delete Product
exports.deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;

        const deletedProduct = await products.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error deleting product",
            error: error.message
        });
    }
};


// Update Product
// exports.updateProduct = async (req, res) => {
//     try {

//         const { id } = req.params;

//         const { title, price, category, description } = req.body;

//         const updateData = {
//             title,
//             price,
//             category,
//             description
//         };

//         // If new image is uploaded
//         if (req.file) {
//             updateData.uploadimg = req.file.filename;
//         }

//         const updatedProduct = await products.findByIdAndUpdate(
//             id,
//             updateData,
//             { new: true }
//         );

//         if (!updatedProduct) {
//             return res.status(404).json({
//                 message: "Product not found"
//             });
//         }

//         res.status(200).json({
//             message: "Product updated successfully",
//             product: updatedProduct
//         });

//     } catch (error) {

//         console.log(error);

//         res.status(500).json({
//             message: "Error updating product",
//             error: error.message
//         });
//     }
// };

exports.updateProduct = async (req, res) => {

    try {

        const { id } = req.params;

        console.log("UPDATE ID:", id);

        const {
            title,
            price,
            category,
            description
        } = req.body;

        const updateData = {
            title,
            price,
            category,
            description
        };

        if (req.file) {
            updateData.uploadimg = req.file.filename;
        }

        const updatedProduct =
            await products.findByIdAndUpdate(
                id,
                updateData,
                { new: true }
            );

        if (!updatedProduct) {

            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {

        console.log("UPDATE ERROR:", error);

        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }
};