# Genki Sound Navigator

A simple React-based web application to navigate and play audio files for the Genki Japanese textbook.

## Features

- Displays lessons and their associated audio files in an accordion-style layout.
- Responsive design with Tailwind CSS.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JSON**: Data source for lesson and audio information.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sheikhsulaiman/genki-audio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd genki-audio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- The application loads data from `data.json`, which contains lesson titles and audio file paths.
- Audio files are only loaded when their respective cards are visible in the viewport, reducing initial load time.
- Click on a lesson to expand it and access the audio players for each item.

## Project Structure

- `src/App.jsx`: Main React component with lazy-loaded audio functionality.
- `src/data.json`: JSON file containing lesson and audio data.
- `src/index.css`: Custom CSS styles (if any, alongside Tailwind).

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

MIT License
