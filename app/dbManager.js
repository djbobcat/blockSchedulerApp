var _dbname = 'schedule.db';
var _dbpath = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/database/' + _dbname;

var Datastore = require('nedb')
  , db = new Datastore({ filename: _dbpath, autoload: true });

module.exports = {
  addSet : function (set){
    for(var x=0; x< set.length; x++){
      // var doc = {};
      // var item = set[x];
      // var key = item.label;
      // doc[key] = set[x];
      var doc = set[x];
      db.insert(doc, function(err,newDoc){});
    }
    db.findOne({label : "R1-M"}, function(err, docs){
      console.log("found: " + docs.blockLabels);
    });
  }
}
