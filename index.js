import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("index.ejs");
  });

app.post('/navigate', (req, res) => {
  const page = req.body.page;
  if(page==="general"){
    res.render("index.ejs");
  }
  else{
    res.render("work.ejs");
  }
  // res.sendFile(page, { root: __dirname + '/public' });
});
  
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });