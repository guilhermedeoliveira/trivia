# Ramda as utility library

## Context

It was needed to use a state management solution. Because it is a simple application, it was decided to use a simple solution.

## Options

- [Context API](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/)
- [MobX](https://mobx.js.org/README.html)

## Decision

It was decided to use context API because of the following reasons:

- It is a simple solution that fits well with simple application states.
- No need to install a third-party library.
- Built-in `useContext` hook.
- Smaller bundle size.
