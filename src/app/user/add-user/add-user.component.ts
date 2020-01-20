import { Component, OnInit } from '@angular/core';
import { UserEmitService } from '../user-emit.service';
import { Users } from '../users';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public isAddPanelOpen:boolean;
  public userInput:Users;
  private userEmitService;
  constructor(
    private _userEmitService:UserEmitService,
    private _userService: UserService
  ) {
    this.userInput = new Users();
   }

  ngOnInit() {
   this.userEmitService=this._userEmitService.emitAddPanel.subscribe(res=>{
      this.isAddPanelOpen=res;
    });
    
  }
  closePanel(){
    this._userEmitService.notifyUserPanel(
      {
        isAddPanelOpen: !this.isAddPanelOpen
      }
    );
  }
  createUser(){
    this._userService.post(this.userInput).subscribe(res=>{
      alert("Success");
    })
  }
  ngOnDestroy() {
    this.userEmitService.unsubscribe();
  }

}
