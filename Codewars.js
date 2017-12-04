function logicalCalc(array, op){
  //Transform Case
  let comparison;
  if(op === "AND") {
    comparison = "&&";
  } else if {
    comparison = "||";
  } else {
    comparison = "&&";
  }

  let result = array.map((a, b) => {
    return (a + comparison + b);
  }
  
  return result;
}



function logicalCalc(array, op){

  if(op === "AND") {
    let result = array.map((a, b) => {
      return (a && b);
    });
  } else {
    
    let result = array.map((a, b) => {
      return (a && b);
    });

  }

  return result;
}

 function logicalCalc(array, op){

  let result;

  if(op === 'AND') {
    result = array.every((el, i, a) => { 
        el[i-0] === el[i];
    });

  } else {
    result = false;
  }
  
  return result;
}


function logicalCalc(array, op){

  let result;
        if(op === 'AND') {
            
        result = array.every((el,i,arr) => { 
                    previous = el[i-1];
                    current = el;
                    return (current && previous);
        });

        } else {

        result = array.every((el,i,arr) => { 
                    previous = el[i-1];
                    current = el;
                    return (current || previous);   
        });
      }

  return result;
}