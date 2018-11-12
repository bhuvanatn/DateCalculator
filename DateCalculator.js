var r1 = require("readline");
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Start Dates:", function(startDate) {
  prompts.question("End Dates:", function(endDate) {
    const flippedStart = Match(startDate);
    const flippedEnd = Match(endDate);

    var start = new Date(flippedStart);
    var end = new Date(flippedEnd);

    var diff = Math.abs(end.getTime() - start.getTime());
    // console.log("diff:", diff);
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    console.log("DiffDays:", diffDays - 1);

    prompts.close();
  });
});

function Match(date) {
  var m = date.match(
    /^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.]([12][0-9][0-9]{2}))$/
  );
  // console.log(m);
  if (m) {
    // console.log("Date:", m[0], "m:", m);
  } else {
    console.log("Please enter valid date with / space . -");
    process.exit();
  } // convert to AU date format instead of US
  const flipped = [m[2], m[1], m[3]];
  // console.log("Flipped:", flipped);
  return flipped.join("/");
}
