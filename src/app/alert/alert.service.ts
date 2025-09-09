import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertModel } from "./alert.model";

@Injectable({providedIn:'root'})
export class AlertService{
    
    public show = new Subject<AlertModel>();
}