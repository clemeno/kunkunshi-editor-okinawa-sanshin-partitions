import { Alteration } from 'src/app/core/model/alteration'

export const ALTERATIONS_DATA: Alteration[] = [
  { key: '下', romaji: ['Shita'], position: 'before' },
  { key: '♭', romaji: ['Flat'], position: 'after' },
  // { key: '♮', romaji: [ 'Natural' ], position: 'after' },
  { key: '♯', romaji: ['Sharp'], position: 'after' },
  { key: '`', romaji: ['Tap'], position: 'after' },
  { key: '⌝', romaji: ['Upward'], position: 'after' }
]
