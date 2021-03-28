import { color } from '../lib'

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
