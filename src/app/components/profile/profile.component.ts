import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';
import { ProfileService } from 'src/app/services/profile.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User;
  repos!:Repository[];

  showRepositories=false;

  toggleRepositories(){
    this.showRepositories=this.showRepositories
  }

  constructor(private profileService:ProfileService, private http:HttpClient) { }

  ngOnInit(){
    this.profileService.requestUserInfo("flowambui")
    this.user=this.profileService.user
    this.profileService.requestRepositories("flowambui")
    this.repos=this.profileService.repos

    this.showRepositories=false;
    }

}
