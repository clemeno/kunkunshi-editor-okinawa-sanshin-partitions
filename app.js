
import { appData } from './app.data'
import { asadoyayuntaSong } from './asadoyayunta.song'
import { isNumeric } from './check'

new Vue( {
  el: '#app',
  data: appData,
  methods: {
    addColumn: function( { } ) {
      const column = []
      for ( let index = 0; index < this.rows; index += 1 ) {
        column.push( { content: [] } )
      }
      this.board.push( column )
    },
    import: function( songData ) {
      if ( isNumeric( songData.rows ) ) {
        this.rows = parseInt( songData.rows )
      }
      if ( isNumeric( songData.maxNotesPerCell ) ) {
        this.maxNotesPerCell = parseInt( songData.maxNotesPerCell )
      }
      if ( Array.isArray( songData.boardContents ) ) {
        this.board = []
        const nColumnsRequired = Math.ceil( songData.boardContents.length / this.rows )
        for ( let index = 0; index < nColumnsRequired; index += 1 ) {
          this.addColumn( this.rows )
        }
        const newBoard = [ ...this.board ]
        songData.boardContents.forEach( ( column, i ) => newBoard[ i ] = column )
        this.board = newBoard
      }
    }
  },
  selectInput: function( { column, cell, index } ) {
    this.inputSelected = cell[ index ]
  },
  created: function() {
    // init with asadoyayunta
    this.import( asadoyayuntaSong )
  }
} )
