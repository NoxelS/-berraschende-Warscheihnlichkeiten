
var current_id = 1;
let dataset = [];
function updateData(x, y){

    dataset.push([current_id+1, y, 1-y]);
    console.log(dataset)
    current_id++;


    var Graph = new Dygraph(document.getElementById("graphdiv4"), dataset,
  {
    labels: [ "x", "A", "B" ],
    title: 'Winrate P1, P2',
    showRoller: true,
    rollPeriod: 3,
    ylabel: 'Chance',
    xlabel: 'Rounds'
  });
}

var Graph = new Dygraph(document.getElementById("graphdiv4"),
  [

  ],
  {
    labels: [ "x", "A", "B" ],
    title: 'Winrate P1, P2',
    showRoller: true,
    rollPeriod: 3,
    ylabel: 'Chance',
    xlabel: 'Rounds'
  });
