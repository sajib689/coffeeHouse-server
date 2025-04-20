import mongoose, { Schema } from "mongoose";


export const orderSchema = new Schema({
    productName: {
        type: String
    },
    price: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    city: {
        type: String
    },
    postalCode: {
        type: String
    },
    street: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Order = mongoose.model('Order', orderSchema)