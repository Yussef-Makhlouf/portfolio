import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroComponent,FooterComponent,AboutComponent,SkillsComponent,PortfolioDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

}
