import { Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome"
import { CustomerLoginComponent } from './customer-login/customer-login';
import { OfficerLoginComponent } from './officer-login/officer-login';
import { CustomerHomepage } from './customer-homepage/customer-homepage';
import { CustomerBooking } from './customer-booking/customer-booking';
import { CustomerSupport } from './customer-support/customer-support';
import { CustomerTracking } from './customer-tracking/customer-tracking';
import { CustomerRegistration } from './customer-registration/customer-registration';
import { BookingHistory } from './booking-history/booking-history';
import { CustomerInvoice } from './customer-invoice/customer-invoice';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    {path:'customer-login', component:CustomerLoginComponent},
    {path:'officer-login', component:OfficerLoginComponent},
    {path:'customer-home',component:CustomerHomepage},
    {path:'customer-booking-service',component:CustomerBooking},
    {path:'customer-support',component:CustomerSupport},
    {path:'customer-tracking', component:CustomerTracking},
    {path:'customer-registration',component:CustomerRegistration},
    {path:'customer-booking-history',component:BookingHistory},
    {path:'customer-invoice',component:CustomerInvoice},
    { path: '**', redirectTo: '' }
];

