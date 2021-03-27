import { normalizeQuizQuestions } from '.'

describe('normalize quiz data', () => {
  it('should return empty array when data is empty', () => {
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
        question:
          'The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.',
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
        question:
          'The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.',
      },
    ]

    expect(normalizeQuizQuestions(data)).toEqual(expected)
  })
})
