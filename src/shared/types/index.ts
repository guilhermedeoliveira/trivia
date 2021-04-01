export type ParsedResponse = {
  response_code: number
  results: RawData
}

export type RawData = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}[]

export type Question = Omit<AnsweredQuestion, 'optionAnswered'>

export type AnsweredQuestion = {
  category: string
  difficulty: string
  incorrectAnswers: string[]
  question: string
  optionAnswered: string
}
