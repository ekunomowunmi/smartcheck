import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective, ModalDirective, MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { DataHolderService } from '../data-holder.service';
import { ModalComponent } from '../modal/modal.component';
import {HomeApplication, Status} from '../models/homeapplication'
import { Servers } from '../models/servers';
@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable!: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  pageAlign = 'end';
  headElements = ['SN', 'APPLICATION', 'SERVERS MAPPED', 'LAST SCAN DATE','STATUS','ACTION'];
  maxVisibleItems: number = 10;
  @ViewChild('applicationResult') applicationResult!: ModalDirective;
  selectedApplication: HomeApplication = new HomeApplication();
  modalRef!: MDBModalRef;
  allApplications: HomeApplication[] = [];
  servers: Servers[] = [];

  // statusEnum = Object.keys(Status);

   get statusEnum(): typeof Status {
    return Status;
  }
  constructor(private cdRef:ChangeDetectorRef, private dataHolderService: DataHolderService, private modalService:MDBModalService) { }

  ngOnInit(): void {
    this.allApplications = this.dataHolderService.getApplicationServers();
    this.servers = this.dataHolderService.getServers();

    this.mdbTable.setDataSource(this.dataHolderService.getApplicationServers());
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource()
  }
  ngAfterViewInit(){
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  showApplicationResult(application: HomeApplication){
    this.selectedApplication.applicationName = application.applicationName;
    this.selectedApplication.lastScanDate = application.lastScanDate;
    this.selectedApplication.servers = application.servers;
    this.selectedApplication.status = application.status;
    this.applicationResult.show();
  }
  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

}
