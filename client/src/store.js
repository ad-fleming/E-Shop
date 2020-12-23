// This is where we'll connect any reducers or middleware 

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

// pass in: 
// 1) reducer
// 2) initial state
// 3) middleware
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) )

export default store 