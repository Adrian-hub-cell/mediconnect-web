import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  imports: [],
  templateUrl: './doctor-detail.html',
  styleUrl: './doctor-detail.css'
})
export class DoctorDetail {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  doctorId = Number(this.route.snapshot.paramMap.get('id'));


  doctors = [
    {
      id: 1,
      name: 'Juan Pérez',
      specialty: 'Cardiología',
      area: 'Cardiovascular',
      experience: 10,
      role: 'Cardiólogo',
      description:
        'Especialista en enfermedades del corazón y sistema cardiovascular. Cuenta con amplia experiencia en prevención y tratamiento cardíaco.',
      schedule: 'Lunes a Viernes - 8:00 AM a 4:00 PM',
      office: 'Consultorio 204'
    },
    {
      id: 2,
      name: 'María López',
      specialty: 'Neurología',
      area: 'Sistema Nervioso',
      experience: 7,
      role: 'Neuróloga',
      description:
        'Especialista en diagnóstico y tratamiento de enfermedades neurológicas.',
      schedule: 'Martes a Sábado - 9:00 AM a 5:00 PM',
      office: 'Consultorio 105'
    },
    {
      id: 3,
      name: 'Carlos Ruiz',
      specialty: 'Pediatría',
      area: 'Atención Infantil',
      experience: 5,
      role: 'Pediatra',
      description:
        'Profesional dedicado al cuidado médico de niños y adolescentes.',
      schedule: 'Lunes a Viernes - 7:00 AM a 3:00 PM',
      office: 'Consultorio 302'
    },
    {
      id: 4,
      name: 'Laura Gómez',
      specialty: 'Enfermería',
      area: 'Cuidados Generales',
      experience: 8,
      role: 'Enfermera Profesional',
      description:
        'Encargada de brindar atención integral y acompañamiento al paciente.',
      schedule: 'Turnos rotativos',
      office: 'Área de Enfermería'
    },
    {
      id: 5,
      name: 'Andrés Torres',
      specialty: 'Cirugía',
      area: 'Área Quirúrgica',
      experience: 12,
      role: 'Cirujano',
      description:
        'Especialista en procedimientos quirúrgicos y atención pre y post operatoria.',
      schedule: 'Lunes a Viernes - 10:00 AM a 6:00 PM',
      office: 'Consultorio 410'
    }
  ];


  doctor = computed(() =>
    this.doctors.find(
      doctor => doctor.id === this.doctorId
    )
  );


  goBack() {
    this.router.navigate(['/doctors']);
  }


  scheduleAppointment() {
    this.router.navigate(['/appointments']);
  }

}