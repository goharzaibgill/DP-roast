# DP Roast

A fun Pakistani-style roasting app for WhatsApp DPs and statuses. Pure HTML/CSS/JavaScript — no frameworks, no build tools.

## Live Demo

Open `index.html` in any browser. Works on mobile and desktop.

## Features

### DP Category Roast
Select from 17 DP categories (Gym Selfie, Nature/Sunset, Car Pic, Food Pic, Couple Pic, etc.) and get a funny, culturally relatable roast specific to that category. 6 roast variations per category at 3 intensity levels.

### Caption Roast Mode
Type your actual WhatsApp status or bio text. The app analyzes keywords (alone, busy, blessed, poetry, alhamdulillah, etc.) and returns a matching roast. Falls back to generic roasts if no keywords match.

### Roast Intensity Slider
- **Halka Phulka** — mild
- **Thoda Tez** — medium
- **Khatarnak** — savage

Same category gives different roast text based on intensity selected.

### Personality Quiz
6-question quiz ("Tumhari DP Energy Kya Hai?") that determines your WhatsApp DP personality type:
- Attention Seeker DP
- Ghost Mode DP
- Chaotic Random DP
- Professional LinkedIn-on-WhatsApp DP
- Mystery No-DP Person

### Battle Mode
Two players enter their name and DP category. App declares a winner with animated comparison bars, scores out of 100, and funny reasoning.

### Sound Effects
Web Audio API generated tones for button clicks, roast reveals, battle drumrolls, quiz answers, and wins. Mute/unmute toggle saved in localStorage.

### Share Features
- **WhatsApp** — Pre-filled message with roast text and link
- **Download as Image** — 1080x1080 canvas export (story-format friendly)

### Hall of Fame
Each roast result saved to localStorage. Shows recent roasts in a feed with timestamps and intensity badges.

### Dark Mode
WhatsApp dark theme inspired toggle with localStorage persistence.

### Surprise Me
Random category + instant roast for a quick demo without filling any forms.

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6+ classes)
- Web Audio API (sound effects)
- HTML5 Canvas (image export)
- localStorage (persistence)

No npm, no frameworks, no build tools.

## File Structure

```
do-roast/
├── index.html          # Main page with all sections
├── css/
│   └── style.css       # All styling, dark mode, responsive
└── js/
    └── main.js         # Roast logic, quiz, battle, sound, export
```

## Customization

### Adding New Categories
Add to `DP_CATEGORIES` array in `js/main.js`:
```js
{ id: 'newcategory', name: 'New Category Name' }
```
Add corresponding SVG icon to `SVG` object and roast arrays to `ROASTS`.

### Modifying Roasts
Edit the `ROASTS` object in `js/main.js`. Each category has `mild`, `medium`, and `savage` arrays with 6 variations each.

### Adding Quiz Questions
Edit `QUIZ_QUESTIONS` array. Each question needs 4 options with personality type tags.

## Content Guidelines

- Roasts target the DP category/trope, never the person's appearance
- Pakistani-culture relatable: aunty references, biradari jokes, WhatsApp group culture
- No profanity, no body-shaming, no offensive content
- Light, playful, fun — never mean-spirited

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Mobile-first responsive design tested at 375px minimum width.

## License

Free to use and modify.
