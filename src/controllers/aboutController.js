const path = require('path');

const controller = {
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
      
       }
}

module.exports = controller;

