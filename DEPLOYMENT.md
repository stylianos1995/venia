# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `venia`
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Update Homepage URL

Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://yourusername.github.io/venia"
```

Replace `yourusername` with your actual GitHub username.

## Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/yourusername/venia.git

# Push your code to GitHub
git push -u origin master
```

## Step 4: Deploy to GitHub Pages

```bash
# Deploy the project
npm run deploy
```

This command will:

1. Build your React app for production
2. Create a `gh-pages` branch
3. Push the built files to the `gh-pages` branch

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

## Step 6: Access Your Portfolio

Your portfolio will be available at:
`https://yourusername.github.io/venia`

It may take a few minutes for the changes to appear.

## Troubleshooting

### If deployment fails:

1. Make sure you have the correct GitHub username in `package.json`
2. Ensure your repository is public
3. Check that the `gh-pages` branch was created
4. Verify GitHub Pages is enabled in repository settings

### If the site doesn't load:

1. Wait a few minutes for GitHub Pages to build
2. Check the Actions tab in your repository for build status
3. Verify the URL is correct

## Updating Your Portfolio

To update your deployed portfolio:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Custom Domain (Optional)

To use a custom domain:

1. Add your domain to the "Custom domain" field in GitHub Pages settings
2. Create a `CNAME` file in the `public` folder with your domain
3. Deploy again with `npm run deploy`
