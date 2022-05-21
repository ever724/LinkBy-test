var add = function(){

  if(arguments.length > 1)
    arguments.callee.first_argument = arguments[0];

  if(arguments.callee.first_argument){
    var result = arguments.callee.first_argument + arguments[arguments.length - 1];
    arguments.callee.first_argument = 0;

    return result;
  }else{
    arguments.callee.first_argument = arguments.callee.first_argument || arguments[0];
    return arguments.callee;
  }
}

console.log(add(4, 6));
console.log(add(4)(6));