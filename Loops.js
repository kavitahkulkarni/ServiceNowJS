var team = 5;
var player = 4;
var id = 1;
var cnt =0;
var cnt2 = 0;
while (cnt < team) {
  while (cnt2 < player) {
    gs.info("Team:"+ (cnt+1) + ", Player:"+ (cnt2+1) + ", ID:" + id);
    cnt2++;
    id++;
  }
  cnt++;
  cnt2 = 0;
}

/* Output
*** Script: Team:1, Player:1, ID:1
*** Script: Team:1, Player:2, ID:2
*** Script: Team:1, Player:3, ID:3
*** Script: Team:1, Player:4, ID:4
*** Script: Team:2, Player:1, ID:5
*** Script: Team:2, Player:2, ID:6
*** Script: Team:2, Player:3, ID:7
*** Script: Team:2, Player:4, ID:8
*** Script: Team:3, Player:1, ID:9
*** Script: Team:3, Player:2, ID:10
*** Script: Team:3, Player:3, ID:11
*** Script: Team:3, Player:4, ID:12
*** Script: Team:4, Player:1, ID:13
*** Script: Team:4, Player:2, ID:14
*** Script: Team:4, Player:3, ID:15
*** Script: Team:4, Player:4, ID:16
*** Script: Team:5, Player:1, ID:17
*** Script: Team:5, Player:2, ID:18
*** Script: Team:5, Player:3, ID:19
*** Script: Team:5, Player:4, ID:20
*/
