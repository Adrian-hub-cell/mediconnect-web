import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  imports: [],
  templateUrl: './doctor-list.html',
  styleUrl: './doctor-list.css'
})
export class DoctorList {

  private router = inject(Router);

  searchInput = signal('');

  doctors = signal([
    {
      id: 1,
      name: 'Juan Pérez',
      specialty: 'Cardiología',
      area: 'Cardiovascular',
      experience: 10,
      role: 'Cardiólogo'
    },
    {
      id: 2,
      name: 'María López',
      specialty: 'Neurología',
      area: 'Sistema Nervioso',
      experience: 7,
      role: 'Neuróloga'
    },
    {
      id: 3,
      name: 'Carlos Ruiz',
      specialty: 'Pediatría',
      area: 'Atención Infantil',
      experience: 5,
      role: 'Pediatra'
    },
    {
      id: 4,
      name: 'Laura Gómez',
      specialty: 'Enfermería',
      area: 'Cuidados Generales',
      experience: 8,
      role: 'Enfermera Profesional'
    },
    {
      id: 5,
      name: 'Andrés Torres',
      specialty: 'Cirugía',
      area: 'Área Quirúrgica',
      experience: 12,
      role: 'Cirujano'
    },
    {
      id: 6,
      name: 'Sofía Martínez',
      specialty: 'Radiología',
      area: 'Diagnóstico por Imagen',
      experience: 6,
      role: 'Radióloga'
    },
    {
      id: 7,
      name: 'Diego Ramírez',
      specialty: 'Medicina General',
      area: 'Atención Primaria',
      experience: 9,
      role: 'Médico General'
    },
    {
      id: 8,
      name: 'Valentina Castro',
      specialty: 'Dermatología',
      area: 'Piel y Tratamientos Estéticos',
      experience: 8,
      role: 'Dermatóloga'
    },
    {
      id: 9,
      name: 'Sebastián Moreno',
      specialty: 'Traumatología',
      area: 'Huesos y Articulaciones',
      experience: 11,
      role: 'Traumatólogo'
    },
    {
      id: 10,
      name: 'Camila Vargas',
      specialty: 'Psicología',
      area: 'Salud Mental',
      experience: 6,
      role: 'Psicóloga'
    },
    {
      id: 11,
      name: 'Felipe Herrera',
      specialty: 'Odontología',
      area: 'Salud Dental',
      experience: 10,
      role: 'Odontólogo'
    },
    {
      id: 12,
      name: 'Natalia Rojas',
      specialty: 'Ginecología',
      area: 'Salud Femenina',
      experience: 9,
      role: 'Ginecóloga'
    }
  ]);

  filteredDoctors = computed(() =>
    this.doctors().filter(doctor =>
      `${doctor.name} ${doctor.specialty} ${doctor.role} ${doctor.area}`
        .toLowerCase()
        .includes(this.searchInput().toLowerCase())
    )
  );


  goToDetail(id: number) {
    this.router.navigate(['/doctor', id]);
  }

}