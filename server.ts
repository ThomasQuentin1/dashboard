const express = require('express');
const next = require('next')


const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017';
const dbName = 'dashboard';


app.prepare().then(() => {
  const server = express()
  server.use(express.json())


  // API CALLS
  // server.post('/rate', (req, res) => {

  //   const client = new MongoClient(dburl, {useNewUrlParser: true} );

  //   client.connect(function(err) {
  //     if (err) {
  //       console.log(err);
  //       return res.send("error");
  //     }
  //     console.log("Connected successfully to server");
  //     console.log(req.body);
    
  //     const db = client.db(dbName);
  //     const rating = db.collection('rating');
  //     rating.insertOne({id: req.body.id,
  //                       ip: req.connection.remoteAddress,
  //                       date: new Date(Date.now()).toISOString(),
  //                       location: req.body.location,
  //                       note: req.body.note,
  //                       comment: "",
  //                     }, function(error, result) {
  //       client.close();
  //     });
  //   });
  //   res.send("");
  // })


  // // NEXTJS CALLS


  // server.get('/bite', (req, res) => {
  //     res.send("blbl")

 // })
  server.get('/login', (req: any, res: any) => {
    return app.render(req, res, '/login')
  })


  // OTHERS
  server.get('*', (req:any, res:any) => {
    return handle(req, res)
  })

  server.listen((port: any, err:any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})