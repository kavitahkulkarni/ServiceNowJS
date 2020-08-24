var item = Class.create();

item.prototype = {

  initialize: function() {
  },

  debugObject: function (obj) {

    gs.info("Object:\n" + JSON.stringify(obj, null, 4));
  },

  type: item

};

var test = new item();
var myObj = {
  'firstName': 'Kavita',
  'lastName': 'Kulkarni',
  'middleName': 'Ketan'
}
test.debugObject(myObj);

/* Output

*** Script: Object:
{
    "firstName": "Kavita",
    "lastName": "Kulkarni",
    "middleName": "Ketan"
} */
