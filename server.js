import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = 8081;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
