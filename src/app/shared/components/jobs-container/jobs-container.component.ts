import { Component, OnInit } from '@angular/core';
import * as jobs  from '../../../data/data.json';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.scss']
})
export class JobsContainerComponent implements OnInit {

  jobs: Job[] =  JSON.parse(JSON.stringify(jobs.default));

  constructor() { }

  ngOnInit(): void {
  
    console.log(this.jobs);
  
  }

}
