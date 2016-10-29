const electron = require('electron');
const compManager = require('./compManager');
const dbManager = require('./dbManager');

// var _dbname = 'schedule.db';
// var Datastore = require('nedb')
//   , db = new Datastore({ filename: _dbpath, autoload: true });

var filepath = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/clinics_csv/R1_blocks.csv';
//var _dbpath = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/database/' + _dbname;

// Module to control application life.
const {app} = electron;
// Module to create native browser window.
const {BrowserWindow} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 900});

//TODOs
//1. Check settings for db file, load database of last saved
//2. If No db, prompt for new db name
//2.1. DB manager => Create DB from files if none exists
var type = "R1";
compManager.buildFromFile(type,filepath, dbManager.addSet);

//setup database
// var Datastore = require('nedb')
//   , db = new Datastore({ filename: _dbpath });
// db.loadDatabase(function (err) {    // Callback is optional
//     var doc = {x: blockArray[x]};
//     db.insert(doc, function(err,newDoc){});
//   }
// });



// db.count({}, function (err, count) {
//   if (count === 0){
//     console.log("db count:" + count);
//     //prompt for file input
//     blocks = compManager.buildBlocksFromFile(filepath);
//     for(var x=0; x < blocks.length; x++){
//       var label = "R1" + (x+1);
//       var doc = {label: blocks[x]};
//       db.insert(doc, function(err,newDoc){});
//     }
//     db.loadDatabase();
//
//   }else{
//     db.loadDatabase();
//   }
// });



// db.insert([{ x:105 }, { z: 243 }], function (err, newDocs) {
// // Two documents were inserted in the database
// // newDocs is an array with these documents, augmented with their _id
// });




  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);


  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
