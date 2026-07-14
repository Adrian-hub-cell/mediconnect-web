import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'doctors',
    pathMatch: 'full'
  },

  {
    path: 'doctors',
    loadComponent: () =>
      import('./features/doctors/doctor-list/doctor-list')
        .then(m => m.DoctorList)
  },

  {
    path: 'doctor/:id',
    loadComponent: () =>
      import('./features/doctors/doctor-detail/doctor-detail')
        .then(m => m.DoctorDetail)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/doctor-register/doctor-register')
        .then(m => m.DoctorRegister)
  },

  {
    path: 'patients',
    loadComponent: () =>
      import('./features/patient/patient-list')
        .then(m => m.PatientList)
  },

  {
    path: 'appointments',
    loadComponent: () =>
      import('./features/appointment/appointment-list')
        .then(m => m.AppointmentList)
  },

  {
    path: '**',
    redirectTo: 'doctors'
  }

];