var validation = {
    isEmpty: function(val) {
        return (val === "") ? true : false;
    },
    hasNoSlashes: function(val) {
        return (val.indexOf("/") === -1) ? true : false;
    },
    isInvalidYear: function(val) {
        var year = val.substring(val.length - 4); 
        return (isNaN(year)) ? true : false; 
    },
    isInvalidDate: function(val) {
        return (val.toString() === "Invalid Date") ? true : false;
    }
};