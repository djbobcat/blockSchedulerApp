const fs = require('fs');
const csv = require('fast-csv');
const block = require('./components/block');
const resident = require('./components/resident');

var blocks = [];
var residentArray = [];
var type = "";
var length = 13;

module.exports = {
  readFile: function(filepath){
    fs.readFile(filepath,'utf8',function(err,data){
      if (err){
        return console.log(err);
      }
      console.log(data);
    });
  },

  buildBlocksFromFile: function (label,filepath){
    var stream = fs.createReadStream(filepath);
    type = label;
    csv.fromStream(stream, {headers: false, trim : true})
    .on("data", function(data){
      if((data[0] === ("date"))||(data[0]===("Date"))){
        console.log("headers");
      }else{
        console.log(data);
        var newBlock = new block(data[0],data[1],data[2],data[3]); //date,name,am,pm

        blocks.push(newBlock);
        console.log(newBlock.dateRange + ", " + newBlock.blockName
        + ", " + newBlock.amDays + ", " + newBlock.pmDays);
      }
    })
    .on("end", function(){
      buildResidentsWithBlocks(type,blocks);
    });
    return residentArray;
  }
}

//  buildResidentsWithBlocks: function (type,blocks){
 function buildResidentsWithBlocks (type,blocks){
    console.log("done reading...\n Building Residents...");
    var newResident = null;
    for(var x=0; x < length; x++){
      var label = type + "-" + (x+1);

      if(x === 0){
        newResident = new resident(label,blocks);
      }else{
        blocks = blocks.concat(blocks.splice(0,2));
        blocks = blocks.concat(blocks.splice(0,2)); //shift over twice
        newResident = new resident(label,blocks);
      }
      residentArray.push(newResident);
      console.log("label: " + newResident.label + ", blocks: " + newResident.blockLabels + "\n");
      newResident = null;
    }
  }
//}
