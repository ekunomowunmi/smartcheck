import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent, ModalDirective } from 'angular-bootstrap-md';
import { DataHolderService } from '../data-holder.service';
import { ModalComponent } from '../modal/modal.component';
import { Application } from '../models/application';
import { Status } from '../models/homeapplication';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable!: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  pageAlign = 'end';
  headElements = ['SN', 'APPLICATION NAME', 'APPLICATION TYPE', 'APPLICATION DESCRIPTION','APPLICATION PORT','END POINT','HOST/ SERVER', 'ACTION'];
  maxVisibleItems: number = 10;
  @ViewChild('applicationResult') applicationResult!: ModalDirective;
  selectedApplication: Application = new Application();
  modalRef!: MDBModalRef;
  applications: Application[] = [];

  // statusEnum = Object.keys(Status);

   get statusEnum(): typeof Status {
    return Status;
  }

  constructor(private cdRef:ChangeDetectorRef, private dataHolderService: DataHolderService, private modalService:MDBModalService) { }

  ngOnInit(): void {
    this.applications = this.dataHolderService.getApplications();
    this.mdbTable.setDataSource(this.dataHolderService.getApplications());
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource()
  }
  ngAfterViewInit(){
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

}
