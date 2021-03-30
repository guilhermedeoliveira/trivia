import { color, fontSize, space } from '../lib'

describe('color getter', () => {
  const props = {
    theme: {
      colors: {
        primary: '#ff0000',
        neutral: '#eeeeee',
      },
    },
  }

  it('should return a color from the theme given the color name', () => {
    expect(color('primary')(props)).toEqual('#ff0000')
    expect(color('neutral')(props)).toEqual('#eeeeee')
  })
})

describe('fontSize getter', () => {
  const props = {
    theme: {
      typographies: {
        sm: '0.875rem',
        base: '1rem',
      },
    },
  }

  it('should get font size from theme path', () => {
    expect(fontSize('sm')(props)).toEqual('0.875rem')
    expect(fontSize('base')(props)).toEqual('1rem')
  })
})

describe('space getter', () => {
  const props = {
    theme: {
      spaces: {
        0: '0',
        1: '0.25rem',
        56: '14rem',
        64: '16rem',
      },
    },
  }

  it('should get space from theme path', () => {
    expect(space('0')(props)).toEqual('0')
    expect(space('1')(props)).toEqual('0.25rem')
    expect(space('56')(props)).toEqual('14rem')
    expect(space('64')(props)).toEqual('16rem')
  })
})
