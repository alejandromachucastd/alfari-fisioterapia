import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServiceItem } from '../../../core/data/clinic-data';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
