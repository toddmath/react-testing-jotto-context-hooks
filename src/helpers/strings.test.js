import stringsModule from './strings'

const { getStringByLanguage } = stringsModule

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
}

describe('getStringByLanguage', () => {
  const mockWarn = jest.fn()
  const originalWarn = console.warn

  beforeEach(() => {
    console.warn = mockWarn
  })

  afterEach(() => {
    console.warn = originalWarn
  })

  test('returns correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings)
    expect(string).toBe('submit')
    expect(mockWarn).not.toHaveBeenCalled()
  })

  test('returns the correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings)
    expect(string).toBe('🚀')
    expect(mockWarn).not.toHaveBeenCalled()
  })

  describe('fallback logic', () => {
    // const mockWarn = jest.fn()
    // const originalWarn = console.warn

    // beforeEach(() => {
    //   console.warn = mockWarn
    // })

    // afterEach(() => {
    //   console.warn = originalWarn
    // })

    test('returns english string when language does not exist', () => {
      const string = getStringByLanguage('notALanguage', 'submit', strings)
      expect(string).toBe('submit')
      expect(mockWarn).toHaveBeenCalledWith(
        `Could not get string [submit] for [notALanguage]`
      )
    })

    test('returns english submit string when submit key does not exist for language', () => {
      const string = getStringByLanguage('mermish', 'submit', strings)
      expect(string).toBe('submit')
      expect(mockWarn).toHaveBeenCalledWith(
        `Could not get string [submit] for [mermish]`
      )
    })
  })
})
