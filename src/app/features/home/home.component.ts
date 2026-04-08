import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { benefits, faqs, services, testimonials } from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ServicesCardComponent } from '../../shared/components/services-card/services-card.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, ServicesCardComponent, TestimonialsComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  private static readonly PROMO_DURATION_MS = 5000;
  private static readonly PROMO_TICK_MS = 100;

  protected readonly benefits = benefits;
  protected readonly services = services.slice(0, 3);
  protected readonly testimonials = testimonials;
  protected readonly faqs = faqs;
  protected readonly currentPromoIndex = signal(0);
  protected readonly isPromoAutoplayActive = signal(true);
  protected readonly promoProgress = signal(0);
  protected readonly promoSlides = [
    {
      eyebrow: 'Promocional destacado',
      title: 'Valoración inicial con enfoque clínico y plan personalizado.',
      description:
        'Conoce tu punto de partida, prioriza dolor y movilidad, y recibe una ruta clara para comenzar tratamiento.',
      image: 'assets/images/inicio/inicio.png',
      tags: ['Primera cita', 'Plan inicial', 'Seguimiento claro']
    },
    {
      eyebrow: 'Recuperación funcional',
      title: 'Programas de rehabilitación pensados para volver a tu ritmo.',
      description:
        'Sesiones orientadas a control del dolor, fuerza y retorno progresivo a tus actividades diarias o deportivas.',
      image: services[0].image,
      tags: ['Rehabilitación', 'Movimiento', 'Objetivos medibles']
    },
    {
      eyebrow: 'Bienestar empresarial',
      title: 'Convenios y acciones preventivas para equipos más sanos.',
      description:
        'Diseñamos propuestas de ergonomía, pausas activas y seguimiento funcional para empresas y organizaciones.',
      image: services[3].image,
      tags: ['Convenios', 'Empresas', 'Prevención']
    }
  ] as const;

  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);
  private promoAutoplayId?: ReturnType<typeof setInterval>;

  constructor() {
    this.seo.update({
      title: 'Clínica de fisioterapia y rehabilitación',
      description:
        'Alfari Fisioterapia ofrece atención profesional, valoración funcional y solicitud de cita en línea para pacientes y empresas.',
      path: '/'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.startPromoAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopPromoAutoplay();
  }

  protected goToPromo(index: number): void {
    this.currentPromoIndex.set(index);
    this.resetPromoProgress();
  }

  protected nextPromo(): void {
    this.currentPromoIndex.update((value) => (value + 1) % this.promoSlides.length);
    this.resetPromoProgress();
  }

  protected previousPromo(): void {
    this.currentPromoIndex.update((value) => (value - 1 + this.promoSlides.length) % this.promoSlides.length);
    this.resetPromoProgress();
  }

  protected togglePromoAutoplay(): void {
    const nextState = !this.isPromoAutoplayActive();
    this.isPromoAutoplayActive.set(nextState);

    if (nextState) {
      this.startPromoAutoplay();
      return;
    }

    this.stopPromoAutoplay();
  }

  private startPromoAutoplay(): void {
    this.stopPromoAutoplay();

    if (!this.isPromoAutoplayActive()) {
      return;
    }

    this.promoAutoplayId = setInterval(() => {
      this.promoProgress.update((value) => {
        const nextValue = value + (HomeComponent.PROMO_TICK_MS / HomeComponent.PROMO_DURATION_MS) * 100;

        if (nextValue >= 100) {
          this.currentPromoIndex.update((current) => (current + 1) % this.promoSlides.length);
          return 0;
        }

        return nextValue;
      });
    }, HomeComponent.PROMO_TICK_MS);
  }

  private stopPromoAutoplay(): void {
    if (!this.promoAutoplayId) {
      return;
    }

    clearInterval(this.promoAutoplayId);
    this.promoAutoplayId = undefined;
  }

  private resetPromoProgress(): void {
    this.promoProgress.set(0);
  }
}
