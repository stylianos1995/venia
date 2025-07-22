# Assets Folder

This folder contains all static assets used in the portfolio project.

## Structure

```
assets/
├── images/     # Project screenshots, profile photos, backgrounds
├── fonts/      # Custom fonts and font files
├── icons/      # SVG icons, favicons, and small graphics
├── documents/  # PDFs, resumes, certificates, etc.
└── README.md   # This file
```

## Usage

### Images

- Store project screenshots, profile photos, and background images
- Recommended formats: JPG, PNG, WebP
- Optimize images for web use (compress when possible)

### Fonts

- Store custom font files (TTF, WOFF, WOFF2)
- Include font license files if required
- Consider using Google Fonts for web fonts

### Icons

- Store SVG icons and small graphics
- Include favicon files
- Use consistent naming conventions

### Documents

- Store PDFs, resumes, certificates, and other documents
- Keep file sizes reasonable for web download
- Consider providing alternative formats when possible

## Importing Assets

```javascript
// Import images
import profileImage from "../assets/images/profile.jpg";
import projectScreenshot from "../assets/images/project1.png";

// Import icons
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

// Import documents
import resume from "../assets/documents/resume.pdf";

// Import fonts (if using CSS)
// @import url('../assets/fonts/custom-font.woff2');
```

## Best Practices

1. **Optimize images** before adding them to the project
2. **Use descriptive names** for all files
3. **Keep file sizes small** for better performance
4. **Use appropriate formats** (SVG for icons, WebP for photos when possible)
5. **Organize files** in appropriate subdirectories
