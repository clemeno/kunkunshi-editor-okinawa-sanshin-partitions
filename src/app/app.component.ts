
import { Component, OnDestroy, OnInit } from '@angular/core'
import { KUNKUNSHI_DATA } from 'src/app/core/data/kunkunshi-data'
import { Kunkunshi } from 'src/app/core/model/kunkunshi'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  bActive = false

  kksList: Kunkunshi[] = []

  // constructor() {}

  async ngOnInit (): Promise<void> {
    this.bActive = true

    this.kksList = KUNKUNSHI_DATA
  }

  async ngOnDestroy (): Promise<void> {
    this.bActive = false
  }
}
