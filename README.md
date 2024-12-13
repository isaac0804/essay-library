# Essay Library

## Overview

This is a web application designed to manage and display a collection of essays. It includes the following features:

- **Search and Filter**: Users can search for essays using keywords and apply filters based on various criteria.
- **Essay Viewing**: Users can view the full content of an essay, including a glossary of terms.
- **Reading Progress Tracking**: Users can track their reading progress and view statistics such as study time and topic distribution.
- **Profile Management**: Users can view their profile, including recent activities and reading progress.
- **Language Selection**: Users can select the language in which the essays are displayed.

## Features

### Search and Filter

The application provides a powerful search and filter functionality to help users find essays quickly. The `SearchBar` component allows users to enter keywords, while the `FilterBar` component provides options to filter essays by category, author, and other criteria.

### Essay Viewing

Users can view the full content of an essay in the `EssayViewer` component. The `EssayContent` component displays the main content, while the `Glossary` component provides definitions for difficult terms. If an essay is not found, the `EssayNotFound` component displays a friendly message.

### Reading Progress Tracking

The application tracks the user's reading progress using the `useReadingTracker` hook. The `ReadingProgress` component displays the user's progress, while the `StudyTimeChart` and `TopicDistribution` components provide visualizations of study time and topic distribution.

### Profile Management

Users can view their profile in the `ProfilePage` component. The `RecentActivities` component displays a list of recent activities, while the `ReadingProgress` component shows the user's reading progress.

### Language Selection

The `LanguageSelector` component allows users to select the language in which the essays are displayed. This feature is particularly useful for users who prefer to read in their native language.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/essay-library.git
   ```

2. Navigate to the project directory:
   ```bash
   cd essay-library
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

This will start the development server, and you can access the application at `http://localhost:3000`.

## Usage

To run the application, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at `http://localhost:3000`.

## Folder Structure

The project is organized as follows:

- `eslint.config.js`: ESLint configuration file.
- `index.html`: The main HTML file for the application.
- `package.json`: Lists the project dependencies and scripts.
- `postcss.config.js`: PostCSS configuration file.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.
- `src/`: Contains the source code of the application.
  - `App.tsx`: The main application component.
  - `components/`: Contains reusable components.
    - `EssayCard.tsx`: Displays a single essay card.
    - `EssayViewer.tsx`: Displays the full content of an essay.
    - `FilterBar.tsx`: Provides filtering options for essays.
    - `LanguageSelector.tsx`: Allows users to select the language.
    - `Navigation.tsx`: Handles navigation between pages.
    - `SearchBar.tsx`: Provides a search input for essays.
    - `essay/`: Contains components related to essay content.
      - `EssayContent.tsx`: Displays the content of an essay.
      - `EssayNotFound.tsx`: Displays a message when an essay is not found.
      - `Glossary.tsx`: Displays a glossary of terms.
      - `GlossaryTerm.tsx`: Displays a single glossary term.
    - `profile/`: Contains components related to user profile.
      - `ReadingProgress.tsx`: Displays the user's reading progress.
      - `RecentActivities.tsx`: Displays recent activities of the user.
      - `StudyTimeChart.tsx`: Displays a chart of study time.
      - `TopicDistribution.tsx`: Displays the distribution of topics studied.
    - `search/`: Contains components related to search functionality.
      - `SearchContainer.tsx`: Container for search components.
      - `SearchFilters.tsx`: Provides filters for search results.
      - `SearchInput.tsx`: Input field for search queries.
  - `data/`: Contains data files, such as `essays.json`.
  - `hooks/`: Contains custom React hooks.
    - `useEssaySearch.ts`: Hook for searching essays.
    - `useHighlightTerms.ts`: Hook for highlighting terms in essays.
    - `useLocalStorage.ts`: Hook for managing local storage.
    - `useReadingTracker.ts`: Hook for tracking reading progress.
  - `index.css`: Global CSS styles.
  - `main.tsx`: The entry point of the application.
  - `pages/`: Contains page components.
    - `AboutPage.tsx`: Displays information about the application.
    - `EssayPage.tsx`: Displays a single essay.
    - `FeedbackPage.tsx`: Allows users to provide feedback.
    - `HomePage.tsx`: The main page of the application.
    - `ProfilePage.tsx`: Displays the user's profile.
  - `styles/`: Contains style files, such as `tailwind.css`.
  - `types/`: Contains TypeScript type definitions.
    - `essay.ts`: Type definitions for essays.
    - `profile.ts`: Type definitions for user profiles.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.