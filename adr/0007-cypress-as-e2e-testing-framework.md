# Cypress as e2e testing framework

## Context

It is a good practice to test the applications' main flows. That is the use case for a end-to-end testing tool.

## Options

- [Cypress](https://www.cypress.io/)
- [Selenium](https://www.selenium.dev/)

## Decision

It was decided to use Cypress because of the following reasons:

- Takes snapshots as the tests run.
- Automatically waits for commands and assertions.
- Readable errors and stack traces.
- Easier API.
- Good queries and utilities.
