import { Users } from "../schema/users.schema.js";

export const createUsersService = async (user) => {
  try {
    const newUser = await Users.create(user);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
};

export const getUsersService = async (query) => {
  try {
    const users = await Users.find(query);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("User fetching failed");
  }
};

export const getUserByIdService = async (email) => {
  try {
    const user = await Users.findOne({email});
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("User fetching by Email failed");
  }
};

export const updateUserRoleByIdService = async (id, role) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user role:", error);
    throw new Error("User role update failed");
  }
};

export const deleteUserByIdService = async (id) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("User deletion failed");
  }
};
