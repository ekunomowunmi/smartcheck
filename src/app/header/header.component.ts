import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { DataHolderService } from '../data-holder.service';
import { Application } from '../models/application';
import { HomeApplication } from '../models/homeapplication';
import { Servers } from '../models/servers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  servers: Servers[] = [];
  applications: Application[] = [];
  applicationServers: HomeApplication[] = [];
  @ViewChild('serverList') serverList!: ModalDirective;
  @ViewChild('resultList') resultList!: ModalDirective;


  constructor(private dataHolderService: DataHolderService) { }

  ngOnInit(): void {
    this.servers = this.dataHolderService.getServers();
    this.applications = this.dataHolderService.getApplications();
    this.applicationServers = this.dataHolderService.getApplicationServers();

  }

  showResult(){
    this.serverList.show();
  }

}
