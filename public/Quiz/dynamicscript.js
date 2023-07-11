const idString=document.location.search;
const id=Number(idString[4]);
const product=Topics[id];
var s = document.createElement( 'script' );
s.setAttribute( 'src', product.srcUrl);// Dynamicaly insert js file
document.body.appendChild( s );
var s2 = document.createElement( 'script' );
s2.setAttribute( 'src', 'Quiz/show.js');// Dynamicaly insert js file
document.body.appendChild( s2 );