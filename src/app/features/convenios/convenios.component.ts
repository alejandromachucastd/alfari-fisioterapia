import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { convenioBrands } from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.scss'
})
export class ConveniosComponent {
  protected readonly brands = convenioBrands;

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Convenios empresariales',
      description:
        'Conoce la propuesta de convenios de Alfari Fisioterapia para empresas, marcas y equipos que buscan prevención y bienestar laboral.',
      path: '/convenios'
    });
  }
}
