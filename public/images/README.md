# Images Folder Structure

This folder contains all images used throughout the website, organized by purpose:

## 📁 Folder Structure

### `/hero/`
- Hero section background images
- Banner images for main pages
- Landing page visuals

### `/products/`
- Product category images
- Individual product photos
- Product thumbnails and previews

### `/about/`
- About page images
- Team photos
- Company facility images
- History/timeline images

### `/contact/`
- Contact page related images
- Location maps
- Office photos

### `/icons/`
- Small icon images
- UI icons
- Feature icons
- Social media icons

### `/logos/`
- Company logos
- Partner logos
- Brand assets
- Client logos

## 📝 Usage Guidelines

1. **File Naming**: Use descriptive names with hyphens (e.g., `hero-safety-equipment.jpg`)
2. **Image Formats**: 
   - Use `.jpg` for photographs
   - Use `.png` for images with transparency
   - Use `.svg` for icons and logos
3. **Image Optimization**: Compress images before adding to maintain fast load times
4. **Alt Text**: Always provide descriptive alt text for accessibility

## 🚀 How to Use

Images in this folder are accessible from your components using:

```jsx
// For hero images
<img src="/images/hero/hero-safety.jpg" alt="Safety Equipment" />

// For product images  
<img src="/images/products/hard-hat.jpg" alt="Hard Hat" />

// For icons
<img src="/images/icons/shield.svg" alt="Safety Shield" />
```

## 📂 Current Structure

```
public/images/
├── hero/
├── products/
├── about/
├── contact/
├── icons/
└── logos/
```
