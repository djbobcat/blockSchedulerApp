function resident(label,blocks){
  this.label = label;
  this.name = null;
  this.blocks = blocks;
  this.blockLabels = getLabels(this.blocks); 
}

function getLabels(blocks){
  var str = "";
  for(var x = 0; x < blocks.length; x++){
    str = str.concat(blocks[x].blockName + "; ");
  }
  return str;
}

module.exports = resident;
