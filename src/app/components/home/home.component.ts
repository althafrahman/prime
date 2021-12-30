import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullname: string = '';

  mobile: string = '';

  address: string = '';

  videoURL: string = '';

  bio: string = '';

  acheivements: string = '';

  city: string = '';

  zip: string = '';



  //

  monthArray = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];

  dayArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

  yearsArray = [2021,2022,2023,2024,2025,2026,2027,2028];


  genderOptions:any[] = [];

  language: any[] = [];


  stateOptions: any[] = []

  countries: any[] = [];

  selectedCity1: any = {name: 'Eng (US)', code: 'NY', image: '/assets/usa.png'};



  selectedType: any;

  password: string = ''

  confirm_password: string = '';

  checked: boolean;


  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {


    this.language = [
      {name: 'Eng (US)', code: 'NY', image: '/assets/usa.png'},
      {name: 'Eng (IN)', code: 'IN', image: '/assets/india.png'},
  ];

  this.countries = [
    {name: 'USA', code: 'US'},
    {name: 'Uk', code: 'UK'},
    {name: 'India', code: 'IN'},
    {name: 'Nepal', code: 'NP'},
];

    this.genderOptions = [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Transgender', value: 'trans'},
      {label: 'Non Binary or Non Confirming', value: 'non-bin'},
      {label: 'Prefer not to respond', value: 'prefer'},
    ];


  }

  onBasicUpload(event: any){

  }

  onSubmit(){

  }

}
