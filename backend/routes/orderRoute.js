import express from 'express'
import { allOrders, placeOrder, updateStatus, userOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
//admin feature
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


//Payment Feature

orderRouter.post('/place',authUser, placeOrder)
//orderRouter.post('/place',authUser, placeOrder)

//user feature

orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter;