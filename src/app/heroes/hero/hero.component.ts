import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Spiderman'
  public age: number = 27

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'ironman'
  }

  changeAge(): void{
    this.age = 45
  }

  resetForm() {
    this.name = 'Spiderman'
    this.age = 27
  }

}
