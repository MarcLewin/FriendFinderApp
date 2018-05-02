var bodyParser = require('body-parser');
var path = require('path');



var friendsData = require('../data/friends.js');
module.exports = function(app) {
  

    app.get('/api/friends', function(request, result) {
        result.json(friendsData);
    });
};