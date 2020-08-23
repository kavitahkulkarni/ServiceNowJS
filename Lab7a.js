function displayList (tableName, numberOfRows) {
var userList = [];

var userGR = new GlideRecord(tableName);
if (numberOfRows == null || numberOfRows <= 0){
    userGR.setLimit(7);
} else {
    userGR.setLimit(numberOfRows);
}
userGR.query();

while (userGR.next()) {
    var userObj = {};
    userObj.displayValue = userGR.getDisplayValue();
    userObj.sysId = userGR.getValue('sys_id');
    userList.push(userObj);
    }

    return userList;
}

var tableName = 'sys_user';
var numberOfRows = 2;
var recordList = displayList (tableName, numberOfRows );
gs.info ('recordList : \n'+ JSON.stringify(recordList, null, 4 ));


// output
/*
*** Script: recordList : 
[
    {
        "displayValue": "survey user",
        "sysId": "005d500b536073005e0addeeff7b12f4"
    },
    {
        "displayValue": "Lucius Bagnoli",
        "sysId": "02826bf03710200044e0bfc8bcbe5d3f"
    }
]*/
