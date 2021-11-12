// https://aonecode.com/Interview-Question/Construct-Word-Using-Dice

function constructWordUsingDice(word, dices) {
  var map = {};

  for (var w = 0; w < word.length; w++) {
    var c = word[w];

    // replace the map with the array ?
    // fix repeated chars
    map[c + "-" + w] = [];

    for (var d = 0; d < dices.length; d++) {
      var i = dices[d].indexOf(c);
      if (i > -1) {
        map[c + "-" + w].push(d);
      }
    }
  }

  // sort
  var arr = [];
  for (var c in map) {
    arr.push([c, map[c]]);
  }
  arr.sort(function (a, b) {
    return a[1].length < b[1].length ? -1 : 1;
  });

  var taken = []; // dices
  for (var c = 0; c < arr.length; c++) {
    if (arr[c][1].length == 0) return false;

    for (var ci = 0; ci < arr[c][1].length; ci++) {
      var d = arr[c][1][ci];

      if (taken.indexOf(d) == -1) {
        taken.push(d);
      }
    }
  }

  //   console.log(map);
  //   console.log(arr);
  //   console.log(taken);

  return taken.length === word.length;
}

console.log(
  constructWordUsingDice("aone", [
    ["a", "b", "c", "d", "e", "f"],
    ["a", "e", "i", "o", "u", "y"],
    ["a", "b", "c", "d", "x", "y"],
    ["n", "o", "p", "q", "r", "s"],
  ])
);

console.log(
  constructWordUsingDice("see", [
    ["e", "e", "e", "e", "e", "e"],
    ["a", "b", "c", "d", "x", "y"],
    ["n", "o", "p", "q", "r", "s"],
  ])
);
