const express = require("express");
const bcrypt = require("bcrypt");
const {User,Note} = require("../schemas/Schema");
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.send("400");
      return;
    }

    // Hash the password
    bcrypt.hash(password, 10, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.send("500")
        return;
      }
      const newUser = new User({
        username,
        email,
        password: hash,
      });
      await newUser.save();
      res.send("201")
    });
  } catch (error) {
    res.send("500");
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user with the given email exists
    const user = await User.findOne({ email });
    if (!user) {
      res.send("401");
      return;
    }

    // Compare password

    bcrypt.compare(password, user.password, function(err, isPasswordMatch) {
      // result == true
      if (!isPasswordMatch) {
        res.send("401");
        return;
      }
      // res.send({userId : user._id});

    // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {expiresIn: '60m'});
      res.send({ "token":token, "userId":user._id });
    });
        
  } catch (error) {
    res.send("500");
  }
});


router.post('/addnote', async (req, res) => {

  try {
    const { title,description,token } = req.body;
    if(!token){
      res.send("500");
      return;
    }   
    const decoded = jwt.verify(token, "your-secret-key");
    if (Date.now() / 1000 >= decoded.exp) {
      res.send("500");
      return;
    }    
    const newNote = new Note({
      "title":title,
      "description":description,
      "user": decoded.userId, // Assuming you're passing the user's ID in the request body
    });
     newNote.save();
     res.send(req.body);
     return;
  } catch (error) {
    res.send("500");
    return;
  }
});



router.post('/getnotes', async (req, res) => {
  try {
    const { userId, token } = req.body;
    if(!token){
      res.send("500");
      return;
    }

   
    const decoded = jwt.verify(token, "your-secret-key");

    if (Date.now() / 1000 >= decoded.exp) {
      res.send("500");
    }    
    const notes = await Note.find({ user: decoded.userId });
    res.send(notes);
  } catch (error) {
    res.send("500");
  }
});

router.post("/deletenote", async (req,res)=>{
  try {
    const { noteId, token } = req.body;
    if(!token){
      res.send("500");
      return;
    }   
    const decoded = jwt.verify(token, "your-secret-key");
    if (Date.now() / 1000 >= decoded.exp) {
      res.send("500");
      return;
    }    
    const deletedNote = await Note.deleteOne({_id:noteId});
    if(deletedNote){
      const notes = await Note.find({ user: decoded.userId });
      res.send(notes);
      return;
    }else{
      res.send("500");
      return;
    }

  } catch (error) {
    res.send("500");
    return;
  }   
})


router.post("/", (req, res) => {
  res.send("hii there");
});

module.exports = router;
