# Hello World Clock

A simple webpage that displays a greeting alongside the current date and time in the Singapore timezone.

## Files

### `index.html`
The page structure. Renders an "Hello, world" heading and two paragraphs — one for the date and one for the time — whose content is populated by `script.js`. Links to both `style.css` and `script.js`.

### `style.css`
Centers all content vertically and horizontally on the page using flexbox. Sets the font to sans-serif at 2rem, and removes default paragraph margins.

### `script.js`
Drives the live date and time display, both locked to the `Asia/Singapore` timezone.

- **Date** — shown as a full weekday + date string (e.g. "Today is Sunday, 27 April 2026 in Singapore"). Updates once per day, scheduling itself to fire again at the next Singapore midnight.
- **Time** — shown as a 12-hour clock with seconds (e.g. "The time is now 08:45:30 AM"). Refreshes every second, re-aligning to the wall clock on each tick so the display stays in phase with actual second boundaries. The `scheduleNextTick` function is commented inline to explain this behaviour.

## Usage

Open `index.html` in any modern browser. No build step or server required.
