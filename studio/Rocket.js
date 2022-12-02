"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapicityKg) {
        this.CargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapicityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        var humans = this.sumMass(this.astronauts);
        var items = this.sumMass(this.CargoItems);
        return humans + items;
    };
    Rocket.prototype.canAdd = function (item) {
        var currentMass = this.currentMassKg();
        var mass = item.massKg;
        if (currentMass + mass <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        var item = this.canAdd(cargo);
        if (item === true) {
            this.CargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
