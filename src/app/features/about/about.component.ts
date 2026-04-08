import { Component, inject } from '@angular/core';

import { doctors } from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';
import { DoctorCardComponent } from '../../shared/components/doctor-card/doctor-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DoctorCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly doctors = doctors;

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Nosotros',
      description:
        'Conoce la historia, misión y equipo de Alfari Fisioterapia, una clínica orientada a atención profesional y recuperación funcional.',
      path: '/nosotros'
    });
  }
}
