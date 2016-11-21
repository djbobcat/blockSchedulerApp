var _dbname = 'schedule.db';
var _dbpath = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/database/' + _dbname;

var Datastore = require('nedb')
  , db = new Datastore({ filename: _dbpath, autoload: true });

module.exports = {
  addSet : function (set, type, secondCallback){
    for(var x=0; x< set.length; x++){
      var doc = set[x];
      db.insert(doc, function(err,newDoc){});
      //db.insert(doc);
    }
    console.log("Completed " + type + "insert");
    secondCallback();

    // testLabel = type + "-M";
    // db.findOne({label : testLabel}, function(err, docs){
    //   console.log("found: " + docs.blockLabels);
    //});
  }
}
