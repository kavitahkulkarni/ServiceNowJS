var team = 5;
var player = 4;
var cnt =0;
var cnt2 = 0;
while (cnt < team) {
  while (cnt2 < player) {
    gs.info("Team:"+ (cnt+1) + ", Player:"+ (cnt2+1));
    cnt2++;
  }
  cnt++;
  cnt2 = 0;
}


/* Output
*** Script: Team:1, Player:1
*** Script: Team:1, Player:2
*** Script: Team:1, Player:3
*** Script: Team:1, Player:4
*** Script: Team:2, Player:1
*** Script: Team:2, Player:2
*** Script: Team:2, Player:3
*** Script: Team:2, Player:4
*** Script: Team:3, Player:1
*** Script: Team:3, Player:2
*** Script: Team:3, Player:3
*** Script: Team:3, Player:4
*** Script: Team:4, Player:1
*** Script: Team:4, Player:2
*** Script: Team:4, Player:3
*** Script: Team:4, Player:4
*** Script: Team:5, Player:1
*** Script: Team:5, Player:2
*** Script: Team:5, Player:3
*** Script: Team:5, Player:4
*/
