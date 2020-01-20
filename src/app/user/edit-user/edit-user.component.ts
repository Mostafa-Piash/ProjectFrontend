import { Component, OnInit } from '@angular/core';
import { UserEmitService } from '../user-emit.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public isEditPanelOpen: boolean;
  private userEmitService;
  constructor(private _userEmitService: UserEmitService) { }

  ngOnInit() {
    this.userEmitService = this._userEmitService.emitEditPanel.subscribe(res => {
      this.isEditPanelOpen = res;
    });

  }
  closePanel() {
    this._userEmitService.notifyUserPanel(
      {
        isEditPanelOpen: !this.isEditPanelOpen
      }
    );
  }
  ngOnDestroy() {
    this.userEmitService.unsubscribe();
  }

}
