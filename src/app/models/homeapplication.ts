import { Servers } from "./servers";

export enum Status{
  Healthy,Inactive,Critical
}

export class HomeApplication{
  applicationName:string = '';
  lastScanDate: Date = new Date(Date.now());
  status: Status = Status.Healthy;
  servers: Servers[] = [];
}
