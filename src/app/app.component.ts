import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timeA: any = null;
  timeB: any = null;
  nometimeA: string = 'Nós';
  nometimeB: string = 'Eles';
  value2: string = '';

  dialogA: boolean | undefined;


  pontosA: any[] = [
      { name: '0', key: '0' },
      { name: '1', key: '1' },
      { name: '2', key: '2' },
      { name: '3', key: '3' },
      { name: '4', key: '4' },
      { name: '5', key: '5' },
      { name: '6', key: '6' },
      { name: '7', key: '7' },
      { name: '8', key: '8' },
      { name: '9', key: '9' },
      { name: '10', key: '10' },
      { name: '11', key: '11' },
      { name: '12', key: '12' }
  ];

  pontosB: any[] = [
    { name: '0', key: '0' },
    { name: '1', key: '1' },
    { name: '2', key: '2' },
    { name: '3', key: '3' },
    { name: '4', key: '4' },
    { name: '5', key: '5' },
    { name: '6', key: '6' },
    { name: '7', key: '7' },
    { name: '8', key: '8' },
    { name: '9', key: '9' },
    { name: '10', key: '10' },
    { name: '11', key: '11' },
    { name: '12', key: '12' }
];

  ngOnInit() {
    this.timeA = this.pontosA[0];
    this.timeB = this.pontosB[0];
}


    
    
showdialogA() {
  this.dialogA = true;
}
}
