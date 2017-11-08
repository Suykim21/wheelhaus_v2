// Require the Express Module
let express = require('express');
// Createan Express App
let app = express();
// Require body-parser(to receive post data from clients)
let bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

let session = require('express-session');
var sessionInfomation = {
  secret:'theMostSecureSecretKeyEver',
  resave:false,
  saveUninitialized: true,
  name:'myCookie',
  cookie: {
  secure: false,
  httpOnly:false,
  maxAge: 36000000 //300000 <= use this once project is finished
  }
}

// Require path
let path = require('path');
// Setting our Static Folder Directory - C:/user/steve/nameofproject/public/dist
app.use(express.static(path.join(__dirname, 'public', 'dist')))

// Requiring config files
require('./server/config/mongoose')
require('./server/config/routes')(app);
app.get('*', (req,res)=>{
  res.sendFile(path.resolve('public/dist/index.html'))
})

// Setting our Server to Listen on Port:6789
app.listen(6789, () => console.log("Server is listening at 6789"))