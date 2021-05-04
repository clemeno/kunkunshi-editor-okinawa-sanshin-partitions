import { ALTERATIONS_DATA } from 'src/app/core/data/alterations-data'

// alterations
export class Alteration {
  key!: string
  romaji!: string[]
  position!: string

  constructor (key: string) {
    const alt = ALTERATIONS_DATA.find(alt_ => alt_.key === key)
    this.key = alt?.key ?? ''
    this.romaji = alt?.romaji ?? []
    this.position = alt?.position ?? ''
  }
}

// prefix

export class Shita extends Alteration {
  constructor () {
    super('下')
  }
}

// postfix

export class Flat extends Alteration {
  constructor () {
    super('♭')
  }
}

export class Sharp extends Alteration {
  constructor () {
    super('♯')
  }
}

export class Tap extends Alteration {
  constructor () {
    super('`')
  }
}

export class Upward extends Alteration {
  constructor () {
    super('⌝')
  }
}
