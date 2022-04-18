import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  username!: string;
  user!: User;
  repos!: Repository[];

  userProfile() {
    this.router.navigate(['/name-result', this.username])
    this.profileService.requestUserInfo(this.username)
    this.user = this.profileService.user
    this.profileService.requestRepositories(this.username)
    this.repos = this.profileService.repos
  }

}
