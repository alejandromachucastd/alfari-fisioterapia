import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { services } from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  protected readonly service = computed(() => services.find((item) => item.slug === this.slug()));

  private readonly syncSeo = effect(() => {
    const current = this.service();

    if (current) {
      this.seo.update({
        title: current.title,
        description: current.description,
        path: `/servicios/${current.slug}`
      });
    }
  });
}
