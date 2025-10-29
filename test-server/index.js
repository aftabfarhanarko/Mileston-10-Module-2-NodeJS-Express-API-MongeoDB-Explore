const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// /set midelwear
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Wellcome my test server");
});

const uri =
  "mongodb+srv://FirstDatabaseUser:Arko$$123@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const testDB = client.db("testDB");
    const myCollection = testDB.collection("testServer");

    // get all data
    app.get("/user", async (req, res) => {
      const coursor = myCollection.find();
      const result = await coursor.toArray();
      res.send(result);
    });

    // get one items
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const result = await myCollection.findOne(query);
      res.send(result);
    });

    // post data from mongoDB database
    app.post("/user", async (req, res) => {
      const user = req.body;
      const result = await myCollection.insertOne(user);
      res.send(result);
      console.log("My Post request Now : ", result);
    });

    app.patch("/user/:id", async (req, res) => {
     const id = req.params.id;
     const datass = req.body
     const query = {_id: new ObjectId(id)};
     const updeat = {
        $set:{
         year:datass.year,
         name:datass.name,
         email:datass.email
        }
     }
    
     const result = await myCollection.updateOne(query, updeat);

     res.send(result);

    })


    // delet mongoDB database
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myCollection.deleteOne(query);
      res.send(result);
      console.log("Delet Items Now :", result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`My Test Server Running This Port : ${port}`);
});
