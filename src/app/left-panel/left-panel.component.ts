import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private commService: AppService) { }
  jobForm: FormGroup;
  addJobTypeForm: FormGroup;
  showMoreFlag: Array<boolean> = [false];

  appliedTableShow;

  showMoreOrNot: Array<boolean> = [false, false, false ,false, false, false];
  jobTypes: Array<string> = ['j1', 'j2', 'j3'];
  countOfJobTypes: Array<number> = [5,1,4,0,0,0,0,0];
  appliedTheButtonApply: Array<boolean> = [false, false, false,false, false, false,false, false, false];

  appliedJobs = [];

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
];

  ngOnInit() {
    this.buildForm();
    this.buildAddJobTypeForm();
  }

  buildForm() {
    this.jobForm = this.formBuilder.group({
    jobName: ['', [Validators.required,Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/),Validators.minLength(3),Validators.maxLength(15)]],
    jobType: ['', Validators.required],
    description: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]]
 });
}

 buildAddJobTypeForm() {
  this.addJobTypeForm = this.formBuilder.group({
    newJobType: ['', Validators.required]
  });
 }

 clickingAddNewJob(data) {
  console.log(data);
  data['date'] = new Date();
  data['time'] = '1-1-2018';
  this.countOfJobTypes[this.jobTypes.indexOf(data.jobType)] = this.countOfJobTypes[this.jobTypes.indexOf(data.jobType)] + 1 ;
  data['internalIndex'] = this.countOfJobTypes[this.jobTypes.indexOf(data.jobType)];
  this.allEntity.push(data);
  // this.allEntity[this.jobTypes.lastIndexOf(data.jobType)].internalIndex === 2 ? this.showMoreOrNot[this.jobTypes.indexOf(data.jobType)] = true : null;
  // console.log(this.showMoreOrNot);
}

addNewJobTypeInPopup(addJobTypeForm) {
  this.jobTypes.push(addJobTypeForm.newJobType);
  // alert(`Successfully added ${addJobTypeForm.newJobType} to jobtypes`)
}


showMoreButtonClick(i: number) {
  this.showMoreFlag[i] = true;
}

showTop3ButtonClick(i: number) {
  this.showMoreFlag[i] = false;
}

clickOnApplyButton(entityIndex) {
  this.appliedTheButtonApply[entityIndex] = true;
  this.appliedJobs.push(this.allEntity[entityIndex]);
  this.commService.changeInMessage(this.appliedJobs);
}

showApplied() {
  this.appliedTableShow = true;
}
}
