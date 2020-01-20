import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDrawer } from '@angular/material';
import { UserEmitService } from './user-emit.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userEmitService;
  constructor(
    private _userEmitService: UserEmitService,
    private _userService: UserService
  ) { }

  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('sidePanel', { static: true }) public sidePanel: MatDrawer;
  public isAddPanelOpen: boolean;
  public isEditPanelOpen: boolean;

  ngOnInit() {
    this.userEmitService = this._userEmitService.emitUserPanel.subscribe(res => {

      this.isAddPanelOpen = res.isAddPanelOpen;
      this.isEditPanelOpen = res.isAddPanelOpen;
      this.sidePanel.toggle();
    })
    this._userService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
    })

  }
  opneAddPanel() {
    this.isAddPanelOpen = !this.isAddPanelOpen;
    this._userEmitService.notifyAddPanel(this.isAddPanelOpen);
    this.sidePanel.toggle();
  }
  opneEditPanel() {
    this.isEditPanelOpen = !this.isEditPanelOpen;
    this._userEmitService.notifyEditPanel(this.isEditPanelOpen);
    this.sidePanel.toggle();
  }
  ngOnDestroy() {
    this.userEmitService.unsubscribe();
  }
}

