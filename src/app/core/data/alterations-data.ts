import { Alteration } from 'src/app/core/model/alteration'

export const ALTERATIONS_DATA: Alteration[] = [
  { key: '下', romaji: ['shita'], position: 'before' },
  { key: '♭', romaji: ['flat'], position: 'after' },
  // { key: '♮', romaji: [ 'natural' ], position: 'after' },
  { key: '♯', romaji: ['sharp'], position: 'after' },
  { key: '`', romaji: ['tap'], position: 'after' },
  { key: '⌝', romaji: ['upward'], position: 'after' }
]
