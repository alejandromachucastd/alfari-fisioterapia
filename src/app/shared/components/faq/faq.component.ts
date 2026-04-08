import { Component, Input } from '@angular/core';

import { FaqItem } from '../../../core/data/clinic-data';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input({ required: true }) items: FaqItem[] = [];
}
