import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ManageStudentService } from 'src/app/services/manage-students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {

  studentSub: Subscription;

  students: User[] = [];

  constructor(private manageStudentService: ManageStudentService) { }

  ngOnInit(): void {
    this.manageStudentService.getStudents();
    this.studentSub = this.manageStudentService.studentsUpdated.subscribe(
      updStudents => {
        this.students = updStudents;
      }
    );
  }

  onDelete(index: number){
    this.manageStudentService.deleteCollegeAdmin(index);
  }

  ngOnDestroy(){
    this.studentSub.unsubscribe();
  }

}
