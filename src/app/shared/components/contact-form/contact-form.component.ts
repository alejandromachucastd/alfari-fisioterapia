import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type ContactFormMode = 'appointment' | 'partnership';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnChanges {
  private readonly fb = inject(NonNullableFormBuilder);

  @Input() mode: ContactFormMode = 'partnership';
  @Input() eyebrow = 'Convenios';
  @Input() title = 'Solicitar convenio';
  @Input() subtitle =
    'Completa el formulario y te contactaremos para diseñar una propuesta de convenio.';
  @Input() submitLabel = 'Enviar solicitud';
  @Input() successMessage =
    'Recibimos tu solicitud. Un asesor de Alfari Fisioterapia te contactará pronto.';

  protected readonly submitted = signal(false);

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    date: [''],
    time: [''],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) {
      this.configureValidators();
    }
  }

  protected onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.submitted.set(true);
    this.form.reset();
    this.configureValidators();
  }

  protected isAppointment(): boolean {
    return this.mode === 'appointment';
  }

  private configureValidators(): void {
    const company = this.form.controls.company;
    const date = this.form.controls.date;
    const time = this.form.controls.time;
    const service = this.form.controls.service;

    if (this.mode === 'appointment') {
      company.setValidators([Validators.required, Validators.minLength(3)]);
      date.setValidators([Validators.required]);
      time.setValidators([Validators.required]);
      service.setValidators([Validators.required]);
    } else {
      company.setValidators([Validators.required, Validators.minLength(2)]);
      date.clearValidators();
      time.clearValidators();
      service.clearValidators();
    }

    company.updateValueAndValidity({ emitEvent: false });
    date.updateValueAndValidity({ emitEvent: false });
    time.updateValueAndValidity({ emitEvent: false });
    service.updateValueAndValidity({ emitEvent: false });
  }
}
