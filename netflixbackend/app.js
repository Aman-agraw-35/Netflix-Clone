import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import  http from 'https';
import 'dotenv/config'
const app = express();
var user = "";
var data ="";
var userrr="";
var pass="" ;
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000' 
}));


const options = {
  method: 'GET',
  hostname: 'api.themoviedb.org',
  port: null,
  path: '/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2U1MzA1NWU1NjU2N2NmMjUzZjAxYjNhNTBmYWQ0YiIsInN1YiI6IjY0ZTM1MmExMDc2Y2U4NDNiOGQ0Zjg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uidfxpD8kzb4JipNhBjAGfygmDhSMqCcRxPPS0i_2gs'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

const cat = process.env.pass ;

mongoose.connect(`mongodb+srv://aman:${cat}@cluster0.v6ixzty.mongodb.net/netflix`, {useNewUrlParser:true} );

const userSchema = {
  email: String ,
  password : String
}
const User = new mongoose.model("User", userSchema) ;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/p',(req,res) => {
  res.send(user);
})

app.post('/p', (req, res) => {
  const {name } = req.body; 
  console.log("Received email:", name); 
  user=name ;
  
 User.findOne({email: name})
 .then((found) => {
  if(found){
  res.json({ message: 'found user' });
  console.log(found);
  }else{
    res.json({ message: 'not found user' });  
    console.log("new user");
  }
    })
 .catch((err) => {
      console.log(err);
    });
 
});

app.get('https://api.themoviedb.org/3/movie/157336?api_key=dce53055e56567cf253f01b3a50fad4b&append_to_response=videos,images',(req,res) =>{
  console.log("we have the data");
});
app.post('/datas', (req, res) => {
  userrr =req.body.email;
  pass =req.body.password;
 console.log("login user : " + userrr.userrr);
 console.log("login password : "+ pass.pass);
 
 User.findOne({email: userrr.userrr , password: pass.pass })
  .then((found) => {
   if(found){
   res.json({ message: 'found user' });
   console.log('user found and authenticated :' + found);
   }else{
     res.json({ message: 'not found user' });  
     console.log("no user");
   }
     })
  .catch((err) => {
       console.log(err);
     });
});
app.post('/data', (req, res) => {
  const {name } = req.body; 
  
  console.log("Received password :", name); 
 data=name ;
  res.json({message: "data reieved successful"})

 
  if(user !== "" && data !== undefined ){
  
    var user1 = new User ({
   email: user ,
   password : data
   
  })
  console.log(user1);
  user1.save();}
  
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

