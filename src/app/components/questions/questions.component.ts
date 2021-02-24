import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  userInfo;
  questions = [
    {
      'question': 'What is Your Name',
      'options': [
        'Ram',
        'Sita',
        'Lakshman',
        'Hanuman'
      ],
      'answer': 'Ram'
    },
    {
      'question': 'Question 2',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer': '2'
    },
    {
      'question': 'Question 3',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer': '3'
    }
  ]

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(this.userInfo)
  }

  onOptionChange(option, abc) {
    console.log(option, abc);
  }

  slidesStore = [
    {
      id : 1,
      src : 'http://placehold.it/350x150/000000',
      alt : 'alt'
    },
    {
      id : 2,
      src : 'http://placehold.it/350x150/111111',
      alt : 'alt'
    },
    {
      id : 3,
      src : 'http://placehold.it/350x150/222222',
      alt : 'alt'
    },
    {
      id : 4,
      src : 'http://placehold.it/350x150/333333',
      alt : 'alt'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
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
    nav: true
  }


}
