function feedItem(title, body, imageUrl, linkUrl){
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.linkUrl = linkUrl;
}

let storyOne = new feedItem("Cheddar Goldfish found crushed by a robot in Petco", "Finn walks into Petco with his sister. Her name is Uwu. Uwu and Finn were on a mission to save their dad. There dad has been held captive in the fish tank for two days. They need their dad to survive. They ask the manager, Marty, if they will ever be able to get their dad back. Marty never liked their dad and now Marty does not like his kids either. Finn and Uwu walked out of Petco but before they could reach the door, Marty stepped right on them. ", "https://bit.ly/3IoLPPH", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
let storyTwo = new feedItem("Goldfish turns into canibal", "A Extra Cheddar Goldfish was watching his friends die from left to right. The master of all goldfish went crazy and started eating everyone. Finn did not know if he was going to make it out alive. He saw the smile on the master goldfish face and was very curious about how they tasted. He fell in love with the taste of his own kind. Now thats the snack that makes me smile back ;) Finn ate the Master and now has become the Master Goldfish. ", "https://bit.ly/3bVlgWc", "https://www.youtube.com/watch?v=HHk3pQxczYs");
let storyThree = new feedItem("Goldfish has a bestfriend who is a dog", "The Original Goldfish named Brooke lived with her parents. She was 5 months old. Ever since she was born she was bestfriends with the family dog named Ozzy.", "https://bit.ly/3nMhlO9", "google.com");

let stories = [storyOne, storyTwo, storyThree];

function displayItem(){
    for (var i = 0; i < stories.length; i++) {
        let item = stories[i];
        document.getElementById("newsfeed").innerHTML += "<img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href = '" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><br>";
    }
}

window.addEventListener('load', displayItem);
document.getElementById("portal_button").addEventListener("click", () => goToLocation("https://www.goldfishfun.com/"));
