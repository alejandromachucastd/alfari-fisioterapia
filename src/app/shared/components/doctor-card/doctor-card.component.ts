import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DoctorItem } from '../../../core/data/clinic-data';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss'
})
export class DoctorCardComponent {
  @Input({ required: true }) doctor!: DoctorItem;
}
