import {
  applySpec,
  complement,
  isEmpty,
  map,
  prop,
  when,
  pipe,
  replace,
  includes,
  toLower,
} from 'ramda'

import { RawData, Question, AnsweredQuestion } from 'shared/types'

export const normalizeQuizQuestions = (data: RawData): Question[] =>
  map(
    when(
      complement(isEmpty),
      applySpec<Question>({
        category: prop('category'),
        difficulty: prop('difficulty'),
        incorrectAnswers: prop('incorrect_answers'),
        question: pipe(
          prop('question'),
          replace(/&quot;/g, '"'),
          replace(/&#039;/g, "'"),
          replace(/&epsilon/g, 'Ε')
        ),
      })
    )
  )(data)

export const isAnswerIncorrect = (answer: AnsweredQuestion): boolean =>
  pipe(
    prop('incorrectAnswers'),
    map(toLower),
    includes(prop('optionAnswered')(answer))
  )(answer)

export const getTotalScore = (answers: AnsweredQuestion[]): number =>
  answers.reduce((acc, cur) => (isAnswerIncorrect(cur) ? acc : acc + 1), 0)
