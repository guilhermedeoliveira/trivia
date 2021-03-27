import {
  applySpec,
  complement,
  isEmpty,
  map,
  prop,
  when,
  pipe,
  includes,
  toLower,
} from 'ramda'

import { RawData, Question, AnsweredQuestion } from 'modules/quiz/lib/types'

export const normalizeQuizQuestions = (data: RawData): Question[] =>
  map(
    when(
      complement(isEmpty),
      applySpec<Question>({
        category: prop('category'),
        difficulty: prop('difficulty'),
        incorrectAnswers: prop('incorrect_answers'),
        question: prop('question'),
      })
    )
  )(data)

export const isAnswerIncorrect = (answer: AnsweredQuestion): boolean =>
  pipe(
    prop('incorrectAnswers'),
    map(toLower),
    includes(prop('optionAnswered')(answer))
  )(answer)
