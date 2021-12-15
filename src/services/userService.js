export  default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService

    }
    add(user){
        this.users.push(user)
        this.loggerService.log(user)
       // console.log("Kullanıcı eklendi "+ user)

    }
    list(){
        return this.users
       // console.log("Kullanıcı Listelendi ")

    }
    getById(id){
        return this.users.find(u=>u.id === id)
      //  console.log("Kullanıcı detayı getirildi ")

    }
}
// console.log(UserService)