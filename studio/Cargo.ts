import { Payload } from "./Payload";
export class Cargo implements Payload {
    //properties and methods here
    massKg: number;
    material: string;
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
}