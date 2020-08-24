// Scripted rest resource

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

var queryParams = request.queryParams;
var tableName = queryParams.tableName;
var numberOfRows = queryParams.numberOfRows;
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
response.setBody(userList);
return response;

})(request, response);


// Test from REST API Explorer
// Result
// HTTP Method/URI: GET https://dev68554.service-now.com/api/138144/table_data/Lab08a?tableName=incident&numberOfRows=5
/*
Response Body
{
  "result": [
    {
      "displayValue": "INC0000060",
      "sysId": "1c741bd70b2322007518478d83673af3"
    },
    {
      "displayValue": "INC0009002",
      "sysId": "1c832706732023002728660c4cf6a7b9"
    },
    {
      "displayValue": "INC0000009",
      "sysId": "46b66a40a9fe198101f243dfbc79033d"
    },
    {
      "displayValue": "INC0000010",
      "sysId": "46b9490da9fe1981003c938dab89bda3"
    },
    {
      "displayValue": "INC0000011",
      "sysId": "46c03489a9fe19810148cd5b8cbf501e"
    }
  ]
}
*/
