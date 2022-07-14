const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})




//-----------------------------------------------------------------------------

var feedItems = require('./controller/feedController');

app.route('/api/feedItems')
    .get(feedItems.getFeedItems)
    .post(feedItems.saveFeedItem)
    
app.route('/api/feedItems/:feedItemId')
    .get(feedItems.getParticularFeedItem)
    .patch(feedItems.updateFeedItem)
    .delete(feedItems.deleteFeedItem)

/*app.listen(1337, function () {
    console.log('Example app listening on port 1337!');
})*/

//-----------------------------------------------------------------------------

var houseItems = require('./controller/houseController');

app.route('/api/houseItems')
    .get(houseItems.getHouseItems)
    .post(houseItems.saveHouseItem)
    
app.route('/api/houseItems/:houseItemId')
    .get(houseItems.getParticularHouseItem)
    .patch(houseItems.updateHouseItem)
    .delete(houseItems.deleteHouseItem)

app.listen(1337, function () {
    console.log('Example app listening on port 1337!');
})