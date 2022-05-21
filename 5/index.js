/***** Error Point *****/
//  "for" is synchronouse statement, but the setTimeout is asynchronouse function.
//  so we cannot have the right result using the statement.
/*************************/

function run(ind){
  if (ind >= 5) return;
  console.log(ind);
  ind++;
  setTimeout(run(ind), ind * 1000);
}

run(0);