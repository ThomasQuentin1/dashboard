import {INetwork} from "./INetwork"
 import { DbIntance } from "api/DbInstance"
 
export class Network extends INetwork {

    private db = DbIntance.getinstance()
    login(username: String, password: String) : Promise<void> {
        username = password + "1";
        password = username  + "1"
        // server.post('/rate', (req, res) => {

        //     const client = new MongoClient(dburl, {useNewUrlParser: true} );
        
        //     client.connect(function(err) {
        //       if (err) {
        //         console.log(err);
        //         return res.send("error");
        //       }
        //       console.log("Connected successfully to server");
        //       console.log(req.body);
            
        //       const db = client.db(dbName);
        //       const rating = db.collection('rating');
        //       rating.insertOne({id: req.body.id,
        //                         ip: req.connection.remoteAddress,
        //                         date: new Date(Date.now()).toISOString(),
        //                         location: req.body.location,
        //                         note: req.body.note,
        //                         comment: "",
        //                       }, function(error, result) {
        //         client.close();
        //       });
        //     });
        //     res.send("");
        //   })
        
    }


}