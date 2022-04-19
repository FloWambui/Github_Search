import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../models/repository';
import { User } from '../models/user'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: User;
  repos: Repository[] = [];
  username!: string;
  reponame!: string;
  repositories = []


  requestUserInfo(username: string) {
    interface userApiResponse {
      name: string,
      login: string,
      bio: string,
      url: string,
      followers: number,
      following: number,
      public_repos: number,
      created_at: Date,
      avatar_url: string,

    }


    let promise = new Promise<void>((resolve, reject) => {
      firstValueFrom(this.http.get<userApiResponse>(`https://api.github.com/users/${username}?apiKey=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`)).then(response => {
        this.user.name = response!.name
        this.user.login = response!.login
        this.user.bio = response!.bio
        this.user.followers = response!.followers
        this.user.following = response!.following
        this.user.public_repos = response!.public_repos
        this.user.created_at = response!.created_at
        this.user.avatar_url = response!.avatar_url

        resolve()
      },
        error => {
          this.user.login = "User not found"
          console.log("An error occured")
          reject(error)
        }
      )
    })

    return promise

  }

  requestRepositories(username: string) {
    interface repoApiResponse {
      name: string,
      description: string,
      language: string,
      html_url: string,
      forks: number
    }

    let promise = new Promise<void>((resolve, reject) => {
      let arrayLength = this.repos.length;

      for (let i = 0; i < arrayLength; i++) {
        this.repos.pop()
      }
      firstValueFrom(this.http.get<repoApiResponse>(`https://api.github.com/users/${username}/repos?apiKey=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`)).then(response => {
        for (let i = 0; i < this.user.public_repos; i++) {
          let repo = new Repository("", "", "", "", 0)

          repo.name = response!["name"]
          repo.description = response!["description"]
          repo.language = response!["language"]
          repo.html_url = response!["html_url"]
          repo.forks = response!["forks"]

          this.repos.push(repo)
        }
        resolve()
      },

        error => {
          console.log("an error occurred")
          reject(error)
        }
      )
    })

    return promise
  }


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "")
  }


}
