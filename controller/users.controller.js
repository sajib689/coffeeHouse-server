import {
  createUsersService,
  deleteUserByIdService,
  getUserByIdService,
  getUsersService,
  updateUserRoleByIdService,
} from "../service/users.service.js";

export const createUserController = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUsersService(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "User creation failed" });
  }
};
export const getUsersController = async (req, res) => {
  try {
    const query = req.query;
    const users = await getUsersService(query);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "User fetching failed" });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const email  = req.params.email
    const user = await getUserByIdService(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "User fetching by ID failed" });
  }
};
export const updateUserRoleByIdController = async (req, res) => {
  try {
    const _id = req.params._id;
    const  {role} = req.body;

    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }

    const updatedUser = await updateUserRoleByIdService(_id, role);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User role updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "User role update failed" });
  }
};

export const deleteUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserByIdService(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "User deletion failed" });
  }
};
