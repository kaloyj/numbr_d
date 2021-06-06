# numbr_d

A phoneword generator made with Next.js, Typescript, Cypress, Jest, Framer Motion, and other goodies!

## Getting Started

1. `npm install`
2. `npm run dev` or `yarn dev`
3. Open [http://localhost:3000](http://localhost:3000) to use the app.

### Optional setup

1. Create `RAPID_API_HOST` and `RAPID_API_KEY` local env variables from the freemium service: [RapidAPI](https://rapidapi.com/dpventures/api/wordsapi/). This is needed for the phoneword filtering. Not setting this up wont break the app, but will always return an empty list.

## Tests

1. `npm run test` for Jest unit testing (both client & server code)
2. `npm run test:e2e` for Cypress integration testing

## Credits

1. SVG button icons by [heroicons](https://github.com/tailwindlabs/heroicons)
2. Profile SVG by [boringavatars](https://boringavatars.com/)
3. Font used from [Google Font](https://fonts.google.com/)

## Optimizations (open for PRs)

- improve backend code for phonewords generation (currently O(n \* 4^n)
- animations
- a11y

If you have other topics/areas for discussion, let me know!
