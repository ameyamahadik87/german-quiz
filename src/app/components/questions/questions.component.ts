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

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (localStorage.getItem("isQuizOpen")) {
      this.isQuizOpen = JSON.parse(localStorage.getItem("isQuizOpen"))
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
    localStorage.setItem('isQuizOpen', JSON.stringify(this.isQuizOpen));
  }
  
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

  submit(questions) {
    let total = 0;
    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      if (element.selectedAns) {
        if (element.selectedAns === element.answer) {
          total++;
        }
      }
    }
    console.log(total)
  }

  slidesStore = [
    {
      id: 1,
      src: 'http://placehold.it/350x150/000000',
      alt: 'alt'
    },
    {
      id: 2,
      src: 'http://placehold.it/350x150/111111',
      alt: 'alt'
    },
    {
      id: 3,
      src: 'http://placehold.it/350x150/222222',
      alt: 'alt'
    },
    {
      id: 4,
      src: 'http://placehold.it/350x150/333333',
      alt: 'alt'
    }
  ]

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
