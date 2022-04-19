import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  repos!: import("/home/moringa/Desktop/project-assignments/Github_Search/src/app/models/repository").Repository[] 
  requestRepositories(username: string) {
    throw new Error('Method not implemented.');
  }
  user!: import("/home/moringa/Desktop/project-assignments/Github_Search/src/app/models/user").User 
  requestUserInfo(username: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
