import { pathOr } from 'ramda'

import colors from './colors'

export const color = (color: keyof typeof colors) =>
  pathOr('black', ['theme', 'colors', color])
