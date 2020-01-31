import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns correct count when there are no matching letters', () => {
    const letterMatchcount = getLetterMatchCount('bones', secretWord);

    expect(letterMatchcount).toBe(0);
  });

  test('returns correct count when 3 letters match', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);

    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);

    expect(letterMatchCount).toBe(3);
  });
});
