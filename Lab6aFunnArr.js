function displayList (tableName) {
var userList = [];

var userGR = new GlideRecord(tableName);
userGR.setLimit(10);
userGR.query();

while (userGR.next()) {

    userList.push(userGR.getDisplayValue());
}

return userList;
}
var tableName = 'sys_user';
var recordList = displayList (tableName);
gs.info ('recordList : \n'+ recordList .join('\n'));





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
