const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
const baseUrl = "https://jsonplaceholder.typicode.com";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get request
app.get("/getUsers", async (req, res) => {
  try {
    const response = await axios({
      method: "get",
      url: `${baseUrl}/users`,
    });
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// post request
app.post("/user/post", async (req, res) => {
  try {
    const response = await axios.post(`${baseUrl}/posts`, {
      title: "sajjad",
      body: "alam",
      userID: "bdasbdkjaskfjakfkabfkahbf73y923y8u09",
    });
    res.status(200).json(response.data);
    console.log(response);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// assign the server
app.listen(port, () => {
  console.log(`server is lisiting to the Port ${port}`);
});
