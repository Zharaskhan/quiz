import { Component, OnInit } from '@angular/core';
import {ProviderService} from './shared/services/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quiz-front';

  ngOnInit() {
  }

  constructor(private provider: ProviderService) {}
}
