import { Routes } from '@angular/router';
import { HomeComponent } from './details/home/home.component';
import { DepartmentComponent } from './details/department/department.component';
import { ContactComponent } from './details/contact/contact.component';
import { CloudComponent } from './details/cloud/cloud.component';
import { DataComponent } from './details/data/data.component';
import { MobilityComponent } from './details/mobility/mobility.component';
import { AerospaceComponent } from './details/aerospace/aerospace.component';
import { LocomotiveComponent } from './details/locomotive/locomotive.component';
import { BfsComponent } from './details/bfs/bfs.component';
import { InsurenceComponent } from './details/insurence/insurence.component';
import { Component } from '@angular/core';
import { IndustryComponent } from './details/industry/industry.component';
import { CyberComponent } from './details/cyber/cyber.component';
import { HealthcareComponent } from './details/healthcare/healthcare.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'department',component:DepartmentComponent},
    {path:'contact',component:ContactComponent},
    {path:'cloud',component:CloudComponent},
    {path:'data',component:DataComponent}
];
