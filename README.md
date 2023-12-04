# Profico task

The task was to create a simple frontend app which communicated with an external API and displays the requested data.

## Description

I've used NextJs for the frontend/backend part and the API I've chosen is [NewsApi](https://newsapi.org/).\
The way I'm communicating with the API is via pages/api routes. And I'm using [vercel postgres](https://vercel.com/docs/storage/vercel-postgres) which is hosted on [vercel](https://vercel.com/) as database.\
I've also created a simple auth feature as a proof of concept and bookmark feature for which the user has to be logged in.\
The app is also deployed to vercel, you can visit it on [this](https://profico-task-pages.vercel.app/) link.

## Getting Started

### Installing

1. Install dependencies

`npm i`

2. Create local .env file

`cp .env.template .env`

3. Start local dev server

`npm run dev`
