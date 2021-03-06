
//Load path and Express Module
const express = require('express');
const path = require('path');
const app = express();

//Define user storage
user = [];

//Define home route
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
})

//Creating user and storing data
app.get('/save', (req,res) => {
    let info = {
        'name': req.query.user,
        'book': req.query.book
    }
    console.log(info);
    user.push(info);
    res.status(200).redirect('/');
   })

   app.get('/show', (req,res) => {
       console.log(user);
      
       let hp_count = 0;
       let witch_count = 0;
       let snow_count = 0;
     for (let data in user){
        let i = data;
        if(user[i].book == 'Harry Potter'){
            hp_count++;
        }

        if(user[i].book == 'Witch Hunt'){
            witch_count++;
        } 

        if(user[i].book == 'Snow White'){
            snow_count++;
        }
       
    }
    res.send('Harry Potter ' + hp_count + ' user <br>' +
    'Witch Hunt '  + witch_count   + ' user <br>' +
    'Snow White ' + snow_count + ' user');
    
    console.log(user.length)
   
})  




//Web App is listening on
app.listen(1001);
console.log('Server is running')