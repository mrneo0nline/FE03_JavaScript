var Event = function(name, dateString) {
    this.name = name;
    this.dateString = dateString;
    this.date = new Date(dateString);
    this.days;
};
Event.prototype.calculateDays = function() {
    var today = new Date();
    var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
    this.days = ( this.date.getTime() - today.getTime() ) / oneDay;
    this.days = Math.ceil(this.days);
};
Event.prototype.inputMissing = function() {
    if ( validation.isEmpty(this.name) || validation.isEmpty(this.dateString) ) {
        return true;
    } else {
        return false;
    }
};
Event.prototype.invalidDate = function() {
    if ( validation.hasNoSlashes(this.dateString) ) { 
        return true;
    } 
    else if ( validation.isInvalidYear(this.dateString) ) {
        return true;
    }     
    else if ( validation.isInvalidDate(this.date) ) {
        return true;
    }
    else {
        return false;
    }
};