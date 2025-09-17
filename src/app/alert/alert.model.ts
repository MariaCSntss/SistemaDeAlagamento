import { AlertTypesEnum } from "./alert.enum";

export class AlertModel{
    public visible! : boolean;
    public text!:string;
    public type!:AlertTypesEnum;
}