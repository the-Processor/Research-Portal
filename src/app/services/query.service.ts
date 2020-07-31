import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Query } from '../models/query';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class QueryService implements OnInit{

    constructor(private http: HttpClient){}

    newAdminUpdated = new Subject<Query[]>();
    oldAdminUpdated = new Subject<Query[]>();
    newStudentUpdated = new Subject<Query[]>();
    oldStudentUpdated = new Subject<Query[]>();

    newAdminQueries: Query[] = [];
    oldAdminQueries: Query[] = [];
    newStudentQueries: Query[] = [];
    oldStudentQueries: Query[] = [];

    ngOnInit(){}

    // ================================GET=====================================

    getNewAdminQueries(){
        this.http.get<{message: string, data: Query[]}>(
            'http://localhost:3000/api/v1/queries/new/admin'
        ).subscribe(
            response => {
                this.newAdminQueries = response.data;
                return this.newAdminUpdated.next(this.newAdminQueries.slice());
            }
        );
    }

    getOldAdminQueries(){
        this.http.get<{message: string, data: Query[]}>(
            'http://localhost:3000/api/v1/queries/replied/admin'
        ).subscribe(
            response => {
                this.oldAdminQueries = response.data;
                return this.oldAdminUpdated.next(this.oldAdminQueries.slice());
            }
        );
    }

    getNewStudentQueries(){
        this.http.get<{message: string, data: Query[]}>(
            'http://localhost:3000/api/v1/queries/new/student'
        ).subscribe(
            response => {
                this.newStudentQueries = response.data;
                return this.newStudentUpdated.next(this.newStudentQueries.slice());
            }
        );
    }

    getOldStudentQueries(){
        this.http.get<{message: string, data: Query[]}>(
            'http://localhost:3000/api/v1/queries/replied/student'
        ).subscribe(
            response => {
                this.oldStudentQueries = response.data;
                return this.oldStudentUpdated.next(this.oldStudentQueries.slice());
            }
        );
    }

    getQueryByEmail(email){
        return this.http.get<{message: string, data: Query[]}>(
            'http://localhost:3000/api/v1/queries/' + email
        )
    }

    // =============================POST=======================================

    postQuery(newQuery){
        console.log(newQuery)
        this.http.post<{message: string, data: Query}>(
            'http://localhost:3000/api/v1/queries/',
            newQuery
        ).subscribe(
            response => {
                if(response.data.type === 'admin'){
                    this.newAdminQueries.push(response.data);
                    return this.newAdminUpdated.next(this.newAdminQueries.slice());
                }else if(response.data.type === 'student'){
                    this.newStudentQueries.push(response.data);
                    return this.newStudentUpdated.next(this.newStudentQueries.slice());
                }
            }
        );
    }

    // ============================PUT=======================================

    replyAdminQueries(index: number, resp: String){
        const id = this.newAdminQueries[index]._id;
        this.http.put<{message: string, data: Query}>(
            'http://localhost:3000/api/v1/queries/' + id,
            { response: resp }
        ).subscribe(
            response => {
                // if(response.data.type === 'admin'){
                //     this.newAdminQueries.splice(index, 1);
                //     this.oldAdminQueries.push(response.data);
                // }else if(response.data.type === 'student'){
                //     this.newStudentQueries.push(response.data);
                // }
                this.newAdminQueries.splice(index, 1);
                this.updateQueryArray();
            }
        );
    }

    replyStudentQueries(index: number, resp: string){
        const id = this.newStudentQueries[index]._id;
        this.http.put<{message: string, data: Query}>(
            'http://localhost:3000/api/v1/queries/' + id,
            { response: resp }
        ).subscribe(
            response => {
                // if(response.data.type === 'admin'){
                //     this.newAdminQueries.splice(index, 1);
                //     this.oldAdminQueries.push(response.data);
                // }else if(response.data.type === 'student'){
                //     this.newStudentQueries.push(response.data);
                // }
                this.oldStudentQueries.push(response.data);
                this.newStudentQueries.splice(index, 1);
                this.updateQueryArray();
            }
        );
    }

    private updateQueryArray(){
        // if(type === 'newAdmin'){
        //     return this.newAdminUpdated.next(this.newAdminQueries.slice());
        // }else if(type === 'oldAdmin'){
        //     return this.oldAdminUpdated.next(this.oldAdminQueries.slice());
        // }else if(type === 'newStudent'){
        //     return this.newStudentUpdated.next(this.newStudentQueries.slice());
        // }else if(type === 'oldStudent'){
        //     return this.oldStudentUpdated.next(this.oldStudentQueries.slice());
        // }
        this.newAdminUpdated.next(this.newAdminQueries.slice());
        this.oldAdminUpdated.next(this.oldAdminQueries.slice());
        this.newStudentUpdated.next(this.newStudentQueries.slice());
        this.oldStudentUpdated.next(this.oldStudentQueries.slice());
    }

    // ==============================Delete====================

    deleteQuery(index: number){
        const id = this.newAdminQueries[index]._id;
        return this.http.delete<{message: string, data: any}>(
            'http://localhost:3000/api/v1/queries/' + id
        )
    }
    
}