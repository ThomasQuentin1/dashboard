
 export abstract class INetwork {
     abstract login(username: String, password: String) : Promise<void>

 }