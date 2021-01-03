import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Rather than using Try Catch blocks for every route using async functions,
// will import express-async-handler middleware from NPM

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})


// @desc Fetch product by ID
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access PRIVATE/ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  // We could add a conditional to match the req.user._id to the product.user._id if we wanted to 
  // restrict to only deleting products that users created.
  if (product) {
    await product.remove()
    res.json({message: 'Product removed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProductById, getProducts, deleteProduct }
