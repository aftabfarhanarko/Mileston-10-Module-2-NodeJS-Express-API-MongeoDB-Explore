const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// set midelwear
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("This is my Pricktise Server");
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

// creat mongoDb database
async function run() {
  try {
    await client.connect();
    const secendDB = client.db("secendDB");
    const myCollectyions = secendDB.collection("items");

    // getAll data from database
    app.get("/user", async (req, res) => {
      const coursor = myCollectyions.find();
      const allItem = await coursor.toArray();
      res.send(allItem);
    });

    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myCollectyions.findOne(query);
      res.send(result);
      console.log(result);
    });

    // post items database
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const result = await myCollectyions.insertOne(newUser);
      res.send(result);
    });

    // patch
    app.patch("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const users = req.body;
      const setUser = {
        $set: {
          name: users.name,
          email: users.email,
        },
      };
      const option = {};

      const result = await myCollectyions.updateOne(query, setUser, option);
      console.log(users);
      res.send(result);
    });

    //
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const myDelet = await myCollectyions.deleteOne(query);
      res.send(myDelet);
      console.log(id);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deploymeknt. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Remining My Port is Wroking now ${port}`);
});
