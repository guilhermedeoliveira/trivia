import { pathOr } from 'ramda'

import colors from './colors'
import typographies from './typographies'
import spaces from './spaces'

export const color = (color: keyof typeof colors) =>
  pathOr('black', ['theme', 'colors', color])

export const fontSize = (size: keyof typeof typographies) =>
  pathOr(typographies.base, ['theme', 'typographies', size])

export const space = (space: keyof typeof spaces) =>
  pathOr('0', ['theme', 'spaces', space])
