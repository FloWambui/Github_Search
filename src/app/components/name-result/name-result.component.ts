import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


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

  constructor(private route:ActivatedRoute, private profileService:ProfileService) { }

  results(){
    this.profileService.requestUserInfo(this.username)
    this.user=this.profileService.user
    this.profileService.requestRepositories(this.username)
    this.repos=this.profileService.repos

    this.showRepositories=false;
  }

  ngOnInit(){
    this.results()
  }

}
