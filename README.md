# SalfordApp

SalfordApp is a mobile application for an online learning platform, built with React Native. It allows users to browse, purchase, and consume educational courses on the go.

## Features

-   **User Authentication:** Secure sign-up and sign-in functionality.
-   **Course Catalog:** Browse a wide range of courses with detailed descriptions.
-   **Categories and Filtering:** Easily find courses by filtering through categories.
-   **Trending and Popular Courses:** Discover new and popular courses on the home screen.
-   **My Courses:** Access all your purchased courses in one place.
-   **Subscription Plans:** Choose from various subscription plans to access premium content.
-   **User Profile:** Manage your profile and track your learning progress.
-   **Search:** Quickly find courses using the search functionality.

## Technologies Used

-   **React Native:** A framework for building native apps using React.
-   **React Navigation:** For routing and navigation between screens.
-   **Redux Toolkit:** For predictable state management.
-   **React Query:** For data fetching, caching, and state synchronization.
-   **Axios:** A promise-based HTTP client for making API requests.
-   **React Native SVG:** For displaying SVG images.
-   **React Native Vector Icons:** For using customizable icons.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v18 or higher)
-   npm or Yarn
-   React Native CLI
-   Android Studio (for Android development)
-   Xcode (for iOS development)

For a detailed guide on setting up your environment, please refer to the [official React Native documentation](https://reactnative.dev/docs/set-up-your-environment).

## Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/SalfordApp.git
    cd SalfordApp
    ```

2.  **Install dependencies:**

    Using npm:
    ```sh
    npm install
    ```

    Using Yarn:
    ```sh
    yarn install
    ```

3.  **Install iOS dependencies:**

    ```sh
    cd ios
    bundle install
    bundle exec pod install
    ```

## Running the Application

### For Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## Project Structure

The project follows a standard React Native structure, with some additional directories for better organization:

```
SalfordApp/
├── android/            # Android native project
├── ios/                # iOS native project
├── app/                # App screens organized by routes
│   ├── (auth)/         # Authentication screens
│   ├── (intro)/        # Onboarding and splash screens
│   └── (main)/         # Main app screens
├── assets/             # Images, fonts, and styles
├── components/         # Reusable components
├── constants/          # App-wide constants like colors and routes
├── hooks/              # Custom React hooks
├── redux/              # Redux store, slices, and actions
├── services/           # API services and utility functions
├── App.tsx             # Main app component
└── package.json        # Project dependencies and scripts
```

## Available Scripts

In the project directory, you can run the following commands:

-   `npm start`: Starts the Metro bundler.
-   `npm run android`: Builds and runs the app on an Android emulator or connected device.
-   `npm run ios`: Builds and runs the app on an iOS simulator or connected device.
-   `npm run lint`: Lints the code using ESLint.
-   `npm test`: Runs the test suite using Jest.
