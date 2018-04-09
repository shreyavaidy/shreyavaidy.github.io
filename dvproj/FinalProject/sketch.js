// An array of stripes
var stripes = [];

function setup() {
  var cnv1 = createCanvas(windowWidth, 100);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv1.parent('sketch2-holder');

  // Initialize all Stripe objects
  for (var i = 0; i < 10; i ++ ) {
    stripes.push(new Stripe());
  }
}

function draw() {
  
  background('#BCE3C8');
  // Move and display all Stripe objects
  for (var i = 0; i < stripes.length; i ++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX,mouseY); // Passing the mouse coordinates into an object.
    stripes[i].move();
    stripes[i].display();
  } 
}

// we've imported the @trainorpj/sentiment library
var _d = d3,
    scaleThreshold = _d.scaleThreshold,
    scaleOrdinal = _d.scaleOrdinal;


var analyze = function analyze(phrase) {
  var val = sentiment(phrase);
  return {
    comparative: val.comparative,
    negative: val.negative,
    positive: val.positive
  };
};

var emojis = ["^_^", ":D", ":|", ":(", ">.<"];
var colors = ["#2979FF", "#81D4FA", "#EDE7F6", "#F48FB1", "#E53935"];

var emojiColor = scaleOrdinal().domain(emojis).range(colors);

var emojiSentiment = scaleThreshold().domain([-3, -1, 1, 3, 5]).range([].concat(emojis).reverse());

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      emojis: emojis,
      phrase: "I love waffles \uD83D\uDE01....\nbut hate pancakes \uD83D\uDCA9"
    };
  },

  computed: {
    analysis: function analysis() {
      var _sentiment = sentiment(this.phrase),
          comparative = _sentiment.comparative,
          positive = _sentiment.positive,
          negative = _sentiment.negative;

      return {
        comparative: comparative.toFixed(2),
        positive: positive,
        negative: negative
      };
    },
    bgc: function bgc() {
      var emoji = emojiSentiment(this.analysis.comparative);
      var color = emojiColor(emoji);
      return { backgroundColor: color };
    }
  },
  methods: {
    changeBgc: function changeBgc(val) {
      var emoji = emojiSentiment(val);
      var color = emojiColor(emoji);
      this.bgc.backgroundColor = color;
    },
    getBgc: function getBgc(emj) {
      return emojiColor(emj);
    }
  }
});
