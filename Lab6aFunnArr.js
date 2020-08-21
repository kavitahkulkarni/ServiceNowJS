var tableName = 'sys_user';
var userList = [];

var userGR = new GlideRecord(tableName);
userGR.setLimit(10);
userGR.query();

while (userGR.next()) {

    userList.push(userGR.getDisplayValue());
}


gs.info ('userList: \n'+ userList.join('\n'));

/* Output
*** Script: userList: 
survey user
Lucius Bagnoli
Jimmie Barninger
Melinda Carleton
Jewel Agresta
Sean Bonnet
Jacinto Gawron
Krystle Stika
Billie Cowley
Christian Marnell 
*/
