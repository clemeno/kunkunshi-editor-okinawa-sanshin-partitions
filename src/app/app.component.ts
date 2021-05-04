
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Flat, Sharp, Shita, Tap, Upward } from 'src/app/core/model/alteration'
import { Ai, Go, Hachi, Jo, Ko, Kyu, Naka, Otsu, Pause, Ro, Roku, Shaku, Shichi, Yon } from 'src/app/core/model/kunkunshi'
import { IS_SET } from 'src/app/core/util/check'

interface Option {
  value: any
  label: string
  bDisabled?: boolean
  bEnabled?: boolean
  [a: string]: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  bActive = false

  alteration = {
    shita: new Shita(),
    flat: new Flat(),
    sharp: new Sharp(),
    tap: new Tap(),
    upward: new Upward()
  }

  pause = new Pause()

  note = {
    lowerLeftToRight: [new Ko(), new Go(), new Roku(), new Shichi(), new Hachi(), new Kyu()],
    middleLeftToRight: [new Yon(), new Jo(), new Naka(), new Shaku()],
    upperLeftToRight: [new Ai(), new Otsu(), new Ro()]
  }

  settingsFormGroup = new FormGroup({})

  settingsFormGroupControls: { [a: string]: any[] } = {
    height: [12, []]
  }

  heigthSelector: Option[] = [
    { value: 12, label: '12' },
    { value: 16, label: '16' }
  ]

  musicSheetFormGroup = new FormGroup({})

  musicSheetNextCellId = 0

  musicSheetState: any[] = []

  constructor () {
    // initial settings
    Object.entries(this.settingsFormGroupControls).forEach(([k, v]) => {
      this.settingsFormGroup.addControl(k, new FormControl(v[0], v[1]))
    })
    // initial cell
    this.addCellToTheEnd()
  }

  async ngOnInit (): Promise<void> {
    this.bActive = true
  }

  addCellToTheEnd (notes?: any[]): void {
    const cellIndexes = [0, 1, 2, 3]

    const key = this.musicSheetNextCellId.toString()

    const ka = `${key}_a`
    const kb = `${key}_b`
    const kc = `${key}_c`
    const kd = `${key}_d`

    const value: any[] = [undefined, new Pause(), undefined, undefined]

    if (IS_SET(notes)) {
      const noteList: any[] = notes ?? []
      cellIndexes.forEach(i => {
        if (IS_SET(noteList[i])) {
          value[i] = noteList[i]
        }
      })
    }

    const va = value[0]
    const vb = value[1]
    const vc = value[2]
    const vd = value[3]

    this.musicSheetState.push({ key, ka, va, kb, vb, kc, vc, kd, vd })

    this.musicSheetFormGroup.addControl(ka, new FormControl(va))
    this.musicSheetFormGroup.addControl(kb, new FormControl(vb))
    this.musicSheetFormGroup.addControl(kc, new FormControl(vc))
    this.musicSheetFormGroup.addControl(kd, new FormControl(vd))

    this.musicSheetNextCellId += 1
  }

  async ngOnDestroy (): Promise<void> {
    this.bActive = false
  }
}
