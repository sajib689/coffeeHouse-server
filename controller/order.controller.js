import { createOrderService, deleteOrderService, getOrderByEmailService, getOrderService, updateOrderStatusService } from "../service/order.service.js"

export const createOrderController = async (req, res) => {
    try {
      const data = req.body;
      const result = await createOrderService(data);
  
      if (!result) {
        return res.status(400).json({ message: "Failed to create order" });
      }
  
      res.status(201).json(result); 
    } catch (err) {
      console.error("Create Order Error:", err);
      res.status(500).json({ message: "Server error while creating order" });
    }
  };

export const getOrderController = async (req, res) => {
    try{
        const result = await getOrderService()
        res.status(201).json(result);

    } catch(err) {
        throw new Error(err)
    }
}

export const getOrderByEmailController = async (req, res) => {
    try {
        const email = req.params.email
        const result = await getOrderByEmailService(email)
        res.status(201).json(result);

    } catch (err) {
        throw new Error(err)
    }
}

export const deleteOrderController = async (req, res) => {
    try {
        const id = req.params.id
        const result = await deleteOrderService(id)
        res.status(201).json(result);

    } catch(err) {
        throw new Error(err)
    }
}

export const updateOrderStatusController = async (req, res) => {
    try {
        const id = req.params.id
        const {status} = req.body 
        const result = await updateOrderStatusService(id,status)
        res.status(201).json(result);

    } catch (err) {
        throw new Error(err)
    }
}