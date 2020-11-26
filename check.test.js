
// unit testing the whole check.js lib
import * as check from './check.js'

const DATA = {
  _undefined: undefined,
  _null: null,
  _nan: NaN,
  _0: 0,
  _1: 1,
  _m2_1: -2.1,
  _m7_5: -7.5,
  _8_9: 8.9,
  _31: 31,
  _42: 42,
  _stringEmpty: '',
  _stringNotEmpty: 'Lorem 老 #1 & ipsum 🤔 42 € _ est-is?',
  _stringNaN: 'NaN',
  _string666: '666',
  _stringM1492: '-1492',
  _stringM15_6854: '-15.6854',
  _string51_699: '15.699'
}

const PROCESS = {
  isSet: {
    _undefined: false,
    _null: false,
    _nan: true,
    _0: true,
    _1: true,
    _m2_1: true,
    _m7_5: true,
    _8_9: true,
    _31: true,
    _42: true,
    _stringEmpty: true,
    _stringNotEmpty: true,
    _stringNaN: true,
    _string666: true,
    _stringM1492: true,
    _stringM15_6854: true,
    _string51_699: true
  },
  isNumeric: {
    _undefined: false,
    _null: false,
    _nan: false, // note that NaN MUST NOT be considered as "numeric" which is another difference from the "number" type (typeof NaN)
    _0: true,
    _1: true,
    _m2_1: true,
    _m7_5: true,
    _8_9: true,
    _31: true,
    _42: true,
    _stringEmpty: false,
    _stringNotEmpty: false,
    _stringNaN: false, // parsed from 'NaN' to NaN
    _string666: true,
    _stringM1492: true,
    _stringM15_6854: true,
    _string51_699: true
  }
}

const ERROR_LIST = []
let TEST_COUNT = 0

Object.entries( PROCESS ).forEach( ( [ functionName, expectedResults ] ) => {
  Object.entries( expectedResults ).forEach( ( [ dataKey, expectedResult ] ) => {
    const result = check[ functionName ]( DATA[ dataKey ] )
    // console.log( `check.${functionName}( DATA.${dataKey} = ${DATA[ dataKey ]} ) -> ${result}` )
    if ( result !== expectedResult ) {
      ERROR_LIST.push( `${TEST_COUNT}: check.${functionName}( DATA.${dataKey} ) -> expected ${expectedResult}, got ${result}` )
    }
    TEST_COUNT += 1
  } )
} )

if ( 0 < ERROR_LIST.length ) {
  console.error( { result: 'Fail', TEST_COUNT, ERROR_LIST } )
} else {
  console.log( { result: 'Success', TEST_COUNT } )
}

// deno run this script so that we can directly "import" the functions to test from our modern javascript custom-made stuff
// exit with error code 1 if any test fail
if ( check.isSet( Deno ) ) {
  Deno.exit( 1 )
}
