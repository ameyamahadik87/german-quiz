import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private router:Router) { }

  fullName = '';
  emailId = '';

  ngOnInit(): void {
  }

  saveData(fullName, emailId){
    let userInfo = {
      fullName: fullName,
      emailId: emailId
    }

    localStorage.setItem("userInfo",JSON.stringify(userInfo))

    this.router.navigate(["/questions"])
  }

}
