let id_counter = 1;
var players = [];
var round_played = 0;
var delay = 1;
function Spieler(winCondition) {
  this.id = id_counter;
  this.name = `Player${this.id}`;
  this.row = [];
  this.winCondition = winCondition;
  this.wins = 0;
  id_counter++;
}

Spieler.prototype.reset = function() {
  this.row = [];
};

players.push(new Spieler("01"));
players.push(new Spieler("00"));

var counter = 0;
function simulateRound() {
  round_played++;
  document.getElementById("round_played").innerHTML = round_played;
  for (var i = 0; i < players.length; i++) {
    document.getElementById(`info_p${players[i].id}`).classList.remove("alert-success");
    players[i].row.push(Math.floor(Math.random() * 2));
    document.getElementById(`row_${players[i].id}`).innerHTML = players[i].row;
  }
  for (var i = 0; i < players.length; i++) {
    if (counter > (players[i].winCondition.length-1)){
      for (var f = 0; f < (players[i].row.length - (players[i].winCondition.length-1)); f++) {
        var checksum = '';
       

        for(var e = 0; e < (players[i].winCondition.length); e++){
          checksum+=  ''+players[i].row[e+f];
        }
        console.log(checksum);

        if (checksum === players[i].winCondition) {
            document.getElementById(`info_p${players[i].id}`).classList.add("alert-success");
            updateData((players[1].wins+players[0].wins), players[0].wins/(players[1].wins+players[0].wins));
            players[i].wins += 1;
            players.forEach(Player => Player.reset());
            counter = 0;
            break;
        }
      }
    } else {
      counter++;
    }
  }
  document.getElementById("win_1").innerHTML = players[0].wins;
  document.getElementById("win_2").innerHTML = players[1].wins;
  document.getElementById("p_1").innerHTML = ((players[0].wins/(players[1].wins+players[0].wins))*100).toFixed(2)+"%";;
  document.getElementById("progp_1").style.width = ((players[0].wins/(players[1].wins+players[0].wins))*100).toFixed(0)+"%";
  document.getElementById("progp_1").innerHTML = "Player1: "+((players[0].wins/(players[1].wins+players[0].wins))*100).toFixed(0)+"%";
  document.getElementById("progp_2").innerHTML = "Player2: "+((players[1].wins/(players[1].wins+players[0].wins))*100).toFixed(0)+"%";
  
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function simulateRounds(rounds) {
  /*for (let i = 0; i < rounds; i++) {
    sleep(100).then(() => {
      simulateRound();

    });
  }*/
  for (var i=0; i<rounds; i++) (function(t) {
    window.setTimeout(function() {
     simulateRound();
    }, t*delay)
  }(i)) 
}

function setWincondion(player, value){
  console.log(value);
  document.getElementById(`wincon_${player+1}`).innerHTML = value;
  players[player].winCondition = ''+value;
}

