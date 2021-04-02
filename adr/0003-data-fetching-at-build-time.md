# Data fetching at build time

## Context

It was needed to fetch quiz's data from an external api.

## Options

- [built-in getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)
- [use effect hook](https://reactjs.org/docs/hooks-effect.html)

## Decision

It was decided to use the built-in Next.js function `getStaticProps` because of the following reasons:

- Next.js will pre-render the page at build time with the fetched data passed to the component via props.
- Better user experience.
- No loading time.
