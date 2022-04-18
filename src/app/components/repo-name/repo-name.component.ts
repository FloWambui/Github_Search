import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repo-name',
  templateUrl: './repo-name.component.html',
  styleUrls: ['./repo-name.component.css']
})
export class RepoNameComponent implements OnInit {
  @Input() repos!:Repository
  constructor() { }

  ngOnInit(): void {
  }

}
