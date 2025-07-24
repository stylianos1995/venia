# Vaia Gialama - Portfolio

Personal portfolio website showcasing my work in neuroscience research and biology.

## Latest Update

Last updated: July 24, 2025 - Enhanced with logo integration, resume download, and improved navbar functionality.

## Features

- Responsive design
- Professional branding
- Downloadable resume
- Interactive navigation
- Research showcase

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd venia
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the app to GitHub Pages

## Deployment

This project is configured for deployment on GitHub Pages.

### Prerequisites for Deployment

1. Create a GitHub repository named `venia`
2. Push your code to the repository

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:

   ```json
   "homepage": "https://yourusername.github.io/venia"
   ```

2. Deploy the project:

   ```bash
   npm run deploy
   ```

3. Go to your GitHub repository settings:

   - Navigate to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select the `gh-pages` branch
   - Save the settings

4. Your portfolio will be available at `https://yourusername.github.io/venia`

## Technologies Used

- React
- CSS3
- JavaScript (ES6+)
- HTML5

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Images, fonts, etc.
├── styles/        # CSS files
└── utils/         # Utility functions
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
