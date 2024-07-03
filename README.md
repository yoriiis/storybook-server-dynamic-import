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

## Developement

**Terminal 1: Webpack**

To build the components assets with webpack

```bash
npm run start:webpack
```

**Terminal 2: Storybook**

To build the Storybook app (which contains the components in an iframe view)

```bash
npm run start:storybook
```

Open http://localhost:6006

**Terminal 3: Server for the components preview**

To simulate a server for a components standalone preview

```bash
npm run start:server:app
```

Open http://127.0.0.1:3000/demo

## Production

**Terminal 1: Webpack**

To build the components assets with webpack

```bash
npm run build:webpack
```

**Terminal 2: Storybook**

To build the Storybook app (which contains the components in an iframe view)

```bash
npm run build:storybook
```

**Terminal 3: Server for the Storybook app**

To simulate a server for the Storybook app

```bash
make start-server-storybook
```

Open http://127.0.0.1:3001
