import { Order } from "../models/carpet.model"

export const readOrders = (filter) => Order.find(filter)
export const readOrderById = (id) => Order.findById(id)
export const createOrder = (data) => Order.create(data)
export const readOrder = (filter) => Order.findOne(filter)
