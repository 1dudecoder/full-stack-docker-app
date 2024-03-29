import { User } from "../constant";
import { UserRepository } from "../repository";

let userrepo = new UserRepository()

class userServices {

    async createUser(users:User) {
        try {
          let data = await userrepo.createUser(users);
          return data;
        } catch (err) {
          console.log(
            "services error create"
          );
          throw err;
        }
    }

    async getUserById(userId:string) {
        try {
          let data = await userrepo.getUserById(userId);
          return data;
        } catch (err) {
          console.log(
            "services error getusersbyid"
          );
          throw err;
        }
    }

    async getAllUser() {
        try {
          let data = await userrepo.getAllUser();
          return data;
        } catch (err) {
          console.log(
            "services error getalluser"
          );
          throw err;
        }
    }

    async deleteUser(userId:string) {
        try {
          let data = await userrepo.deleteUser(userId);
          return data;
        } catch (err) {
          console.log(
            "services error deleteuser"
          );
          throw err;
        }
    }


    async updateUser(userId:string, newData:User) {
        try {
          let data = await userrepo.updateUser(userId, newData);
          return data;
        } catch (err) {
          console.log(
            "services error updateuser"
          );
          throw err;
        }
    }

}


export default userServices;