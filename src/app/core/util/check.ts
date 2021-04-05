
export const IS_DEFINED = (_: any): boolean => typeof _ !== 'undefined'
export const IS_UNDEFINED = (_: any): boolean => typeof _ === 'undefined'
export const IS_NOT_DEFINED = (_: any): boolean => typeof _ === 'undefined'

export const IS_NULL = (_: any): boolean => _ === null
export const IS_NOT_NULL = (_: any): boolean => _ !== null

export const IS_SET = (_: any): boolean => (typeof _ !== 'undefined') && (_ !== null)
export const IS_UNSET = (_: any): boolean => (typeof _ === 'undefined') || (_ === null)
export const IS_NOT_SET = (_: any): boolean => (typeof _ === 'undefined') || (_ === null)

export const IS_A_STRING = (_: any): boolean => typeof _ === 'string'
export const IS_NOT_A_STRING = (_: any): boolean => typeof _ !== 'string'

export const IS_A_STRING_AND_NOT_EMPTY = (_: any): boolean => (typeof _ === 'string') && (_ !== '')
export const IS_A_STRING_AND_EMPTY = (_: any): boolean => (_ === '')

export const IS_A_NUMBER = (_: any): boolean => typeof _ === 'number'
export const IS_NOT_A_NUMBER = (_: any): boolean => typeof _ !== 'number'

export const IS_A_NUMBER_AND_EMPTY = (_: any): boolean => (typeof _ === 'number') && Number.isNaN(_)
export const IS_A_NUMBER_AND_NOT_EMPTY = (_: any): boolean => (typeof _ === 'number') && !Number.isNaN(_)

export const IS_AN_ARRAY = (_: any): boolean => Array.isArray(_)
export const IS_NOT_AN_ARRAY = (_: any): boolean => !Array.isArray(_)

export const IS_AN_ARRAY_AND_EMPTY = (_: any): boolean => Array.isArray(_) && ((_).slice(0, 1).length === 0)
export const IS_AN_ARRAY_AND_NOT_EMPTY = (_: any): boolean => Array.isArray(_) && ((_).slice(0, 1).length > 0)

export const IS_A_SET = (_: any): boolean => _ instanceof Set
export const IS_NOT_A_SET = (_: any): boolean => !(_ instanceof Set)

export const IS_A_MAP = (_: any): boolean => _ instanceof Map
export const IS_NOT_A_MAP = (_: any): boolean => !(_ instanceof Map)

export const IS_A_DATE = (_: any): boolean => _ instanceof Date
export const IS_NOT_A_DATE = (_: any): boolean => !(_ instanceof Date)

export const IS_A_BOOLEAN = (_: any): boolean => (_ === true) || (_ === false)
export const IS_NOT_A_BOOLEAN = (_: any): boolean => (_ !== true) && (_ !== false)

export const IS_NUMERIC = (_: any): boolean => (
  ((typeof _ === 'number') && !Number.isNaN(_)) ||
  ((typeof _ === 'string') && !Number.isNaN(Number.parseFloat(_)))
)

export const IS_OFF = (_: any): boolean => (
  (typeof _ === 'undefined') ||
  (_ === null) ||
  (_ === false) ||
  ((typeof _ === 'number') && ((_ === 0) || Number.isNaN(_))) ||
  (_ === '')
)

export const IS_ON = (_: any): boolean => !IS_OFF(_)
