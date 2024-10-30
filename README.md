# CardViewQL

CardViewQL is a React Native application that allows users to explore data from the Star Wars universe. This app leverages **GraphQL** and **Relay** for efficient data fetching, with data sourced from the [Star Wars GraphQL API](https://swapi-graphql.netlify.app/.netlify/functions/index).

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Relay Configuration](#relay-configuration)
- [GraphQL Queries](#graphql-queries)
- [Screenshots](#screenshots)
- [License](#license)

## Features
- View lists of Star Wars characters
- Detailed information on each character
- Pagination support with Relay for efficient data handling.

## Prerequisites
- **Yarn** or **npm** for dependency management
- **React Native CLI** for running the app on a device or emulator

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/abiespinal04/CardViewQL.git
cd CardViewQL
nvm use 18 
yarn run clean-install
open ios/CardViewQL.xcworkspace/
open -a /Applications/Android\ Studio.app
```

### 2. Project Structure
src
├── components             # Reusable UI components
│   ├── PeopleList         # Component for displaying a list of people
│   └── PersonCard         # Card component to display individual person details
├── data
│   └── schema.graphql     # GraphQL schema for Relay
├── hooks
│   ├── __generated__      # Relay-generated TypeScript types for fragments and queries
│   └── usePeopleListPagination.tsx  # Custom hook for paginating people list
├── navigation
│   └── stacks             # Stack navigators for organizing app screens
│       ├── CameraStackNavigator.tsx
│       ├── HomeStackNavigator.tsx
│       └── TabStackNavigator.tsx
├── relay
│   └── RelayEnvironment.ts # Relay environment setup for configuring network and cache
└── screens
    ├── CameraScreen       # Screen for camera functionality
    │   ├── CameraScreen.tsx
    │   └── index.tsx
    ├── HomeScreen         # Main home screen listing Star Wars entities
    └── PersonDetailsScreen # Screen to show details of a selected person

### 3. Screenshots
