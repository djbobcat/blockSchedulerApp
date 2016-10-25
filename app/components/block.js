function block(date,bname,am,pm) {
  this.dateRange = date;
  this.blockName = bname;
  this.amDays = encodeDays(am);
  this.pmDays = encodeDays(pm);
}

function encodeDays(days){
  var encoded = [0,0,0,0,0];
  var array = days.split(',');

  for(var x=0; x<array.length; x++){
    var day = array[x];
    
      switch (day) {
        case "M":
          encoded[0] = 1;
          break;
        case "T":
          encoded[1] = 1;
          break;
        case "W":
          encoded[2] = 1;
          break;
        case "Th":
          encoded[3] = 1;
          break;
        case "F":
          encoded[4] = 1;
          break;

      }
  }
  return encoded;
}

module.exports = block;
