export class Baselogger {
    log(data) {
        console.log("Default logger : "+ data)
    }
}
export class Elasticlogger extends Baselogger {
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}
export class MongoDb extends Baselogger {
    log(data) {
        console.log("Logged to Mongo " + data)
    }
}