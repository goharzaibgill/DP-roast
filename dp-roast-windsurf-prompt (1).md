# DP Roast — WhatsApp DP/Status Vibe Roaster
## Complete Build Prompt for Windsurf

Build a complete single-page website called "DP Roast" — a fun Pakistani-style 
roasting app for WhatsApp DPs and statuses. 

IMPORTANT: This app does NOT allow photo uploads. It works entirely on 
TEXT-BASED category selection and captions — this is a safety requirement, 
not a design choice. Never add an image upload feature to this app.

## TECH STACK
Pure HTML + CSS + Vanilla JavaScript. No frameworks, no npm, no build tools.
Single index.html file with everything inline (or separate css/js files).

## THEME
- Colors: WhatsApp-inspired green (#075E54 dark, #25D366 bright) mixed with 
  fun gold/orange accents (#FF9800)
- Font: Poppins (Google Fonts)
- Playful, meme-energy design — think Pakistani Gen-Z humor app
- Dark mode toggle (WhatsApp dark theme inspired)

## CORE FEATURES

### 1. DP CATEGORY ROAST (Main Feature)
- Grid of 15+ DP category cards user can select (NOT upload — just pick the 
  category that matches their actual DP):
  Gym Selfie, Nature/Sunset, Car Pic, Food Pic, Couple Pic, Solo Mirror Selfie, 
  Group Friends Pic, Pet Pic, Travel/Airport Pic, Quote/Text DP, Cartoon/Anime 
  Avatar, Black Screen/No DP, Old Childhood Pic, Cricket/Sports Pic, 
  Religious/Calligraphy DP, Baby Pic (own kid), Motorbike Pic
- User selects ONE category + enters their name
- App generates a funny, Pakistani-style roast specific to that category
- Multiple roast variations per category (5-6 each) so it doesn't repeat 
  for the same person

### 2. CAPTION ROAST MODE
- Separate tab: user types their actual WhatsApp status/bio text
- AI-style local logic analyzes keywords in the text (no real AI needed — 
  use keyword matching: words like "alone", "busy", "blessed", "grateful", 
  Urdu poetry words, etc.) and returns a matching funny roast
- Fallback generic roasts if no keywords match

### 3. ROAST INTENSITY SLIDER
- 3 levels: Halka Phulka (mild), Thoda Tez (medium), Khatarnak (savage)
- Same category gives different roast text based on intensity selected
- Visual slider with emoji indicators (😊 → 😏 → 🔥)

### 4. DP PERSONALITY QUIZ
- "Tumhari DP Energy Kya Hai?" — 6 question quiz
- Questions about social habits, not appearance (e.g. "Status kitni baar 
  badalte ho?", "Group mein sabse pehle reply karte ho ya last?")
- Results in 6 personality types: "Attention Seeker DP", "Ghost Mode DP", 
  "Inspirational Quote DP", "Chaotic Random DP", "Professional LinkedIn-on-
  WhatsApp DP", "Mystery No-DP Person"
- Each result has a funny description + shareable badge

### 5. ROAST BATTLE MODE (VS)
- Two people enter name + select their DP category each
- App declares a winner with funny reasoning + animated comparison bars
- "Roast Score" out of 100 for each, comparison visual

### 6. SOUND EFFECTS
- Web Audio API generated tones (no external files)
- Different sound for: button click, roast reveal, battle drum-roll, 
  quiz answer selection
- Mute/unmute toggle saved in localStorage

### 7. SHARE FEATURES
- "Share on WhatsApp" button — pre-filled message with roast text + link
- "Download as Image" — render result as a shareable square image card 
  using HTML5 Canvas (1080x1080, story-format friendly)

### 8. ROAST LEADERBOARD / HALL OF FAME
- Save each roast result to localStorage: {name, category, intensity, timestamp}
- Show recent roasts in a "Hall of Fame" feed (most savage/recent roasts)
- No real photos ever stored — just text data

### 9. RANDOM ROAST GENERATOR
- "Surprise Me" button — picks random category + generates instant roast 
  for a fun demo without filling the form

## DESIGN REQUIREMENTS
- Mobile-first fully responsive (test at 375px width minimum)
- Smooth animations: card selection highlight, result reveal fade-in, 
  animated score counters
- WhatsApp-style chat bubble aesthetic for displaying roast results 
  (looks like a WhatsApp message bubble with the roast text inside)
- Favicon: inline SVG, WhatsApp-green circle with a fire emoji-style icon
- Sticky header with: Logo, Dark mode toggle, Sound toggle

## CONTENT GUIDELINES FOR ROASTS
- All roasts must be LIGHT, PLAYFUL, and about the DP CATEGORY/CHOICE itself 
  — never about a person's actual appearance, body, race, religion, or any 
  protected characteristic
- Roast the cliche/trope (e.g. "gym selfie hamesha same angle se kyun hoti hai")
  not the person
- Keep it Pakistani-culture relatable: aunty references, biradari jokes, 
  WhatsApp group culture, desi parent reactions — but never mean-spirited 
  or insulting
- No profanity, no body-shaming, no offensive content

## FILE STRUCTURE
- index.html (main page with all sections)
- css/style.css
- js/main.js (all roast logic, quiz logic, battle logic, sound, canvas export)

## NAVIGATION
Top nav: DP Roast | Caption Roast | Personality Quiz | Battle Mode | Hall of Fame

Build this as a complete, production-ready, polished product. Make it 
look like a viral Pakistani meme app, not a student project.
