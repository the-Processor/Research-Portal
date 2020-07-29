import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from 'src/app/shared/mime-type.validator';

@Component({
  selector: 'app-manage-college-admins',
  templateUrl: './manage-college-admins.component.html',
  styleUrls: ['./manage-college-admins.component.scss']
})
export class ManageCollegeAdminsComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;

  constructor(private staffService: ManageStaffService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, {validators: [Validators.required]}),
      middleName: new FormControl(null, {validators: [Validators.required]}),
      lastName: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      contact: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^\d{10}$/)]}),
      type: new FormControl(null, {validators: [Validators.required]}),
      qualification: new FormControl(null, {validators: [Validators.required]}),
      designation: new FormControl(null, {validators: [Validators.required]}),
      experience: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^[1-9][0-9]{0,1}$/)]}),
      salary: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^[1-9][0-9]{3,10}$/)]})
    });
  }

  // , Validators.pattern(/^[1-9][0-9]{3,10}$/g)

  onSubmit(){
    if (!this.form.valid){
      return;
    }
    const name = `${this.form.value.firstName} ${this.form.value.middleName} ${this.form.value.lastName}`;
    const newStaff = new User(
      null,
      name,
      this.form.value.type,
      this.form.value.designation,
      this.form.value.qualification,
      this.form.value.salary,
      this.form.value.experience,
      this.form.value.contact,
      this.form.value.email,
      this.form.value.email,
      null,
      null
    );
    this.staffService.createStaffUser(newStaff, this.form.value.image);
    this.form.reset();
  }

  // onImagePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({image: file});
  //   this.form.get('image').updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // }

  onClear(){
    this.form.reset();
  }

}
