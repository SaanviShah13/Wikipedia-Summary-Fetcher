# Wikipedia Summary Fetcher

A simple web application that fetches Wikipedia summaries based on user queries. Built using **Next.js**, **TypeScript**, and **Wikipedia API**.

## Features
- Fetch summaries of Wikipedia topics
- Keep a history of past searches
- Click on past searches to retrieve summaries instantly
- Minimalistic and responsive UI

## Technologies Used
- **Next.js** (React framework for server-side rendering and API routes)
- **TypeScript** (Static typing for better code maintainability)
- **Wikipedia API** (Fetching summary data)
- **Tailwind CSS** (Styling)

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/your-username/wikipedia-summary-fetcher.git
cd wikipedia-summary-fetcher
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Run the Development Server
```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure
```
📦 wikipedia-summary-fetcher
 ┣ 📂 components
 ┃ ┗ 📜 SearchHistory.tsx    # Component for displaying search history
 ┣ 📂 app
 ┃ ┗ 📂 api
 ┃ ┃ ┗ 📜 wiki.ts            # API route to fetch Wikipedia summaries
 ┣ 📜 page.tsx               # Main page with input, button, and summary display
 ┣ 📜 package.json           # Project dependencies
 ┗ 📜 README.md              # Project documentation
```

## How It Works
- User enters a topic in the search bar and clicks "Fetch Summary".
- The app fetches a summary from Wikipedia using the `/api/wiki` route.
- The result is displayed on the screen.
- The search term is saved in the search history.
- Clicking on a past search instantly re-fetches its summary.

## API Endpoint
- **Route:** `/api/wiki?query=<search-term>`
- **Method:** `GET`
- **Response:**
```json
{
  "summary": "Wikipedia summary of the topic."
}
```

## Possible Enhancements
- Add support for fetching images from Wikipedia
- Improve UI with animations and transitions
- Add error handling for invalid queries

---

📌 **Author:** Saanvi Shah 


