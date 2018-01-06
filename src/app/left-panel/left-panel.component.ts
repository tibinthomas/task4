import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  jobForm: FormGroup;
  addJobTypeForm: FormGroup;

  allJobs = [];
  jobTypes = ['j1', 'j2', 'j3'];
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.jobForm = this.formBuilder.group({
    jobName: ['', Validators.required ],
    jobType: ['', Validators.required],
    description: ['', Validators.required]
 });
}

 buildAddJobTypeForm() {
  this.addJobTypeForm = this.formBuilder.group({
    newJobType: ['', Validators.required]
  });
 }

addNewJob() {
  this.allJobs.push(this.jobForm.value);
}

addNewJobType() {
  this.jobTypes.push(this.addJobTypeForm.controls['newJobType'].value);
}

addMoreJobTypes() {
  this.buildAddJobTypeForm();
}

}
