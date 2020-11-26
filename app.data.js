
export const appData = {
  pause: [
    { key: '〇' }
  ],
  notes: {
    top: [
      { key: '合', romaji: [ 'AI' ] },
      { key: '乙', romaji: [ 'OTSU' ] },
      { key: '老', romaji: [ 'ROO' ] },
    ],
    middle: [
      { key: '四', romaji: [ 'YON', 'SHI' ] },
      { key: '上', romaji: [ 'JOO', 'HUE' ] },
      { key: '中', romaji: [ 'NAKA', 'CHUU' ] },
      { key: '尺', romaji: [ 'SHAKU' ] },
    ],
    bottom: [
      { key: '工', romaji: [ 'KO' ] },
      { key: '五', romaji: [ 'GO' ] },
      { key: '六', romaji: [ 'ROKU' ] },
      { key: '七', romaji: [ 'SHICHI' ] },
      { key: '八', romaji: [ 'HACHI' ] },
      { key: '九', romaji: [ 'KYU' ] }
    ]
  },
  alterations: [
    { key: '下', position: 'left', romaji: [ 'SHITA' ] },
    { key: '♭', position: 'right', romaji: [ 'FLAT' ] },
    // { key: '♮', position: 'right', romaji: 'NATURAL' },
    { key: '♯', position: 'right', romaji: [ 'SHARP' ] },
    { key: '`', position: 'right', romaji: [ 'TAP' ] },
    { key: '⌝', position: 'right', romaji: [ 'UPWARD' ] },
  ],
  rows: 12,
  maxNotesPerCell: 1,
  board: [],
  inputSelected: null
}
