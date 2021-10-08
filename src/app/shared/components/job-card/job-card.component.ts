import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() job: any = {};
  // @Input() contract = '';
  // @Input() postedAt = '';
  // @Input() location = '';
  // @Input() position = '';
  // @Input() logo = '';
  // @Input() logoBackground = '';

 

  constructor() { }

  ngOnInit(): void {

  }
}
