var person = Class.create();

person.prototype = {
  initialize: function() {
    this.firstName = '';
    this.lastName = '';
  },

  setFirstName: function(str) {
    this.firstName = str;
  },

  setLastName: function(str) {
    this.lastName = str;
  },

  getDisplayName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  type: person
};

var me = new person();
me.setFirstName('Kavita');
me.setLastName('Kulkarni');


var displayName = me.getDisplayName();
gs.info(displayName);
