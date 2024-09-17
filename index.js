const express = require ('express');
const path = require ('path');
const app = express();

app.get("/ositos", (req,res) => {
  res.send("Ositos");
});

app.listen(3000,() =>{
  console.log("Server run on port 3000");
});
