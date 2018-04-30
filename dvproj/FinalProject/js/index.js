// Imported @trainorpj/sentiment library
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
var colors = ["#245F4B", "#7BB46B", "#FFFEE0", "#F99E86", "#E53935"];

//Mapping the colors using scaleOrdinal in D3
var emojiColor = scaleOrdinal().domain(emojis).range(colors);

var emojiSentiment = scaleThreshold().domain([-5, -3, 1, 3, 5]).range([].concat(emojis).reverse());

//Creating a Vue object
var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      emojis: emojis,
      phrase: "Give it a try to see in real time"
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
