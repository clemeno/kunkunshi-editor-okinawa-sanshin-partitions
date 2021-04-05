
import { IS_AN_ARRAY, IS_AN_ARRAY_AND_EMPTY, IS_AN_ARRAY_AND_NOT_EMPTY, IS_A_BOOLEAN, IS_A_DATE, IS_A_MAP, IS_A_NUMBER, IS_A_NUMBER_AND_EMPTY, IS_A_NUMBER_AND_NOT_EMPTY, IS_A_SET, IS_A_STRING, IS_A_STRING_AND_EMPTY, IS_A_STRING_AND_NOT_EMPTY, IS_DEFINED, IS_NOT_A_BOOLEAN, IS_NOT_A_DATE, IS_NOT_A_MAP, IS_NOT_A_SET, IS_NOT_DEFINED, IS_NOT_NULL, IS_NOT_SET, IS_NULL, IS_NUMERIC, IS_OFF, IS_ON, IS_SET, IS_UNDEFINED, IS_UNSET } from 'src/app/core/util/check'

describe(
  'Check the src app core util check functions',
  () => {
    context(
      'defined or undefined or not defined',
      () => {
        it('null IS_DEFINED', () => { expect(IS_DEFINED(null)).to.be.true })
        it('null !IS_UNDEFINED', () => { expect(!IS_UNDEFINED(null)).to.be.true })
        it('null !IS_NOT_DEFINED', () => { expect(!IS_NOT_DEFINED(null)).to.be.true })

        it('undefined !IS_DEFINED', () => { expect(!IS_DEFINED(undefined)).to.be.true })
        it('undefined IS_UNDEFINED', () => { expect(IS_UNDEFINED(undefined)).to.be.true })
        it('undefined IS_NOT_DEFINED', () => { expect(IS_NOT_DEFINED(undefined)).to.be.true })
      }
    )

    context(
      'null or not null',
      () => {
        it('null IS_NULL', () => { expect(IS_NULL(null)).to.be.true })
        it('null !IS_NOT_NULL', () => { expect(!IS_NOT_NULL(null)).to.be.true })

        it('undefined !IS_NULL', () => { expect(!IS_NULL(undefined)).to.be.true })
        it('undefined IS_NOT_NULL', () => { expect(IS_NOT_NULL(undefined)).to.be.true })
      }
    )

    context(
      'set or unset or not set',
      () => {
        it('\'\' IS_SET', () => { expect(IS_SET('')).to.be.true })
        it('undefined !IS_SET', () => { expect(!IS_SET(undefined)).to.be.true })
        it('null !IS_SET', () => { expect(!IS_SET(null)).to.be.true })

        it('\'\' !IS_NOT_SET', () => { expect(!IS_UNSET('')).to.be.true })
        it('undefined IS_NOT_SET', () => { expect(IS_UNSET(undefined)).to.be.true })
        it('null IS_NOT_SET', () => { expect(IS_UNSET(null)).to.be.true })

        it('\'\' !IS_NOT_SET', () => { expect(!IS_NOT_SET('')).to.be.true })
        it('undefined IS_NOT_SET', () => { expect(IS_NOT_SET(undefined)).to.be.true })
        it('null IS_NOT_SET', () => { expect(IS_NOT_SET(null)).to.be.true })
      }
    )

    context(
      'string type',
      () => {
        it('\'\' IS_A_STRING', () => { expect(IS_A_STRING('')).to.be.true })

        it('undefined IS_A_STRING', () => { expect(!IS_A_STRING(undefined)).to.be.true })

        it('\'\' IS_A_STRING_AND_EMPTY', () => { expect(IS_A_STRING_AND_EMPTY('')).to.be.true })

        it('\'aze\' !IS_A_STRING_AND_EMPTY', () => { expect(!IS_A_STRING_AND_EMPTY('aze')).to.be.true })
        it('\'aze\' IS_A_STRING_AND_NOT_EMPTY', () => { expect(IS_A_STRING_AND_NOT_EMPTY('aze')).to.be.true })

        it('undefined !IS_A_STRING_AND_EMPTY', () => { expect(!IS_A_STRING_AND_EMPTY(undefined)).to.be.true })

        it('\'\' !IS_A_STRING_AND_NOT_EMPTY', () => { expect(!IS_A_STRING_AND_NOT_EMPTY('')).to.be.true })
        it('undefined !IS_A_STRING_AND_NOT_EMPTY', () => { expect(!IS_A_STRING_AND_NOT_EMPTY(undefined)).to.be.true })
      }
    )

    context(
      'numeric concept: Number.parseFloat will not return NaN',
      () => {
        it('4.2 IS_NUMERIC', () => { expect(IS_NUMERIC(4.2)).to.be.true })
        it('\'4.2\' IS_NUMERIC', () => { expect(IS_NUMERIC('4.2')).to.be.true })
        it('\'4.2aze\' IS_NUMERIC', () => { expect(IS_NUMERIC('4.2aze')).to.be.true })

        it('\'\' !IS_NUMERIC', () => { expect(!IS_NUMERIC('')).to.be.true })
        it('NaN !IS_NUMERIC §§§§§§§§§§', () => { expect(!IS_NUMERIC(NaN)).to.be.true })
        it('\'NaN\' !IS_NUMERIC', () => { expect(!IS_NUMERIC('NaN')).to.be.true })
        it('null !IS_NUMERIC', () => { expect(!IS_NUMERIC(null)).to.be.true })
        it('undefined !IS_NUMERIC', () => { expect(!IS_NUMERIC(undefined)).to.be.true })
        it('\'aze4.2\' !IS_NUMERIC', () => { expect(!IS_NUMERIC('aze4.2')).to.be.true })
        it('\'aze\' !IS_NUMERIC', () => { expect(!IS_NUMERIC('aze')).to.be.true })
      }
    )

    context(
      'number type',
      () => {
        it('4.2 IS_A_NUMBER', () => { expect(IS_A_NUMBER(4.2)).to.be.true })
        it('NaN IS_A_NUMBER §§§§§§§§§§', () => { expect(IS_A_NUMBER(NaN)).to.be.true })

        it('\'4.2\' !IS_A_NUMBER', () => { expect(!IS_A_NUMBER('4.2')).to.be.true })
        it('\'4.2aze\' !IS_A_NUMBER', () => { expect(!IS_A_NUMBER('4.2aze')).to.be.true })
        it('\'\' !IS_A_NUMBER', () => { expect(!IS_A_NUMBER('')).to.be.true })
        it('\'NaN\' !IS_NUMERIC', () => { expect(!IS_A_NUMBER('NaN')).to.be.true })
        it('null !IS_A_NUMBER', () => { expect(!IS_A_NUMBER(null)).to.be.true })
        it('undefined !IS_A_NUMBER', () => { expect(!IS_A_NUMBER(undefined)).to.be.true })
        it('\'aze4.2\' !IS_A_NUMBER', () => { expect(!IS_A_NUMBER('aze4.2')).to.be.true })
        it('\'aze\' !IS_A_NUMBER', () => { expect(!IS_A_NUMBER('aze')).to.be.true })

        it('4.2 IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(IS_A_NUMBER_AND_NOT_EMPTY(4.2)).to.be.true })
        it('NaN !IS_A_NUMBER_AND_NOT_EMPTY §§§§§§§§§§', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY(NaN)).to.be.true })

        it('\'4.2\' !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY('4.2')).to.be.true })
        it('\'4.2aze\' !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY('4.2aze')).to.be.true })
        it('\'\' !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY('')).to.be.true })
        it('null !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY(null)).to.be.true })
        it('undefined !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY(undefined)).to.be.true })
        it('\'aze4.2\' !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY('aze4.2')).to.be.true })
        it('\'aze\' !IS_A_NUMBER_AND_NOT_EMPTY', () => { expect(!IS_A_NUMBER_AND_NOT_EMPTY('aze')).to.be.true })

        it('NaN IS_A_NUMBER_AND_EMPTY §§§§§§§§§§', () => { expect(IS_A_NUMBER_AND_EMPTY(NaN)).to.be.true })
        it('4.2 !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY(4.2)).to.be.true })

        it('\'4.2\' !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY('4.2')).to.be.true })
        it('\'4.2aze\' !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY('4.2aze')).to.be.true })
        it('\'\' !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY('')).to.be.true })
        it('null !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY(null)).to.be.true })
        it('undefined !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY(undefined)).to.be.true })
        it('\'aze4.2\' !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY('aze4.2')).to.be.true })
        it('\'aze\' !IS_A_NUMBER_AND_EMPTY', () => { expect(!IS_A_NUMBER_AND_EMPTY('aze')).to.be.true })
      }
    )

    context(
      'Array',
      () => {
        it('[] IS_AN_ARRAY §§§§§§§§§§', () => { expect(IS_AN_ARRAY([])).to.be.true })
        it('[0,1,2] IS_AN_ARRAY §§§§§§§§§§', () => { expect(IS_AN_ARRAY([0, 1, 2])).to.be.true })
        it('\'aze\'.split(\'\') IS_AN_ARRAY §§§§§§§§§§', () => { expect(IS_AN_ARRAY('aze'.split(''))).to.be.true })

        it('\'aze\' !IS_AN_ARRAY', () => { expect(!IS_AN_ARRAY('aze')).to.be.true })
        it('{} !IS_AN_ARRAY', () => { expect(!IS_AN_ARRAY({})).to.be.true })
        it('undefined !IS_AN_ARRAY', () => { expect(!IS_AN_ARRAY(undefined)).to.be.true })
        it('null !IS_AN_ARRAY', () => { expect(!IS_AN_ARRAY(null)).to.be.true })

        it('[0,1,2] IS_AN_ARRAY_AND_NOT_EMPTY §§§§§§§§§§', () => { expect(IS_AN_ARRAY_AND_NOT_EMPTY([0, 1, 2])).to.be.true })
        it(
          '\'aze\'.split(\'\') IS_AN_ARRAY_AND_NOT_EMPTY §§§§§§§§§§',
          () => { expect(IS_AN_ARRAY_AND_NOT_EMPTY('aze'.split(''))).to.be.true }
        )

        it('[] !IS_AN_ARRAY_AND_NOT_EMPTY §§§§§§§§§§', () => { expect(!IS_AN_ARRAY_AND_NOT_EMPTY([])).to.be.true })
        it('\'aze\' !IS_AN_ARRAY_AND_NOT_EMPTY', () => { expect(!IS_AN_ARRAY_AND_NOT_EMPTY('aze')).to.be.true })
        it('{} !IS_AN_ARRAY_AND_NOT_EMPTY', () => { expect(!IS_AN_ARRAY_AND_NOT_EMPTY({})).to.be.true })
        it('undefined !IS_AN_ARRAY_AND_NOT_EMPTY', () => { expect(!IS_AN_ARRAY_AND_NOT_EMPTY(undefined)).to.be.true })
        it('null !IS_AN_ARRAY_AND_NOT_EMPTY', () => { expect(!IS_AN_ARRAY_AND_NOT_EMPTY(null)).to.be.true })

        it('[] IS_AN_ARRAY_AND_EMPTY §§§§§§§§§§', () => { expect(IS_AN_ARRAY_AND_EMPTY([])).to.be.true })

        it('[0,1,2] IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY([0, 1, 2])).to.be.true })
        it('\'aze\'.split(\'\') IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY('aze'.split(''))).to.be.true })
        it('\'aze\' !IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY('aze')).to.be.true })
        it('{} !IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY({})).to.be.true })
        it('undefined !IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY(undefined)).to.be.true })
        it('null !IS_AN_ARRAY_AND_EMPTY', () => { expect(!IS_AN_ARRAY_AND_EMPTY(null)).to.be.true })
      }
    )

    context(
      'Set',
      () => {
        it('Set IS_A_SET', () => { expect(IS_A_SET(new Set())).to.be.true })
        it('[] !IS_A_SET', () => { expect(!IS_A_SET([])).to.be.true })
        it('Map !IS_A_SET', () => { expect(!IS_A_SET(new Map())).to.be.true })

        it('Set !IS_NOT_A_SET', () => { expect(!IS_NOT_A_SET(new Set())).to.be.true })
        it('[] IS_NOT_A_SET', () => { expect(IS_NOT_A_SET([])).to.be.true })
        it('Map IS_NOT_A_SET', () => { expect(IS_NOT_A_SET(new Map())).to.be.true })
      }
    )

    context(
      'Map',
      () => {
        it('Set !IS_A_MAP', () => { expect(!IS_A_MAP(new Set())).to.be.true })
        it('[] !IS_A_MAP', () => { expect(!IS_A_MAP([])).to.be.true })
        it('Map IS_A_MAP', () => { expect(IS_A_MAP(new Map())).to.be.true })

        it('Set IS_NOT_A_MAP', () => { expect(IS_NOT_A_MAP(new Set())).to.be.true })
        it('[] IS_NOT_A_MAP', () => { expect(IS_NOT_A_MAP([])).to.be.true })
        it('Map !IS_NOT_A_MAP', () => { expect(!IS_NOT_A_MAP(new Map())).to.be.true })
      }
    )

    context(
      'Date',
      () => {
        it('Date IS_A_DATE', () => { expect(IS_A_DATE(new Date())).to.be.true })
        it('{} !IS_A_DATE', () => { expect(!IS_A_DATE({})).to.be.true })
        it('null !IS_A_DATE', () => { expect(!IS_A_DATE(null)).to.be.true })

        it('Date !IS_NOT_A_DATEDATE', () => { expect(!IS_NOT_A_DATE(new Date())).to.be.true })
        it('{} IS_NOT_A_DATEDATE', () => { expect(IS_NOT_A_DATE({})).to.be.true })
        it('null IS_NOT_A_DATEDATE', () => { expect(IS_NOT_A_DATE(null)).to.be.true })
      }
    )

    context(
      'boolean type',
      () => {
        it('true IS_A_BOOLEAN', () => { expect(IS_A_BOOLEAN(true)).to.be.true })
        it('false IS_A_BOOLEAN', () => { expect(IS_A_BOOLEAN(false)).to.be.true })

        it('true !IS_NOT_A_BOOLEAN', () => { expect(!IS_NOT_A_BOOLEAN(true)).to.be.true })
        it('false !IS_NOT_A_BOOLEAN', () => { expect(!IS_NOT_A_BOOLEAN(false)).to.be.true })
      }
    )

    context(
      'on / off helper',
      () => {
        it('false IS_OFF', () => { expect(IS_OFF(false)).to.be.true })
        it('undefined IS_OFF', () => { expect(IS_OFF(undefined)).to.be.true })
        it('null IS_OFF', () => { expect(IS_OFF(null)).to.be.true })
        it('0 IS_OFF', () => { expect(IS_OFF(0)).to.be.true })
        it('NaN IS_OFF', () => { expect(IS_OFF(NaN)).to.be.true })
        it('\'\' IS_OFF', () => { expect(IS_OFF('')).to.be.true })

        it('true !IS_OFF', () => { expect(!IS_OFF(true)).to.be.true })
        it('[] !IS_OFF', () => { expect(!IS_OFF([])).to.be.true })
        it('{} !IS_OFF', () => { expect(!IS_OFF({})).to.be.true })
        it('-4.2 !IS_OFF', () => { expect(!IS_OFF(-4.2)).to.be.true })
        it('4.2 !IS_OFF', () => { expect(!IS_OFF(4.2)).to.be.true })
        it('\'aze\' !IS_OFF', () => { expect(!IS_OFF('aze')).to.be.true })

        it('false !IS_ON', () => { expect(!IS_ON(false)).to.be.true })
        it('undefined !IS_ON', () => { expect(!IS_ON(undefined)).to.be.true })
        it('null !IS_ON', () => { expect(!IS_ON(null)).to.be.true })
        it('0 !IS_ON', () => { expect(!IS_ON(0)).to.be.true })
        it('NaN !IS_ON', () => { expect(!IS_ON(NaN)).to.be.true })
        it('\'\' !IS_ON', () => { expect(!IS_ON('')).to.be.true })

        it('true IS_ON', () => { expect(IS_ON(true)).to.be.true })
        it('[] IS_ON', () => { expect(IS_ON([])).to.be.true })
        it('{} IS_ON', () => { expect(IS_ON({})).to.be.true })
        it('-4.2 IS_ON', () => { expect(IS_ON(-4.2)).to.be.true })
        it('4.2 IS_ON', () => { expect(IS_ON(4.2)).to.be.true })
        it('\'aze\' IS_ON', () => { expect(IS_ON('aze')).to.be.true })
      }
    )
  }
)
