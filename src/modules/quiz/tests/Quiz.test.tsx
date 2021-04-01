import React from 'react'
import * as router from 'next/router'

import QuizPage from 'pages/quiz'

import { render, screen, userEvent } from 'test-utils'
import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'

// eslint-disable-next-line
// @ts-ignore
router.useRouter = jest.fn()

// eslint-disable-next-line
// @ts-ignore
router.useRouter.mockImplementation(() => ({ route: '/results' }))

const setAnsweredQuestionsContext = jest.fn()

const answeredQuestionsContext = []

const questions = [
  {
    category: 'Entertainment: Video Games',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question:
      'In "The Sims" series, the most members in a household you can have is 8.',
  },
  {
    category: 'Entertainment: Video Games',
    difficulty: 'hard',
    incorrectAnswers: ['True'],
    question: 'The first "Metal Gear" game was released for the PlayStation 1.',
  },
  {
    category: 'Mythology',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question:
      'Rannamaari was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.',
  },
  {
    category: 'Entertainment: Video Games',
    difficulty: 'hard',
    incorrectAnswers: ['True'],
    question: `All of these maps were in "Tom Clancy's Rainbow Six Siege" on its initial release: House, Clubhouse, Border, Consulate.`,
  },
  {
    category: 'Politics',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question:
      "Nazi Germany surrendered on Harry Truman's birthday while he was president.",
  },
  {
    category: 'Entertainment: Film',
    difficulty: 'hard',
    incorrectAnswers: ['True'],
    question:
      'The weapon Clint Eastwood uses in "Dirty Harry" was a .44 Automag.',
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question:
      'In the "Kagerou Daze" series, Shintaro Kisaragi is prominently shown with the color red.',
  },
  {
    category: 'Entertainment: Music',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question: 'The singer Billie Holiday was also known as "Lady Day".',
  },
  {
    category: 'Art',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question:
      "The Statue of Liberty's official name is &ldquo;Liberty Enlightening the World&rdquo;.",
  },
  {
    category: 'History',
    difficulty: 'hard',
    incorrectAnswers: ['False'],
    question: 'The man that shot Alexander Hamilton was named Aaron Burr.',
  },
]

const providerValues = { answeredQuestionsContext, setAnsweredQuestionsContext }

describe('Quiz page', () => {
  // it could be a for loop
  it('should test if the questions are rendered', async () => {
    render(
      <AnsweredQuestionsContext.Provider value={providerValues}>
        <QuizPage questions={questions} />
      </AnsweredQuestionsContext.Provider>
    )

    screen.getByText(/Trivia Game!/i) as HTMLHeadingElement

    const trueButton = screen.getByText('true') as HTMLButtonElement
    const falseButton = screen.getByText('false') as HTMLButtonElement

    screen.getByText('0% completed')
    screen.getByText(questions[0].category)
    userEvent.click(trueButton)

    screen.getByText('10% completed')
    screen.getByText(questions[1].category)
    userEvent.click(falseButton)

    screen.getByText('20% completed')
    screen.getByText(questions[2].category)
    userEvent.click(trueButton)

    screen.getByText('30% completed')
    screen.getByText(questions[3].category)
    userEvent.click(falseButton)

    screen.getByText('40% completed')
    screen.getByText(questions[4].category)
    userEvent.click(trueButton)

    screen.getByText('50% completed')
    screen.getByText(questions[5].category)
    userEvent.click(falseButton)

    screen.getByText('60% completed')
    screen.getByText(questions[6].category)
    userEvent.click(trueButton)

    screen.getByText('70% completed')
    screen.getByText(questions[7].category)
    userEvent.click(falseButton)

    screen.getByText('80% completed')
    screen.getByText(questions[8].category)
    userEvent.click(trueButton)

    screen.getByText('90% completed')
    screen.getByText(questions[9].category)
  })
})
