import { Component, OnInit } from '@angular/core';

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
      'answer' : 'Ram'
    },
    {
      'question': 'Question 2',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer' : '2'
    },
    {
      'question': 'Question 3',
      'options': [
        '1',
        '2',
        '3',
        '4'
      ],
      'answer' : '3'
    }
  ]

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(this.userInfo)
  }

  onOptionChange(option,abc){

    console.log(option,abc);
  }

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

}
