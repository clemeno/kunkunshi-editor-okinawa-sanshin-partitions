
import { Component, OnDestroy, OnInit } from '@angular/core'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit, OnDestroy {
  bActive = false

  // constructor() {}

  async ngOnInit(): Promise<void> {
    this.bActive = true
  }

  async ngOnDestroy(): Promise<void> {
    this.bActive = false
  }
}
