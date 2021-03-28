import { color, fontSize, space } from '../lib'

describe('color getter', () => {
  const props = {
    theme: {
      colors: {
        red: '#ff0000',
        blue: '#0000ff',
      },
    },
  }

  it('should return a color from the theme given the color name', () => {
    expect(color('red')(props)).toEqual('#ff0000')
    expect(color('blue')(props)).toEqual('#0000ff')
  })

  it('should return default color when asked color is absent from the theme', () => {
    expect(color('green')(props)).toEqual('black')
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
    expect(fontSize('sm')(props)).toEqual('10px')
    expect(fontSize('base')(props)).toEqual('1rem')
  })

  it('should return default value if provided size does not exist', () => {
    expect(fontSize('huge')(props)).toEqual('1rem')
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

  it('should return 0 if provided space does not exist', () => {
    expect(space('15')(props)).toEqual('0')
  })
})
