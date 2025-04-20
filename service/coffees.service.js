import { Coffees } from "./../schema/coffees.schema.js";

export const createCoffeesService = async (coffee) => {
  try {
    const newCoffee = await Coffees.create(coffee);
    return newCoffee;
  } catch (error) {
    console.error("Error creating coffee:", error);
    throw new Error("Coffee creation failed");
  }
};

export const getCoffeesService = async (query) => {
  try {
    const coffees = await Coffees.find(query);
    return coffees;
  } catch (error) {
    console.error("Error fetching coffees:", error);
    throw new Error("Coffees fetching failed");
  }
};

export const getCoffeeByIdService = async (id) => {
  try {
    const coffee = await Coffees.findById(id);
    return coffee;
  } catch (error) {
    console.error("Error fetching coffee by ID:", error);
    throw new Error("Coffee fetching by ID failed");
  }
};

export const updateCoffeeByIdService = async (id, coffee) => {
  try {
    const updatedCoffee = await Coffees.findByIdAndUpdate(id, coffee, {
      new: true,
    });
    return updatedCoffee;
  } catch (error) {
    console.error("Error updating coffee:", error);
    throw new Error("Coffee update failed");
  }
};
export const deleteCoffeeByIdService = async (id) => {
  try {
    const deletedCoffee = await Coffees.findByIdAndDelete(id);
    return deletedCoffee;
  } catch (error) {
    console.error("Error deleting coffee:", error);
    throw new Error("Coffee deletion failed");
  }
};
