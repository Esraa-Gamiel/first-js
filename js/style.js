

var qouteBag = [{ author: "― Stephen Chbosky, The Perks of Being a Wallflower", qoute: "“We accept the love we think we deserve.”" }
    , { author: "― Friedrich Nietzsche, Twilight of the Idols", qoute: "“Without music, life would be a mistake.”" }
    , { author: "― Oscar Wilde", qoute: "“Be yourself; everyone else is already taken.”" },
     { author: "― Frank Zappa", qoute: "“So many books, so little time.”" },
      { author: "― Albert Einstein", qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
       { author: "― Marcus Tullius Cicero", qoute: "“A room without books is like a body without a soul.”" },
        { author: "― Dr. Seuss", qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" },
         { author: "― Mae West", qoute: "“You only live once, but if you do it right, once is enough.”" },
          { author: "― Robert Frost", qoute: "“In three words I can sum up everything I've learned about life: it goes on.”"}, 
          { author:"― Mahatma Gandhi" , qoute: "“Be the change that you wish to see in the world.”" }];

var randomNum;
var preRandomNum=null;
function generateQuote() {

do{
    randomNum = Math.floor(Math.random() * 10);
} while (randomNum === preRandomNum);
document.getElementById("randomQoute").innerHTML=qouteBag[randomNum].qoute;
document.getElementById("qouteAuthor").innerHTML=qouteBag[randomNum].author;
preRandomNum = randomNum;
console.log(randomNum)
}