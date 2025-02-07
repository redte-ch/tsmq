# tsmq

Simple content-based message broker for microservices written in TypeScript.

## Features

`tsmq` allows you to:

- [ ] Publish messages to a topic (e.g. `Free taxis in Paris`)
- [ ] Subscribe to a topic to be notified when a message is published
- [ ] Define a constraint for messages you want to receive (e.g. `In Paris`)

## Installation

`tsmq` uses [`Node.js`](https://nodejs.org/en) and [`Yarn`](https://yarnpkg.com/).

To install `tsmq` locally, run:

```bash
git clone git@github.com:redte-ch/tsmq.git
cd tsmq
yarn install
```

## Usage

To start the broker:

```bash
yarn start
```

To publish a message:

```bash
yarn publish topic="topic" "Filter"
```

To subscribe to a topic:

```bash
yarn subscribe topic="topic" "Filter"
```

## Testing

To run the tests:

```bash
yarn test
```
