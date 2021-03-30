import {
  normalizeQuizQuestions,
  isAnswerIncorrect,
  getTotalScore,
  generateScoreFeedback,
} from '.'

describe('normalizeQuizQuestions', () => {
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

describe('isAnswerIncorrect normalizer', () => {
  it('should check if the answer is correct', () => {
    const trueDataWrong = {
      category: 'politics',
      difficulty: 'hard',
      incorrectAnswers: ['True'],
      question: 'This is a mocked question',
      type: 'type',
      optionAnswered: 'false',
    }

    const trueDataRight = {
      category: 'politics',
      difficulty: 'hard',
      incorrectAnswers: ['True'],
      question: 'This is a mocked question',
      type: 'type',
      optionAnswered: 'true',
    }

    const falseDataWrong = {
      category: 'politics',
      difficulty: 'hard',
      incorrectAnswers: ['False'],
      question: 'This is a mocked question',
      type: 'type',
      optionAnswered: 'true',
    }

    const falseDataRight = {
      category: 'politics',
      difficulty: 'hard',
      incorrectAnswers: ['False'],
      question: 'This is a mocked question',
      type: 'type',
      optionAnswered: 'false',
    }

    expect(isAnswerIncorrect(trueDataWrong)).toEqual(false)
    expect(isAnswerIncorrect(trueDataRight)).toEqual(true)
    expect(isAnswerIncorrect(falseDataWrong)).toEqual(false)
    expect(isAnswerIncorrect(falseDataRight)).toEqual(true)
  })
})

describe('getTotalScore normalizer', () => {
  it('should get the total score', () => {
    const answers = [
      {
        category: 'History',
        correct_answer: 'False',
        difficulty: 'hard',
        incorrectAnswers: ['True'],
        optionAnswered: 'true',
        question: 'The Kingdom of Prussia briefly held land in Estonia.',
        type: 'boolean',
      },
      {
        category: 'Politics',
        correct_answer: 'True',
        difficulty: 'hard',
        incorrectAnswers: ['False'],
        optionAnswered: 'true',
        question: 'Joko Widodo has appeared in the cover of a TIME magazine.',
        type: 'boolean',
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        correct_answer: 'True',
        difficulty: 'hard',
        incorrectAnswers: ['False'],
        optionAnswered: 'true',
        question: 'Japan was part of the Allied Powers during World War I.',
        type: 'boolean',
      },
    ]

    expect(getTotalScore(answers)).toEqual(2)
  })
})

describe('generateScoreFeedback normalizer', () => {
  it('should generate the score feedback', () => {
    expect(generateScoreFeedback(0)).toEqual('Oh no, please try again!')
    expect(generateScoreFeedback(1)).toEqual('Oh no, please try again!')
    expect(generateScoreFeedback(2)).toEqual('Oh no, please try again!')
    expect(generateScoreFeedback(3)).toEqual('I know you can do it better!')
    expect(generateScoreFeedback(4)).toEqual('I know you can do it better!')
    expect(generateScoreFeedback(5)).toEqual('I know you can do it better!')
    expect(generateScoreFeedback(6)).toEqual('You did it really good!')
    expect(generateScoreFeedback(7)).toEqual('You did it really good!')
    expect(generateScoreFeedback(8)).toEqual('Awesome! You are outstanding!')
    expect(generateScoreFeedback(9)).toEqual('Awesome! You are outstanding!')
    expect(generateScoreFeedback(10)).toEqual('Awesome! You are outstanding!')
  })
})
