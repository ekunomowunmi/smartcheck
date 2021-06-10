import { Status } from "./homeapplication";

export enum ApplicationType{
  New,Old
}

export class Application{
  name:string ='';
  type:ApplicationType = ApplicationType.New;
  description:string = '';
  port:string = '';
  endpoint:string = '';
  server:string = '';
  status: Status = Status.Healthy;
}
