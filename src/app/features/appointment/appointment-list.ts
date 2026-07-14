import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList {

  searchInput = signal('');

  appointments = signal([
    {
      id: 1,
      patient: 'Ana Martínez',
      professional: 'Dr. Juan Pérez',
      specialty: 'Cardiología',
      date: '10/07/2026',
      time: '08:00 AM',
      status: 'Confirmada'
    },
    {
      id: 2,
      patient: 'Pedro Gómez',
      professional: 'Dra. María López',
      specialty: 'Neurología',
      date: '10/07/2026',
      time: '10:30 AM',
      status: 'Pendiente'
    },
    {
      id: 3,
      patient: 'Laura Rodríguez',
      professional: 'Dr. Carlos Ruiz',
      specialty: 'Pediatría',
      date: '11/07/2026',
      time: '09:00 AM',
      status: 'Finalizada'
    },
    {
      id: 4,
      patient: 'Mateo Torres',
      professional: 'Dr. Andrés Torres',
      specialty: 'Cirugía',
      date: '12/07/2026',
      time: '02:00 PM',
      status: 'Cancelada'
    },
    {
      id: 5,
      patient: 'Sofía Herrera',
      professional: 'Dra. Valentina Castro',
      specialty: 'Dermatología',
      date: '13/07/2026',
      time: '11:00 AM',
      status: 'Confirmada'
    }
  ]);

  filteredAppointments = computed(() =>
    this.appointments().filter(appointment =>
      `${appointment.patient} ${appointment.professional} ${appointment.specialty} ${appointment.status}`
        .toLowerCase()
        .includes(this.searchInput().toLowerCase())
    )
  );

}