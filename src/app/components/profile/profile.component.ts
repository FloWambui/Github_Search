import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User;
  // repos:repository[];

  showRepositories=false;

  toggleRepositories(){
    this.showRepositories=this.showRepositories
  }

  constructor() { }

  ngOnInit(): void {
  }

}
