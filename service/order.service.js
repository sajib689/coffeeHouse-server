import { Order } from "../schema/order.schema.js"

export const createOrderService = async (data) => {
    const order = await Order.create(data);
    return order; 
  };

export const getOrderService = async () => {
    try {
        const result = await Order.find()
        return result
    } catch (err) {
        throw new Error(err)
    }
}

export const getOrderByEmailService = async (email) => {
    try {
        // Use find with an object to search for the orders by email
        const result = await Order.find({ email: email });

        // If no orders are found, you can return null or an appropriate message
        if (result.length === 0) {
            return { message: "No orders found for this email." };
        }

        return result;
    } catch (err) {
        // Throw an error if something goes wrong
        throw new Error(err.message);
    }
};

export const deleteOrderService = async (id) => {
    try{
        const result = await Order.findByIdAndDelete(id)
        return result
    } catch(err) {
        throw new Error(err)
    }
}

export const updateOrderStatusService = async (id,status) => {
    try {
        const updateOrder = await Order.findByIdAndUpdate(id, {status: status}, {new: true})
        return updateOrder
    } catch(err) {
        throw new Error(err)
    }
}