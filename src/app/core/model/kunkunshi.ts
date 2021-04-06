import { KUNKUNSHI_DATA } from 'src/app/core/data/kunkunshi-data'

// notes
export class Kunkunshi {
  key!: string
  romaji!: string[]
  position!: string
  finger!: string

  constructor( key: string ) {
    const kks = KUNKUNSHI_DATA.find( kks_ => kks_.key === key )
    this.key = kks?.key ?? ''
    this.romaji = kks?.romaji ?? []
    this.position = kks?.position ?? ''
    this.finger = kks?.finger ?? ''
  }
}

// pause

export class Pause extends Kunkunshi {
  constructor() {
    super( '〇' )
  }
}

// lower string left to right

export class Ko extends Kunkunshi {
  constructor() {
    super( '工' )
  }
}

export class Go extends Kunkunshi {
  constructor() {
    super( '五' )
  }
}

export class Roku extends Kunkunshi {
  constructor() {
    super( '六' )
  }
}

export class Shichi extends Kunkunshi {
  constructor() {
    super( '七' )
  }
}

export class Hachi extends Kunkunshi {
  constructor() {
    super( '八' )
  }
}

export class Kyu extends Kunkunshi {
  constructor() {
    super( '九' )
  }
}

// middle string left to right

export class Yon extends Kunkunshi {
  constructor() {
    super( '四' )
  }
}

export class Jo extends Kunkunshi {
  constructor() {
    super( '上' )
  }
}

export class Naka extends Kunkunshi {
  constructor() {
    super( '中' )
  }
}

export class Shaku extends Kunkunshi {
  constructor() {
    super( '尺' )
  }
}

// upper string left to right

export class Ai extends Kunkunshi {
  constructor() {
    super( '合' )
  }
}

export class Otsu extends Kunkunshi {
  constructor() {
    super( '乙' )
  }
}

export class Ro extends Kunkunshi {
  constructor() {
    super( '老' )
  }
}
