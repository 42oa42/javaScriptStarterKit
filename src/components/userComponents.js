import {Elasticlogger, MongoDb} from "../crossCuttingConcems/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi");

let logger1 = new MongoDb()
let userService = new UserService(logger1);

let user1 = new User(1, "Osman", "Alparslan", "Ankara")
let user2 = new User(2, "baran", "Gökçeli", "muğla")



userService.add(user1);
userService.add(user2);
console.log(userService.list())
console.log(userService.getById(2))//user be

// userService.getById(1);
userService.list();
