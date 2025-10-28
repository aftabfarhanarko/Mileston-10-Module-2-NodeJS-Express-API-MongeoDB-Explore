const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

// set midelwear
app.use(cors());
app.use(express.json());

//Arko$$123
//FirstDatabaseUser

// const uri = "mongodb+srv://FirstDatabaseUser:<db_password>@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject";
const uri =
  "mongodb+srv://FirstDatabaseUser:Arko$$123@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject";

app.get("/", (req, res) => {
  res.send("This My New Server Running");
});

// MongeoDb Client Creat
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect(); //connect database

    const myDB = client.db("myDB"); // creat mongeoDB database
    const myCollection = myDB.collection("users"); // add my cloctions

    // get database item
    app.get("/user", async (req, res) => {
      const coursor = myCollection.find();
      const allData = await coursor.toArray();
      res.send(allData);
    });

    // set all APIS hear add now
    app.post("/user", async (req, res) => {
      const newUsers = req.body;
      console.log(newUsers);
      const result = await myCollection.insertOne(newUsers); //send database
      res.send(result);
    });

    // deleat item database
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await myCollection.deleteOne(query)
      res.send(result);
      console.log("This Delete Id : ",id);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}


run().catch(console.dir);

app.listen(port, () => {
  console.log(`This is My New Server Running ${port}`);
});
