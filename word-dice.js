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

    if (map[c + "-" + w].length == 0) return false;
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
  for (var charIndex = 0; charIndex < arr.length; charIndex++) {
    for (
      var chardiceIndex = 0;
      chardiceIndex < arr[charIndex][1].length;
      chardiceIndex++
    ) {
      var diceIndex = arr[charIndex][1][chardiceIndex];

      if (taken.indexOf(diceIndex) == -1) {
        taken.push(diceIndex);
        break;
      }
    }
  }

  //   console.log(map);
  //   console.log(arr);
  //   console.log(taken);

  return taken.length === word.length;
}

// console.log(
//   constructWordUsingDice("aone", [
//     ["a", "b", "c", "d", "e", "f"],
//     ["a", "e", "i", "o", "u", "y"],
//     ["a", "b", "c", "d", "x", "y"],
//     ["n", "o", "p", "q", "r", "s"],
//   ])
// );

// console.log(
//   constructWordUsingDice("see", [
//     ["e", "e", "e", "e", "e", "e"],
//     ["a", "b", "c", "d", "x", "y"],
//     ["n", "o", "p", "q", "r", "s"],
//   ])
// );

console.log(
  constructWordUsingDice("xxyyy", [
    ["x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x"],
    ["y", "y", "y", "y", "y", "y"],
    ["y", "y", "y", "y", "y", "y"],
  ])
);
