import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor(private commService: AppService) { }
  appliedJobs;

  ngOnInit() {
    this.commService.messageSource.subscribe(data => this.appliedJobs = data);
  }

}
