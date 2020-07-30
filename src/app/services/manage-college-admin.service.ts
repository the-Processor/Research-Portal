import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ManageCollegeAdminService{

    collegeAdmins: User[] = [];

    collegeAdminsUpdated = new Subject<User[]>();

    constructor(private http: HttpClient){}

    getCollegeAdmins(){
        // get logic
        this.http.get<{message: string, data: User[]}>(
            'http://localhost:3000/api/v1/users/collegeAdmins'
        ).subscribe(
            fetchedCollegeAdmins => {
                this.collegeAdmins = fetchedCollegeAdmins.data;
                return this.collegeAdminsUpdated.next(this.collegeAdmins.slice());
            }
        )
    }

    postCollegeAdmin(newCollegeAdmin: User){
        console.log(newCollegeAdmin)
        this.http.post<{message: string, data: any}>(
            'http://localhost:3000/api/v1/users/',
            newCollegeAdmin
        ).subscribe(
            response => {
                const postedUser = new User(
                    response.data._id,
                    response.data.email,
                    response.data.password,
                    response.data.name,
                    response.data.type,
                    response.data.contact,
                    {
                        building: response.data.address.building,
                        street : response.data.address.street,
                        city : response.data.address.city,
                        district : response.data.address.district,
                        pincode : response.data.address.pincode
                    },
                    response.data.institute
                );
                console.log(postedUser);
                this.collegeAdmins.push(postedUser);
                this.collegeAdminsUpdated.next(this.collegeAdmins.slice());
            }
        )
    }

    updatePassword(id: string, oldPass: string, newPass: string){
        this.http.put<{message: string, data: any}>(
          'http://localhost:3000/api/v1/users/passwords/' + id,
          {
            oldPassword: oldPass,
            newPassword: newPass
          }
        ).subscribe(response => {
          console.log(response.message);
        });
      }

    deleteCollegeAdmin(index: number){
        const id = this.collegeAdmins[index]._id;
        this.http.delete<{message: string}>('http://localhost:3000/api/v1/users/' + id)
        .subscribe(delResponse => {
            this.getCollegeAdmins();
        });
    }
}