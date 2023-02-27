import { FormArray } from "@angular/forms";

export interface  subscriptionmaster{
    id:number;
    subcode:string;
    name:string;
    description:string;
    keypoints:FormArray;
    price:number;
    isdiscount:boolean;
    totaldiscount:number;
    finalamount:number;
    isactive:boolean;
    isdelete:boolean;
    createdby :string;
    createddate:string;
    modifiedby:string;
    modifieddate:string;
}