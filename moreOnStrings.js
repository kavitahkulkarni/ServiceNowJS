var short_description = 'System is displaying error message';
if (short_description.indexOf('error') >= 0) {
  gs.info("Error message found");
}

// *** Script: Error message found


var subject = 'Warning: Email is not working';
var pos = subject.indexOf('Email');
gs.info(pos);
// *** Script: 9


var str = 'Approved: RITM0010001 - Laptop renewal';
var pos = str.indexOf('RITM');
var ritmNumber = str.substring(pos, pos + 11);
gs.info(ritmNumber);

// *** Script: RITM0010001



var firstName = 'Chuck';
var loginName = 'chuck';
gs.info('firstName=' + firstName.toUpperCase() + ' loginName=' + loginName.toUpperCase());
if (loginName.toUpperCase() == firstName.toUpperCase()) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}

/*
*** Script: firstName=CHUCK loginName=CHUCK
*** Script: names match */
