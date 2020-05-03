import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})
export class AppComponent {
  title = 'geradordesenhas';
  password:String = "";
  error:String = "";
  letters:boolean=false;
  numbers:boolean=false;
  symbols:boolean=false;
  lenght:number=0;

  onChangeLenght(value: string){
    const parsed = parseInt(value);
    if(!isNaN(parsed)){
      console.log(parsed);
      if(parsed > 0){
        this.error="";
        this.lenght=parsed;
      }else{
        this.error="O tamanho deve ser maior que zero";
      }
    }else{
      this.error="O tamanho deve ser um número valido";
    }
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()'
    this.password = "Nova senha";
    let validChars = '';
    if(this.letters){
      validChars+=letters;
    }
    if(this.numbers){
      validChars+=numbers;
    }
    if(this.symbols){
      validChars+=symbols;
    }
    let generatedPassword = '';
    for (let index = 0; index < this.lenght; index++) {
      const x = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[x];
    }
    this.password = generatedPassword;
  }

  onChangeLetters(){
    this.letters = !this.letters;
  }

  onChangeNumbers(){
    this.numbers = !this.numbers;
  }
  
  onChangeSymbols(){
    this.symbols = !this.symbols;
  }
}
