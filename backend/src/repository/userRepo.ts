import { User } from "../constant";
import prisma from "../utils/prima.config";

class UserRepository {
  async createUser(user: User) {
    try {
      let data = await prisma.user.create({
        data: user,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUserById(userId: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      console.log("User found:", user);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  async getAllUser() {
    try {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteUser(userId: string) {
    try {
      const deletedUser = await prisma.user.delete({
        where: {
          id: userId,
        },
      });
      console.log("User deleted:", deletedUser);
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

  async updateUser(userId: string, newData: User) {
    console.log(userId, "myuserid----repo")
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: newData,
      });
      console.log("User updated:", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
}

export default UserRepository;
