import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
// var nodemailer = require('nodemailer');
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  userInfo;
  questions = [
    {
      'id': 0,
      'question': 'What is Your Name',
      'options': [
        'Ram',
        'Sita',
        'Lakshman',
        'Hanuman'
      ],
      'answer': 'Ram',
      'selectedAns': ''
    },
    {
      'id': 1,
      'question': 'Question 2',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer': '2',
      'selectedAns': ''
    },
    {
      'id': 2,
      'question': 'Question 3',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer': '3',
      'selectedAns': ''
    }
  ]

  // sendEmail() {
  //   var transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'anuyoyo@gmail.com',
  //       pass: '44848744'
  //     }
  //   });

  //   var mailOptions = {
  //     from: 'anuyoyo@gmail.com',
  //     to: 'nileshsutar007@gmail.com',
  //     subject: 'Sending Email using Node.js',
  //     text: 'That was easy!'
  //   };

  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // }

  ngOnInit(): void {
    if (localStorage.getItem("userInfo")) {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    } else {
      this.router.navigate(['/']);
    }
    if (localStorage.getItem("isQuizOpen")) {
      this.isQuizOpen = JSON.parse(localStorage.getItem("isQuizOpen"));
      this.showTimer();
    }
    console.log(this.userInfo)
  }

  onOptionChange(selectedAns, i) {
    this.questions[i].selectedAns = selectedAns;
    console.log(selectedAns, this.questions);
  }
  isQuizOpen;
  showQuiz() {
    this.isQuizOpen = true;
    let date = new Date();
    localStorage.setItem('isQuizOpen', JSON.stringify(this.isQuizOpen));
    localStorage.setItem('savedDateTime', JSON.stringify(date));
    this.showTimer();
  }

  showTimer() {
    var currentDate;
    if (localStorage.getItem("savedDateTime")) {
      currentDate = new Date(JSON.parse(localStorage.getItem("savedDateTime")))
    } else {
      currentDate = new Date()
    }
    console.log(JSON.stringify(currentDate))
    // Set the date we're counting down to;
    var countDownDate = new Date(currentDate).getTime() + 1 * 60 * 1000;

    // Update the count down every 1 second
    var x = setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = hours + ":"
        + minutes + ":" + seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.submit(this.questions);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  @ViewChild("resultModal") public resultModal: NgbModalRef;

  totalScore;
  submit(questions) {
    this.modalService.open(this.resultModal);
    this.totalScore = 0;
    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      if (element.selectedAns) {
        if (element.selectedAns === element.answer) {
          this.totalScore++;
        }
      }
    }
    console.log(this.totalScore)
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 100,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }


}
