export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: string;
  image: string;
  tag: string;
};

export type DoctorItem = {
  name: string;
  specialty: string;
  bio: string;
  image: string;
};

export type TestimonialItem = {
  author: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const appointmentRoute = '/contacto#agendar';

export const benefits = [
  {
    title: 'Valoración precisa',
    description: 'Detectamos dolor, movilidad y objetivos para definir un plan realista desde la primera visita.'
  },
  {
    title: 'Tratamiento personalizado',
    description: 'Cada sesión responde a tu evolución, no a protocolos genéricos.'
  },
  {
    title: 'Seguimiento claro',
    description: 'Explicamos avances, tiempos y siguientes pasos con lenguaje simple.'
  },
  {
    title: 'Agenda sin fricción',
    description: 'Solicita tu cita en línea y te confirmamos el mejor horario.'
  }
] as const;

export const services: ServiceItem[] = [
  {
    slug: 'rehabilitacion-fisica',
    title: 'Rehabilitación física',
    shortDescription: 'Recupera movimiento y fuerza después de lesión o cirugía.',
    description:
      'Programa integral para pacientes postquirúrgicos y lesiones musculoesqueléticas. Combina terapia manual, ejercicio terapéutico y control funcional.',
    benefits: [
      'Menos dolor e inflamación',
      'Más movilidad y control',
      'Progresión segura por objetivos'
    ],
    icon: 'shield',
    image:
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80',
    tag: 'Ortopedia'
  },
  {
    slug: 'fisioterapia-deportiva',
    title: 'Fisioterapia deportiva',
    shortDescription: 'Prevención, recuperación y retorno seguro al deporte.',
    description:
      'Atención dirigida a deportistas amateurs y competitivos para recuperar rendimiento, controlar carga y disminuir recaídas.',
    benefits: [
      'Retorno deportivo medible',
      'Prevención de recaídas',
      'Trabajo específico por disciplina'
    ],
    icon: 'bolt',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    tag: 'Performance'
  },
  {
    slug: 'terapia-manual',
    title: 'Terapia manual',
    shortDescription: 'Alivio de dolor y mejora de movilidad articular.',
    description:
      'Técnicas especializadas de movilización y liberación de tejidos para disminuir rigidez, mejorar función y preparar el movimiento.',
    benefits: [
      'Menos tensión muscular',
      'Mejor rango articular',
      'Sesiones combinadas con ejercicio'
    ],
    icon: 'hand',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Dolor'
  },
  {
    slug: 'ergonomia-laboral',
    title: 'Ergonomía laboral',
    shortDescription: 'Programas preventivos para equipos y empresas.',
    description:
      'Diseñamos acciones de ergonomía, pausas activas y seguimiento para disminuir molestias, fatiga y ausentismo.',
    benefits: [
      'Prevención para equipos',
      'Hábitos posturales mejores',
      'Acciones medibles para convenios'
    ],
    icon: 'briefcase',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tag: 'Empresas'
  }
];

export const doctors: DoctorItem[] = [
  {
    name: 'Dra. Andrea Flores',
    specialty: 'Fisioterapia musculoesquelética',
    bio: 'Especialista en dolor lumbar, rehabilitación ortopédica y educación del movimiento.',
    image: 'assets/images/team/andrea-flores.svg'
  },
  {
    name: 'Lic. Mauricio Rivas',
    specialty: 'Fisioterapia deportiva',
    bio: 'Enfoque en readaptación física, prevención de lesiones y retorno al deporte.',
    image: 'assets/images/team/mauricio-rivas.svg'
  },
  {
    name: 'Lic. Valeria Sánchez',
    specialty: 'Terapia manual y postura',
    bio: 'Experiencia en movilidad articular, liberación miofascial y ergonomía clínica.',
    image: 'assets/images/team/valeria-sanchez.svg'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    author: 'Mariana G.',
    role: 'Paciente postquirúrgica',
    quote: 'Recuperé movilidad con un plan claro y una atención muy profesional.'
  },
  {
    author: 'Jorge T.',
    role: 'Corredor amateur',
    quote: 'Volví a entrenar sin dolor y con mucha más confianza.'
  },
  {
    author: 'Equipo RH',
    role: 'Convenio empresarial',
    quote: 'Las acciones preventivas mejoraron el bienestar del equipo desde el primer mes.'
  }
];

export const faqs: FaqItem[] = [
  {
    question: '¿Necesito valoración antes de iniciar tratamiento?',
    answer: 'Sí. La primera cita incluye entrevista clínica y valoración funcional para definir el plan correcto.'
  },
  {
    question: '¿Puedo agendar en línea?',
    answer: 'Sí. Todos los botones de agendar te llevan al formulario de cita en la página de contacto.'
  },
  {
    question: '¿Atienden dolor de espalda y lesiones deportivas?',
    answer: 'Sí. Son dos de las consultas más frecuentes y se trabajan con terapia manual y ejercicio terapéutico.'
  },
  {
    question: '¿Ofrecen convenios empresariales?',
    answer: 'Sí. Diseñamos propuestas para prevención, ergonomía y bienestar ocupacional.'
  }
];

export const convenioBrands = [
  { name: 'VitalCorp', image: 'assets/images/brands/vitalcorp.svg' },
  { name: 'Nexo Salud', image: 'assets/images/brands/nexo-salud.svg' },
  { name: 'Biomek', image: 'assets/images/brands/biomek.svg' },
  { name: 'MoviLabs', image: 'assets/images/brands/movilabs.svg' },
  { name: 'Axis Care', image: 'assets/images/brands/axis-care.svg' },
  { name: 'Nova Industrial', image: 'assets/images/brands/nova-industrial.svg' }
] as const;
