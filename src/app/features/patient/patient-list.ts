import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientList {

  searchInput = signal('');


  patients = signal([
    {
      id: 1,
      name: 'Ana Martínez',
      age: 32,
      document: '1002456789',
      eps: 'Sura',
      phone: '3004567890',
      bloodType: 'O+',
      condition: 'Hipertensión controlada'
    },
    {
      id: 2,
      name: 'Pedro Gómez',
      age: 45,
      document: '1023567890',
      eps: 'Nueva EPS',
      phone: '3015678901',
      bloodType: 'A+',
      condition: 'Control general'
    },
    {
      id: 3,
      name: 'Laura Rodríguez',
      age: 27,
      document: '1034678901',
      eps: 'Sanitas',
      phone: '3026789012',
      bloodType: 'B+',
      condition: 'Seguimiento médico'
    },
    {
      id: 4,
      name: 'Mateo Torres',
      age: 8,
      document: '1045789012',
      eps: 'Coosalud',
      phone: '3037890123',
      bloodType: 'AB+',
      condition: 'Control pediátrico'
    },
    {
      id: 5,
      name: 'Sofía Herrera',
      age: 60,
      document: '1056890123',
      eps: 'Comfama',
      phone: '3048901234',
      bloodType: 'O-',
      condition: 'Chequeo preventivo'
    }
  ]);



  filteredPatients = computed(() =>
    this.patients().filter(patient =>
      `${patient.name} ${patient.document} ${patient.eps}`
        .toLowerCase()
        .includes(
          this.searchInput().toLowerCase()
        )
    )
  );

}