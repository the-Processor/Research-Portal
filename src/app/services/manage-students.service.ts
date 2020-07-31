import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ManageStudentService{

    students: User[] = [];

    studentsUpdated = new Subject<User[]>();

    constructor(private http: HttpClient){}

    getStudents(){
        // get logic
        this.http.get<{message: string, data: User[]}>(
            'http://localhost:3000/api/v1/users/student'
        ).subscribe(
            fetchedStudents => {
                this.students = fetchedStudents.data;
                return this.studentsUpdated.next(this.students.slice());
            }
        )
    }

    postStudent(newStudent: User){
        console.log(newStudent)
        this.http.post<{message: string, data: any}>(
            'http://localhost:3000/api/v1/users/',
            newStudent
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
                this.students.push(postedUser);
                this.studentsUpdated.next(this.students.slice());
            }
        )
    }


    deleteCollegeAdmin(index: number){
        const id = this.students[index]._id;
        this.http.delete<{message: string}>('http://localhost:3000/api/v1/users/' + id)
        .subscribe(delResponse => {
            this.getStudents();
        });
    }
}