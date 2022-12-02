import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket implements Payload{
    //properties and methods here
    name: string;
    totalCapacityKg: number;
    CargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapicityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapicityKg;
    }
    sumMass(items: Payload[]): number{
        let total: number = 0;
        for (let i = 0;i<items.length;i++){
            total += items[i].massKg;
        }
        return total;
    }
    currentMassKg(): number{
        let humans: number = this.sumMass(this.astronauts);
        let items: number = this.sumMass(this.CargoItems);
        return humans+items
    }
    canAdd(item:Payload):boolean {
        let currentMass: number = this.currentMassKg();
        let mass: number = item.massKg;
        if(currentMass + mass <= this.totalCapacityKg){
            return true;
        }
        else{
            return false;
        }
    }
    addCargo(cargo: Cargo): boolean{
        let item: boolean = this.canAdd(cargo);
        if(item === true){
            this.CargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }
}