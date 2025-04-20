import express from 'express'
import { createOrderController, deleteOrderController, getOrderByEmailController, getOrderController, updateOrderStatusController } from '../controller/order.controller.js'

const orderRouter = express.Router()

orderRouter.get('/order', getOrderController)
orderRouter.post('/order', createOrderController)
orderRouter.get('/order/:email', getOrderByEmailController)
orderRouter.delete('/order/:id', deleteOrderController)
orderRouter.patch('/order/:id/status', updateOrderStatusController)

export default orderRouter