import {
  applySpec,
  complement,
  isEmpty,
  map,
  prop,
  when,
  pipe,
  replace,
} from 'ramda'

import { RawData, Question } from 'shared/types'

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
