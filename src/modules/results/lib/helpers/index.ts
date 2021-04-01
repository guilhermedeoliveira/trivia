import { map, prop, pipe, includes, toLower, cond, gte, T, always } from 'ramda'

import { AnsweredQuestion } from 'shared/types'

export const isAnswerIncorrect = (answer: AnsweredQuestion): boolean =>
  pipe(
    prop('incorrectAnswers'),
    map(toLower),
    includes(prop('optionAnswered')(answer))
  )(answer)

export const getTotalScore = (answers: AnsweredQuestion[]): number =>
  answers.reduce((acc, cur) => (isAnswerIncorrect(cur) ? acc : acc + 1), 0)

export const generateScoreFeedback = (score: number): string =>
  cond([
    [gte(2), always('Oh no, please try again!')],
    [gte(5), always('I know you can do it better!')],
    [gte(7), always('You did it really good!')],
    [T, always('Awesome! You are outstanding!')],
  ])(score)
