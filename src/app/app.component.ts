import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  nometimeA: string = 'Nós';
  nometimeB: string = 'Eles';
  valuenomeA: string = ''
  pontosA: string = '';
  valueB: string = '';
  vencidasA: string = '0';
  vencidasB: string = '0';

  dialogA: boolean | undefined;
  dialogB: boolean | undefined;



  ngOnInit() {
    // this.selectedTimeA = this.pontosA[0];
    // this.selectedTimeB = this.pontosB[0];
    this.getFromLocalStorage();
  }

  getFromLocalStorage(): void {
    const storedValueA = localStorage.getItem('nomeTimeA');
    const storedValueB = localStorage.getItem('nomeTimeB');
    const valuePontosA = localStorage.getItem('partidasVencidasA')
    if (storedValueA) {
      this.nometimeA = storedValueA;
    }
    if (storedValueB) {
      this.nometimeB = storedValueB;
    }
    if(valuePontosA){
      this.pontosA = valuePontosA;
    }
  }


  showdialogA() {
    this.dialogA = true;
  }

  showdialogB() {
    this.dialogB = true;
  }

  partidasVencidasA(){
    localStorage.setItem('partidasVencidasA', this.vencidasA);
  }

  pontosTimeA(){
    localStorage.setItem('pontosTimeA', this.pontosA);
  }

  salvarNomeTimeA() {
    this.dialogA = false;
    this.nometimeA = this.valuenomeA;
    localStorage.setItem('nomeTimeA', this.valuenomeA);
  }
  salvarNomeTimeB() {
    this.dialogB = false;
    this.nometimeB = this.valueB;
    localStorage.setItem('nomeTimeB', this.nometimeB);
  }

  onRadioChange(event: any): void {
    const selectedValue = event.target.value;
    console.log(event);
    localStorage.setItem('PontosTimeA', selectedValue.key);
  }
}
