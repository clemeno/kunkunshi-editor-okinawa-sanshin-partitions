import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from 'src/app/material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule
]

const rootComponents = [
  AppComponent
]

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...rootComponents
  ],
  bootstrap: [
    ...rootComponents
  ]
})
export class AppModule { }
