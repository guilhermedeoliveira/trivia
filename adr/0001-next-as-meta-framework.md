# Next.js as meta-framework

## Context

When bootstrapping a project, it is a good idea to use a boilerplate. In addition to basic setup, some boilerplates have evolved to a meta-framework, with built-in routing, server-side rendering and other features.

## Options

- [Create react app](https://create-react-app.dev/docs/getting-started/)
- [Next.js](https://nextjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)

## Decision

It was decided to use Next.js because of the following reasons:

- It is the meta-framework that I have been using the most.
- When a file is added to the pages directory it is automatically available as a route.
- Automatic code splitting.
- Pages can be pre-rendered with Server-side rendering or with static site generator approaches.
