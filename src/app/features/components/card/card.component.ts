import { Component, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardTitle: string = '';

  @Input() cardData!: any;
  @Input() cardDataTitle!: string;
  @Input() cardData2!: any;
  @Input() cardDataTitle2!: string;
  @Input() cardData3!: any;
  @Input() cardDataTitle3!: string;
  @Input() cardData4!: any;
  @Input() cardDataTitle4!: string;

  @Input() card: any = {};
}
