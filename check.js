
export const isSet = v => ( null !== v ) && ( 'undefined' !== typeof v )

export const isNumeric = v => (
  ( ( 'number' === typeof v ) && ( 0 === v - v ) ) ||
  ( ( 'string' === typeof v ) && ( 0 === parseFloat( v ) - parseFloat( v ) ) )
)
