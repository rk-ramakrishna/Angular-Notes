var Geneder;
(function (Geneder) {
    Geneder[Geneder["Male"] = 0] = "Male";
    Geneder[Geneder["Female"] = 1] = "Female";
})(Geneder || (Geneder = {}));
console.log(Geneder.Male);
console.log(Geneder.Female);
console.log(Geneder[0]);
console.log(Geneder[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
