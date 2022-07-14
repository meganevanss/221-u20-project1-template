function houseItem(yearMade, style, bedrooms, bathrooms){
    this.yearMade = yearMade;
    this.style = style;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
}

exports.createHouseItem = function(yearMade, sytle, bedrooms, bathrooms) {
    return new houseItem(yearMade, sytle, bedrooms, bathrooms);
};

console.log("model running!");