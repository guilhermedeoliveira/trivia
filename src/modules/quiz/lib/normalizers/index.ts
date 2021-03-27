import { applySpec, complement, isEmpty, map, prop, when } from 'ramda'

import { RawData, Question } from 'modules/quiz/lib/types'

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
