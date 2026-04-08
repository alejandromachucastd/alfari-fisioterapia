import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { services } from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';
import { ServicesCardComponent } from '../../shared/components/services-card/services-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ServicesCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly services = services;

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Servicios de fisioterapia',
      description:
        'Explora los servicios de rehabilitación física, fisioterapia deportiva, terapia manual y ergonomía laboral de Alfari Fisioterapia.',
      path: '/servicios'
    });
  }
}
