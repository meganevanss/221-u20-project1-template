/*will create instances of this class in your code to store 
and mainuplate data in memory, For now all data will be in memory 
(we will add a database component in Part
3 of the project)*/

function feedItem(title, body, imageUrl, linkUrl){
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.linkUrl = linkUrl;
}

exports.createFeedItem = function(title, body, imageUrl, linkUrl) {
    return new feedItem(title, body, imageUrl, linkUrl);
};

console.log("model running!");