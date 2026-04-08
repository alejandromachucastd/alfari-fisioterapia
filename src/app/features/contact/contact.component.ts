import { Component, inject } from '@angular/core';

import { SeoService } from '../../core/services/seo.service';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Contacto y agenda',
      description:
        'Agenda una cita o solicita un convenio empresarial desde los formularios de contacto de Alfari Fisioterapia.',
      path: '/contacto'
    });
  }
}
