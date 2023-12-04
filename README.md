# Profico task

The task was to create a simple frontend app which communicates with an external API and displays the requested data.

## Description

I've used NextJs for the frontend and for the backend, the API I've used is [NewsApi](https://newsapi.org/).\
The way I'm communicating with the API is via pages/api routes. And I'm using [vercel postgres](https://vercel.com/docs/storage/vercel-postgres) which is hosted on [vercel](https://vercel.com/) for storing data.\
I've also created a simple auth feature as a proof of concept and bookmark feature for which the user has to be logged in. The data for these features is stored in the postgres database mentioned above.\
The app is deployed on vercel, you can visit it on [this](https://profico-task-pages.vercel.app/) link.

## Getting Started

### Installing

1. Install dependencies

`npm i`

2. Create local .env file

`cp .env.template .env`

3. Create local .env.development.local file

`cp .env.development.template .env.development.local`

4. Start local dev server

`npm run dev`

### Testing

1. Unit testing

`npm run test`

2. E2E testing

`npm run test:e2e`
