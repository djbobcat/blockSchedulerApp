const electron = require('electron');
// const dbManager = require('./dbManager');
const compManager = require('./compManager');
const async = require('async');
var _dbname = 'schedule.db';
var _dbpath = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/database/' + _dbname;

var Datastore = require('nedb')
  , db = new Datastore({ filename: _dbpath, autoload: true });

var path1 = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/blocks_csv/R1_blocks.csv';
var path2 = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/blocks_csv/R2_blocks.csv';
var path3 = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/blocks_csv/R3_blocks.csv';

var filepath1 = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/blocks_csv/R1_blocks.csv';
//var filepath2 = '/Users/jesseelfalan/Desktop/Electron_Apps/schedulerapp/app_data/blocks_csv/R2_blocks.csv';

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
var dataset1 = {type:"R1", path:path1};
var dataset2 = {type:"R2", path:path2};
var dataset3 = {type:"R3", path:path3};


//populateDatabase(db, compManager.buildFromFile, dataset1, dataset2, dataset3, compManager);

db.count({}, function (err, count) {
  if(count == 0){
    populateDatabase(dataset1, dataset2, dataset3, compManager.insertIntoDB);
  }else{
    console.log("loaded db successfully");
  }
});


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

function populateDatabase(dataset1, dataset2, dataset3, saveData){

  compManager.buildFromFile(db, dataset1.type, dataset1.path, saveData);
  compManager.buildFromFile(db, dataset2.type, dataset2.path, saveData);
  compManager.buildFromFile(db, dataset3.type, dataset3.path, saveData);

setTimeout(function(){
  testfind();
},5000);
}

function testfind(){
  db.findOne({label : "R1-A"}, function(err, docs){
    console.log("found: " + docs.blockLabels);
  });

  db.count({ label: "R1-A" }, function (err, count) {
  console.log("R1-A COUNT: " + count);
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
