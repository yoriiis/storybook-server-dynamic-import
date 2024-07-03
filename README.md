Reproductible repository for an infinite preview reload when components contains dynamic import.

See TODO

## Problems

- In production mode, the Storybook preview has an infinite reload. See [production](#production) for reproduction steps
- In development mode, the Storybook preview display an error `__webpack_require__.O is not a function`

## Installation

```bash
nvm use
npm install
```

## Usage

**To reproduce infinite preview reload in production mode**

1. Start terminal 1 with the command: `npm run build:webpack`
2. Start terminal 2 with the command: `npm run build:storybook`
3. Start terminal 3 with the command: `npm run start:server:storybook`
4. Open http://127.0.0.1:3001 to view the Storybook public build
5. The Storybook preview is infinitely reloading like the video above

**To reproduce error in development mode**

1. Start terminal 1 with the command: `npm run start:webpack`
2. Start terminal 2 with the command: `npm run start:storybook`
3. Open http://localhost:6006 to view the Storybook in development mode
4. The Storybook preview display an error in the DevTools console like the image above

**To test the component itself in standalone mode**

1. Start terminal 1 with the command: `npm run start:webpack`
3. Start terminal 3 with the command: `npm run start:server:app`
4. Open http://127.0.0.1:3000/demo to view the component itself in standalone mode
5. The component preview is working correctly with the dynamic import
