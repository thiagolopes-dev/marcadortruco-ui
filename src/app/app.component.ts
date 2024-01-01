import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionalidades: boolean = false;
  nomeTimeA: string = 'Nós';
  nomeTimeB: string = 'Eles';
  valueNomeA: string = '';
  valueNomeB: string = ''
  pontosTimeA = 0;
  pontosTimeB = 0;
  vencidasA = 0;
  vencidasB = 0;


  dialogA: boolean | undefined;
  dialogB: boolean | undefined;
  dialogJogo: boolean | undefined;


  constructor(
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }


  ngOnInit() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage(): void {
    const nometimea = localStorage.getItem('nomeTimeA');
    const nometimeb = localStorage.getItem('nomeTimeB');
    const pontosTimeA = localStorage.getItem('pontosTimeA');
    const pontosTimeB = localStorage.getItem('pontosTimeB');
    const partidasvencidasa = localStorage.getItem('partidasVencidasA');
    const partidasvencidasb = localStorage.getItem('partidasVencidasB');

    if (nometimea) {
      this.nomeTimeA = nometimea;
    }
    if (nometimeb) {
      this.nomeTimeB = nometimeb;
    }
    if (pontosTimeA) {
      this.pontosTimeA = parseInt(pontosTimeA, 10);
    }
    if (pontosTimeB) {
      this.pontosTimeB = parseInt(pontosTimeB, 10);
    }
    if (partidasvencidasa) {
      this.vencidasA = parseInt(partidasvencidasa, 10);
    }
    if (partidasvencidasb) {
      this.vencidasB = parseInt(partidasvencidasb, 10);
    }
  }

  salvarNomeTimeA() {
    this.dialogA = false;
    this.nomeTimeA = this.valueNomeA;
    localStorage.setItem('nomeTimeA', this.valueNomeA);
  }

  salvarNomeTimeB() {
    this.dialogB = false;
    this.nomeTimeB = this.valueNomeB;
    localStorage.setItem('nomeTimeB', this.valueNomeB);
  }

  partidasVencidasA(value: any): void {
    localStorage.setItem('partidasVencidasA', value.toString());
  }

  partidasVencidasB(value: any): void {
    localStorage.setItem('partidasVencidasB', value.toString());
  }

  decrementA(): void {
    if (this.pontosTimeA > 0) {
      this.pontosTimeA--;
      this.pontosTimesA();
    }
  }

  decrementB(): void {
    if (this.pontosTimeB > 0) {
      this.pontosTimeB--;
      this.pontosTimesB();
    }
  }

  incrementA(): void {
    if (this.pontosTimeA < 12) {
      this.pontosTimeA++;
      this.pontosTimesA();
    }
    if (this.pontosTimeA === 12) {
      // Obtém o valor atual de partidasVencidasA do localStorage
      let partidasVencidasAStr = localStorage.getItem('partidasVencidasA');
      // Converte para número e incrementa
      let partidasVencidasA = (partidasVencidasAStr ? +partidasVencidasAStr : 0) + 1;
      // Atualiza o valor no localStorage convertendo para string
      localStorage.setItem('partidasVencidasA', partidasVencidasA.toString());
      // Atualiza a variável vinculada ao ngModel
      this.vencidasA = partidasVencidasA;
      // Notifica o Angular de mudanças
      this.cdr.detectChanges();
    }
  }

  incrementB(): void {
    if (this.pontosTimeB < 12) {
      this.pontosTimeB++;
      this.pontosTimesB();
    }
    if (this.pontosTimeB === 12) {
      // Obtém o valor atual de partidasVencidasA do localStorage
      let partidasVencidasBStr = localStorage.getItem('partidasVencidasB');
      // Converte para número e incrementa
      let partidasVencidasB = (partidasVencidasBStr ? +partidasVencidasBStr : 0) + 1;
      // Atualiza o valor no localStorage convertendo para string
      localStorage.setItem('partidasVencidasB', partidasVencidasB.toString());
      // Atualiza a variável vinculada ao ngModel
      this.vencidasB = partidasVencidasB;
      // Notifica o Angular de mudanças
      this.cdr.detectChanges();
    }
  }

  pontosTimesA(): void {
    localStorage.setItem('pontosTimeA', String(this.pontosTimeA));
  }

  pontosTimesB(): void {
    localStorage.setItem('pontosTimeB', String(this.pontosTimeB));
  }


  showdialogA() {
    this.dialogA = true;
  }

  showdialogB() {
    this.dialogB = true;
  }

  showDialogJogo() {
    this.dialogJogo = true;
  }

  reiniciaPartida() {
    this.pontosTimeA = 0;
    localStorage.setItem('pontosTimeA', '0');
    this.pontosTimeB = 0;
    localStorage.setItem('pontosTimeB', '0');
    this.dialogJogo = false;
  }

  reiniciarJogo() {
    this.vencidasA = 0;
    this.pontosTimeA = 0;
    localStorage.setItem('partidasVencidasA', '0');
    localStorage.setItem('pontosTimeA', '0');
    this.vencidasB = 0;
    this.pontosTimeB = 0;
    localStorage.setItem('partidasVencidasB', '0');
    localStorage.setItem('pontosTimeB', '0');
    this.dialogJogo = false;
  }

  confirmarNovaPartida() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja iniciar uma nova partida?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.reiniciaPartida();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  confirmarNovoJogo() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja iniciar um novo jogo?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.reiniciarJogo();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
}
