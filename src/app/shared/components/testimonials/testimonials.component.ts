import { Component, Input } from '@angular/core';

import { TestimonialItem } from '../../../core/data/clinic-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input({ required: true }) items: TestimonialItem[] = [];
}
