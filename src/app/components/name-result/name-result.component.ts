import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-name-result',
  templateUrl: './name-result.component.html',
  styleUrls: ['./name-result.component.css']
})
export class NameResultComponent implements OnInit {
  repos!:Repository[];
  user!: User;
  username!: string;

  showRepositories=false;

  toggleRepositories(){
    this.showRepositories=!this.showRepositories
  }

  constructor() { }

  ngOnInit(): void {
  }

}
