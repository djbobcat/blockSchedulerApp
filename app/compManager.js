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

  buildFromFile: function (db, type, filepath, callBack){
    var stream = fs.createReadStream(filepath);
    var array = null;
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
      stream.destroy();
      callBack(db, buildResidentsWithBlocks(type, blocks), type);
    })

  },

  insertIntoDB: function(db, set, type){
  console.log("########## DB INSERT CALLED ############");
    for(var x=0; x< set.length; x++){
      var doc = set[x];
      db.insert(doc, function(err,newDoc){});
    }
    console.log("Completed " + type + " insert");
  }

}

 function buildResidentsWithBlocks (type, blocks){
    console.log("done reading...\nBuilding Residents...");
    var newResident = null;
    var char = 'A';

    for(var x=0; x < length; x++){
    var label = type + "-" + char;

      if(x === 0){
        newResident = new resident(label,blocks);
      }else{
        blocks = blocks.concat(blocks.splice(0,2));
        newResident = new resident(label,blocks);
      }
      residentArray.push(newResident);
      console.log("label: " + newResident.label + ", blocks: " + newResident.blockLabels + "\n");

      newResident = null;
      char = nextChar(char);
    }
    return residentArray;
  //  Callback(residentArray, type, secondCallback);
  //insertIntoDB(db, residentArray, type, callBack);
  }

  function nextChar(c){
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }
