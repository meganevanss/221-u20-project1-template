var houseItem = require('../model/houseItem');

var houseItems = [];

var houseOne = houseItem.createHouseItem("1975", "farmhouse", "4", "2");
var houseTwo = houseItem.createHouseItem("1899", "colonial", "6", "4");
var houseThree = houseItem.createHouseItem("1998", "modern", "3", "3");

houseItems.push(houseOne);
houseItems.push(houseTwo);
houseItems.push(houseThree);


//function 1 = get a list of all houseItems 
exports.getHouseItems = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(houseItems);
}
//function 2 = save a new houseItem to the list 
exports.saveHouseItem = function(req, res){
    let newHouseItem = houseItem.createHouseItem(req.yearMade, req.style, req.bedrooms, req.bathrooms);
    houseItems.push(newHouseItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(houseItems);
}
//function 3 = get a particular houseItem by Id
exports.getParticularHouseItem = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(houseItems[req.params.houseItemId]);
}
//function 4 = delete a particualr houseItem by Id 
exports.deleteHouseItem = function(req, res){
    houseItems.splice(req.params.houseItemsId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(houseItem);
}
//function 5 = updated provided members of a houseItem by Id 
exports.updateHouseItem = (req, res) => {
    houseItems[req.params.houseItemId] = houseItem.createHouseItem(req.yearMade, req.style, req.bedrooms, req.bathrooms);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(houseItem);
}