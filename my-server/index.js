const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
//Arko$$123
//FirstDatabaseUser

// const uri = "mongodb+srv://FirstDatabaseUser:<db_password>@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject";
const uri =
  "mongodb+srv://FirstDatabaseUser:Arko$$123@clustermyfirstmongodbpr.2cecfoe.mongodb.net/?appName=ClusterMyFirstMongoDbProject";

// MongeoDb Client Creat
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("This My New Server Running");
});

async function run() {
  try {
    await client.connect(); //connect database

    // all APIS hear add now





    
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
