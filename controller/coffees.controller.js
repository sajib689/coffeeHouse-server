import {
    createCoffeesService,
    deleteCoffeeByIdService,
    getCoffeeByIdService,
    getCoffeesService,
    updateCoffeeByIdService
  } from "../service/coffees.service.js";
  
  export const createCoffeesController = async (req, res) => {
    try {
      const coffee = req.body;
      const newCoffee = await createCoffeesService(coffee);
      res.status(201).json(newCoffee);
    } catch (error) {
      console.error("Error creating coffee:", error);
      res.status(500).json({ message: "Coffee creation failed" });
    }
  };
  
  export const getCoffeesController = async (req, res) => {
    try {
      const query = req.query;
      const coffees = await getCoffeesService(query);
      res.status(200).json(coffees);
    } catch (error) {
      console.error("Error fetching coffees:", error);
      res.status(500).json({ message: "Coffees fetching failed" });
    }
  };
  
  export const getCoffeeByIdController = async (req, res) => {
    try {
      const { id } = req.params; // Convert to Number if needed
      const coffee = await getCoffeeByIdService(id);
      if (!coffee) {
        return res.status(404).json({ message: "Coffee not found" });
      }
      res.status(200).json(coffee);
    } catch (error) {
      console.error("Error fetching coffee by ID:", error);
      res.status(500).json({ message: "Coffee fetching by ID failed" });
    }
  };
  
  export const updateCoffeeByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const coffee = req.body;
      const updatedCoffee = await updateCoffeeByIdService(id, coffee);
      if (!updatedCoffee) {
        return res.status(404).json({ message: "Coffee not found" });
      }
      res.status(200).json(updatedCoffee);
    } catch (error) {
      console.error("Error updating coffee:", error);
      res.status(500).json({ message: "Coffee update failed" });
    }
  };
  
  export const deleteCoffeeByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCoffee = await deleteCoffeeByIdService(id);
      if (!deletedCoffee) {
        return res.status(404).json({ message: "Coffee not found" });
      }
      res.status(200).json({ message: "Coffee deleted successfully" });
    } catch (error) {
      console.error("Error deleting coffee:", error);
      res.status(500).json({ message: "Coffee deletion failed" });
    }
  };
  