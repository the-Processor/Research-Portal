import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from 'src/app/shared/mime-type.validator';
import { PaperService } from 'src/app/services/papers.service';
import { Paper } from 'src/app/models/paper';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';

@Component({
  selector: 'app-publish-paper',
  templateUrl: './publish-paper.component.html',
  styleUrls: ['./publish-paper.component.scss']
})
export class PublishPaperComponent implements OnInit {

  form: FormGroup;
  private adjust = new AdjustDayAndMonth();

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]}),
      keywords: new FormControl(null, {validators: [Validators.required]}),
      areaOfResearch: new FormControl(null, {validators: [Validators.required]}),
      name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      institute: new FormControl(null, {validators: [Validators.required]}),
      contact: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^\d{10}$/)]}),
      name1: new FormControl(null),
      email1: new FormControl(null),
      institute1: new FormControl(null),
      contact1: new FormControl(null,  Validators.pattern(/^\d{10}$/) ),
      name2: new FormControl(null),
      email2: new FormControl(null),
      institute2: new FormControl(null),
      contact2: new FormControl(null, {validators: Validators.pattern(/^\d{10}$/)}),
      filepdf: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  // , Validators.pattern(/^[1-9][0-9]{3,10}$/g)

  onSubmit(){
    if (!this.form.valid){
      return;
    }
    // const date = `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`;
    const newPaper = new Paper(
      null, //id
      this.form.value.title, //title
      this.form.value.keywords, //keywords
      this.form.value.areaOfResearch, //area of research
      {
        name: this.form.value.name,
        email: this.form.value.email,
        institute: this.form.value.institute,
        contact: this.form.value.contact,
      },
      {
        name1: this.form.value.name1,
        email1: this.form.value.email1,
        institute1: this.form.value.institute1,
        contact1: this.form.value.contact1,
      },
      {
        name2: this.form.value.name2,
        email2: this.form.value.email2,
        institute2: this.form.value.institute2,
        contact2: this.form.value.contact2,
      },
      'researchaide',
      null, // publication date
      null, // path
      0 // status
    );
    console.log(this.form.value.filepdf)
    this.paperService.addPaper(newPaper, this.form.value.filepdf);
    // this.staffService.createStaffUser(newStaff, this.form.value.image);
    // this.form.reset();
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // this.form.setValue({filepdf: file});
    this.form.patchValue({filepdf: file});
    this.form.get('filepdf').updateValueAndValidity();
    const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result as string;
    // };
    reader.readAsDataURL(file);
  }

  onClear(){
    this.form.reset();
  }

}
