//Imported the @trainorpj/sentiment library

//Initialize the d3 identifier
var _d = d3,
    scaleThreshold = _d.scaleThreshold,
    scaleOrdinal = _d.scaleOrdinal;

//Analyze function to get the sentiment from any phrase
var analyze = function analyze(phrase) {
  var val = sentiment(phrase);
  return {
    comparative: val.comparative,
    negative: val.negative,
    positive: val.positive
  };
};

var moods = ["^_^", ":D", ":|", ":(", ">.<"];
var colors = ["#2979FF", "#81D4FA", "#EDE7F6", "#F48FB1", "#E53935"];

var emojiColor = scaleOrdinal().domain(moods).range(colors);

var emojiSentiment = scaleThreshold().domain([-3, -1, 1, 3, 5]).range([].concat(moods).reverse());

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      moods: moods,
      phrase: "How do markets read your sentiment? (Try out any words here to get a score)"
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
      var color = emojiColor(moods);
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