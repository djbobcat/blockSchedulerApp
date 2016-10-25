function clinic(amdays,pmdays){
  this.amdays = tallyDays(amdays);
  this.pmdays = tallyDays(pmdays);
}
module.exports = clinic;
