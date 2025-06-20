# 🧠 Memory Game (React + TypeScript)

A memory card game built using React and TypeScript. Match all card pairs before time runs out! The game includes customizable settings, smooth card animations, and state management with Redux.

## 📦 Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- Styled-components
- Jest + React Testing Library

---

## 🚀 How to Run the Game

1. **Clone the repository**

```bash
git clone https://github.com/your-username/memory-game.git
cd memory-game
Install dependencies

npm install
Start the development server

npm run dev
Open your browser and go to http://localhost:5173

⚙️ Configure the Game
At the beginning (or by restarting the game), a modal labeled Game Settings will appear, allowing you to configure the following:

Countdown time (sec.)
The number of seconds available to complete the game.

Number of pair of cards
Choose between 2 and 12 pairs of cards to match.

(Optional) Max bad guesses
You may configure a limit on incorrect guesses (if enabled).

All settings are managed via a React form and persisted using Redux.

🧩 Features
Emoji-based card visuals

Smooth flip and slide animations

Countdown timer with end-of-game detection

Red glow on correct matches

Styled-components for layout and animation

Redux store with slices for user, score, time, and settings

Modal UI for pre-game configuration

Responsive grid layout that adapts to screen size

🧪 Run Tests
This project includes unit tests written with Jest and React Testing Library.

To run tests:

npm run test
Test files are located alongside components as *.test.tsx or inside __tests__ directories.

📁 Project Structure
src/
├── assets/              # Static assets like card-back images
├── components/          # React components (Card, Board, SettingsForm, etc.)
├── constants/           # Static game data like emoji lists
├── store/               # Redux store and slices (user, game, timer, etc.)
├── styles/              # Styled-components and keyframe animations
├── App.tsx              # App root component
├── main.tsx             # Vite entry point
└── index.html           # Vite HTML template
🛠 Build for Production
To create a production-ready build:

npm run build
To preview the build locally:

npm run preview
✅ Requirements
Node.js 18+

npm or yarn

```
