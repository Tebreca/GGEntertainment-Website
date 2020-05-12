import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private retrigger = true;

  constructor() { }

  text = 'GG';

  ngOnInit(): void {
    this.triggerLoop();
    // setInterval(() => this.TypeLoop(), 1200);
  }

  private removeIfNeeded(): void{
    if (this.text.includes('|')){
      this.text = this.text.substring(0, this.text.length - 1);
    }
  }

  triggerLoop(): void {
    if (!this.retrigger){
      return;
    }
    this.retrigger = false;
    setTimeout(() => this.text = 'GG.', 500);
    setTimeout(() => this.text = 'GG', 1500);
    setTimeout(() => this.text = 'GG ', 1600);
    setTimeout(() => this.text = 'GG W', 1800);
    setTimeout(() => this.text = 'GG WP', 1900);
    setTimeout(() => this.text = 'GG W', 5900);
    setTimeout(() => this.text = 'GG ', 6000);
    setTimeout(() => {this.text = 'GG.'; this.retrigger = true; }, 6200);
  }

  private TypeLoop() {
    this.text += '|'; setTimeout(() => this.removeIfNeeded(), 600);
  }
}
