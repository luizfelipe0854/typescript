"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
var Status;
(function (Status) {
    Status[Status["ADMIN"] = 0] = "ADMIN";
    Status[Status["USER"] = 1] = "USER";
    Status[Status["SUPPORT"] = 2] = "SUPPORT";
})(Status || (Status = {}));
console.log(DesignColors.white);
