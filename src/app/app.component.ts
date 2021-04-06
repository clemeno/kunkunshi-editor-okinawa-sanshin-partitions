
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Flat, Sharp, Shita, Tap, Upward } from 'src/app/core/model/alteration'
import { Ai, Go, Hachi, Jo, Ko, Kyu, Naka, Otsu, Pause, Ro, Roku, Shaku, Shichi, Yon } from 'src/app/core/model/kunkunshi'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit, OnDestroy {
  bActive = false

  alteration =  {
    shita: new Shita(),
    flat: new Flat(),
    sharp: new Sharp(),
    tap: new Tap(),
    upward: new Upward()
  }

  pause = new Pause()

  note = {
    lowerLeftToRight: [ new Ko(), new Go(), new Roku(), new Shichi(), new Hachi(), new Kyu() ],
    middleLeftToRight: [ new Yon(), new Jo(), new Naka(), new Shaku() ],
    upperLeftToRight: [ new Ai(), new Otsu(), new Ro() ]
  }

  async ngOnInit(): Promise<void> {
    this.bActive = true
  }

  async ngOnDestroy(): Promise<void> {
    this.bActive = false
  }
}
