## About the project

The project is a full-stack solution used to read latest news. It allows user authentication and saving (bookmarking) interesting news.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run the tests:

Unit tests:

```bash
npm run test
```

E2E tests:

```bash
npm run test:e2e
```

### Build the app:

```bash
npm run build
```

and start the server

```bash
npm run start
```

## Tech stack

The project uses Next JS as a full-stack solution for both client and the API. React testing library is used for unit testing. Playwright is used for E2E tests. Fetching the data (syncing server state, caching the data in the browser etc.) is done using the React Query from Tanstack. Vercel cloud postgres database is used to store the data. The app is deployed on Vercel.

Client is built using React with Typescript: - `pages` represent file-based routing and each file represents one page - `features` contain set of features together with their components, data fetching hooks and types - `components` are being used for components shared across the application - `hooks` contain general utility hooks
API lives under the `/pages/api` folder and it serves as a wrapper for the [News API](https://newsapi.org/docs). Each file inside the folder represents one serverless API route.
The cloud postgres database hosted on Vercel is used to store `users` and `bookmarks`: - `POST /api/users/create` -> create new user - `POST /api/users/authenticate` -> user authentication - `POST /api/bookmarks` -> fetch user bookmarks - `POST /api/bookmarks/create` -> bookmark the article - `POST /api/bookmarks/delete` -> remove article bookmark

## Disclaimer

The authentication and introduction of the cloud db are introduced to expand the app and as a proof of concept even though the initial task didn't require those features.
