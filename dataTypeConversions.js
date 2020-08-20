// Data Type conversions
//

var i = 5;
iStr = i.toString();

gs.info('i = ' + i);
gs.info('Type of i = ' + typeof i);
gs.info('iStr = ' + iStr);
gs.info('Type of iStr = ' + typeof iStr);


var n = parseInt(iStr);
var f = parseFloat(iStr);

gs.info('n = ' + n);
gs.info('Type of n = ' + typeof n);

gs.info('f = ' + f);
gs.info('Type of f = ' + typeof f);

gs.info("n + f = " + (n+f));

// Sample Output
//*** Script: i = 5
//*** Script: Type of i = number
//*** Script: iStr = 5
//*** Script: Type of iStr = string
//*** Script: n = 5
//*** Script: Type of n = number
//*** Script: f = 5
//*** Script: Type of f = number
//*** Script: n + f = 10


var str1 = 'Kavita';
var str2 = 'Ketan';
var str3 = 'Kulkarni';

gs.info('str1: ' + str1 +'\tLength of str1: ' + str1.length);
gs.info('str2: ' + str2 +'\tLength of str2: ' + str2.length);
gs.info('str3: ' + str3 +'\tLength of str3: ' + str3.length);

var fullName = str1 + '\n' + str2 + '\n' + str3;
gs.info('fullName: ' + fullName + '\tLength of fullName: '+ fullName.length);

// Sample output
//*** Script: str1: Kavita	Length of str1: 6
//*** Script: str2: Ketan	Length of str2: 5
//*** Script: str3: Kulkarni	Length of str3: 8
//*** Script: fullName: Kavita
//Ketan
//Kulkarni	Length of fullName: 21

