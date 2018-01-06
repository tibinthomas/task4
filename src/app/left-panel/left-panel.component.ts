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
  showMoreFlag: Array<boolean> = [false];

  count: Array<number> = [3,6,8,9];

  allEntity = [
    {jobName: 'CT',jobType: 'j1', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 0 },
    {jobName: 'CT',jobType: 'j1', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 1 },
    {jobName: 'CT',jobType: 'j1', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 2 },
    {jobName: 'CT',jobType: 'j1', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 3 },
    {jobName: 'CT',jobType: 'j1', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 4 },
    {jobName: 'C',jobType: 'j3', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 0 },
    {jobName: 'C',jobType: 'j3', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 1 },
    {jobName: 'C',jobType: 'j3', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 2 },
    {jobName: 'C',jobType: 'j3', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 3 },
    {jobName: 'CTO',jobType: 'j2', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 0 },
    {jobName: 'CTO',jobType: 'j2', description: 'you will die doing this', date: new Date(), time: '1-1-2018', internalIndex: 1 },
];
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
  this.allEntity.push(this.jobForm.value);
}

addNewJobType() {
  this.jobTypes.push(this.addJobTypeForm.controls['newJobType'].value);
}

addMoreJobTypes() {
  this.buildAddJobTypeForm();
}

showMoreButtonClick(i: number) {
  this.showMoreFlag[i] = true;
}

showTop3ButtonClick(i: number) {
  this.showMoreFlag[i] = false;
}

}
