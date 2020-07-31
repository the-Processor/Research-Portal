import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManageCollegeAdminService } from 'src/app/services/manage-college-admin.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-college-admins',
  templateUrl: './view-college-admins.component.html',
  styleUrls: ['./view-college-admins.component.scss']
})
export class ViewCollegeAdminsComponent implements OnInit, OnDestroy {

  collegeAdminSub: Subscription;

  collegeAdmins: User[] = [];

  constructor(private manageCollegeAdminService: ManageCollegeAdminService) { }

  ngOnInit(): void {
    this.manageCollegeAdminService.getCollegeAdmins();
    this.collegeAdminSub = this.manageCollegeAdminService.collegeAdminsUpdated.subscribe(
      updAdmins => {
        this.collegeAdmins = updAdmins;
        console.log(this.collegeAdmins)
      }
    );
  }

  onDelete(index: number){
    this.manageCollegeAdminService.deleteCollegeAdmin(index);
  }

  ngOnDestroy(){
    this.collegeAdminSub.unsubscribe();
  }

}
