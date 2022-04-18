import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-results-repo',
  templateUrl: './results-repo.component.html',
  styleUrls: ['./results-repo.component.css']
})
export class ResultsRepoComponent implements OnInit {
  @Input() repos!:Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
