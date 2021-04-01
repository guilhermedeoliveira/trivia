import { normalizeQuizQuestions } from '.'

describe('normalizeQuizQuestions', () => {
  it('should return an empty array when data is empty', () => {
    const data = []
    const expected = []

    expect(normalizeQuizQuestions(data)).toEqual(expected)
  })

  it('should return the normalized data', () => {
    const data = [
      {
        category: 'History',
        correct_answer: 'False',
        difficulty: 'hard',
        incorrect_answers: ['True'],
        question: 'The Kingdom of Prussia briefly held land in Estonia.',
        type: 'boolean',
      },
      {
        category: 'Politics',
        correct_answer: 'True',
        difficulty: 'hard',
        incorrect_answers: ['False'],
        question: 'Joko Widodo has appeared in the cover of a TIME magazine.',
        type: 'boolean',
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        correct_answer: 'True',
        difficulty: 'hard',
        incorrect_answers: ['False'],
        question: 'Japan was part of the Allied Powers during World War I.',
        type: 'boolean',
      },
    ]

    const expected = [
      {
        category: 'History',
        difficulty: 'hard',
        incorrectAnswers: ['True'],
        question: 'The Kingdom of Prussia briefly held land in Estonia.',
      },
      {
        category: 'Politics',
        difficulty: 'hard',
        incorrectAnswers: ['False'],
        question: 'Joko Widodo has appeared in the cover of a TIME magazine.',
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        difficulty: 'hard',
        incorrectAnswers: ['False'],
        question: 'Japan was part of the Allied Powers during World War I.',
      },
    ]

    expect(normalizeQuizQuestions(data)).toEqual(expected)
  })
})
