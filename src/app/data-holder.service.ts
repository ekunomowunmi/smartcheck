import { Injectable } from '@angular/core';
import { Application, ApplicationType } from './models/application';
import { HomeApplication, Status } from './models/homeapplication';
import { Servers } from './models/servers';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {

  constructor() { }

  getApplicationServers(): Array<HomeApplication>{
    const homeApps:Array<HomeApplication> = [];
    let homeApp = new HomeApplication();
    homeApp.applicationName = 'Doubango';
    homeApp.lastScanDate = new Date(Date.now());
    homeApp.status = Status.Healthy;
    let servers:Array<Servers> = [];
    let server = new Servers();
    server.serverName = 'Server 1';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 2';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = false;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 3';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);

    homeApp.servers = servers;
    homeApps.push(homeApp);

    homeApp = new HomeApplication();
    homeApp.applicationName = 'Freschias';
    homeApp.lastScanDate = new Date(Date.now());
    homeApp.status = Status.Inactive;
    servers = []
    server = new Servers();
    server.serverName = 'Server 1';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 2';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = false;
    server.memory = 45;
    servers.push(server);

    homeApp.servers = servers;
    homeApps.push(homeApp);

    homeApp = new HomeApplication();
    homeApp.applicationName = 'Tesla';
    homeApp.lastScanDate = new Date(Date.now());
    homeApp.status = Status.Critical;
    servers= [];
    server = new Servers();
    server.serverName = 'Server 1';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 2';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = false;
    server.memory = 45;
    servers.push(server);

    homeApp.servers = servers;
    homeApps.push(homeApp);

    return homeApps


  }

  getServers():Array<Servers>{
    let servers:Array<Servers> = [];
    let server = new Servers();
    server.serverName = 'Server 1';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 2';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = false;
    server.memory = 45;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 3';
    server.storage = 76;
    server.cpu = 25;
    server.ipaddress = '192.168.0.25';
    server.isActive = true;
    server.memory = 45;
    servers.push(server);
    server = new Servers();
    server.serverName = 'Server 4';
    server.storage = 16;
    server.cpu = 35;
    server.ipaddress = '192.168.135.25';
    server.isActive = true;
    server.memory = 94;
    servers.push(server);

    server = new Servers();
    server.serverName = 'Server 5';
    server.storage = 78;
    server.cpu = 52;
    server.ipaddress = '172.48.0.25';
    server.isActive = false;
    server.memory = 49;
    servers.push(server);

    return servers
  }

  getApplications():Array<Application>{
    let applications:Array<Application> = [];
    let application = new Application();
    application.description = 'Freshyo Yorghurt, the best';
    application.name = 'Freshyo';
    application.endpoint = 'http://seamfixendpoint/getApplications';
    application.port = '25';
    application.server = 'Server1';
    application.type = ApplicationType.New
    applications.push(application);

    application = new Application();
    application.description = 'Derecks App';
    application.name = 'Dereck';
    application.endpoint = 'http://seamfixendpoint/getApplications';
    application.port = '30';
    application.server = 'Server2';
    application.type = ApplicationType.Old
    applications.push(application);

    application = new Application();
    application.description = 'Freshyo Yorghurt, the best';
    application.name = 'Freshyo';
    application.endpoint = 'http://seamfixendpoint/getApplications';
    application.port = '25';
    application.server = 'Server1';
    application.type = ApplicationType.New
    applications.push(application);

    application = new Application();
    application.description = 'Freshyo Yorghurt, the best';
    application.name = 'Freshyo';
    application.endpoint = 'http://seamfixendpoint/getApplications';
    application.port = '25';
    application.server = 'Server1';
    application.type = ApplicationType.New
    applications.push(application);

    return applications
  }
}
