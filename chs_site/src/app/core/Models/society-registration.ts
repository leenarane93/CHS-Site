import { FormArray } from "@angular/forms";

export interface SocietyInitialRegistration{
    Id:number;
    SocietyId:string;
    SocietyName:string;
    SocietyAddress:string;
    SocietyContact:string;
    SocietyDescription:string;
    SocietyEmail:string;
    HeadOfSociety:string;
    HOSContact:string;
    HOSEmail:string;
    TotalWings:number;
    FlatsPerWings:number;
    ParkingType:string;
    AdditionalItems:FormArray;
}