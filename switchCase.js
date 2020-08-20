var str1 = "Hello World";
gs.info('str1');
var language = 'Hindi';

switch (language) {

case 'Spanish' :
   gs.info('Hola');
   break;

case 'Hindi' :
   gs.info('Namaste');
   break;

case 'Marathi' :
   gs.info('Namaskar');
   break;

default:
   gs.info('Hello');

}


/* Sample Result
*** Script: str1
*** Script: Namaste
*/
