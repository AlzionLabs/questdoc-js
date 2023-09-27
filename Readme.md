# The official QuestGPT AI Javascript SDK

[![npm version](https://badge.fury.io/js/questgpt.svg)](https://badge.fury.io/js/questgpt)

## Introduction

This is the official QuestGPT AI Javascript SDK. It allows you to easily integrate QuestGPT AI into your Javascript projects.

## Installation

```
npm install questgpt
```

## Usage

### Importing the SDK

```javascript
import { QuestGPT } from "questgpt";
```

### Creating a QuestGPT instance

```javascript
const questGpt = new QuestGpt("<YOUR_QUESTGPT_API_KEY>");
```

### Asking a question

```javascript
const question = "What is the meaning of life?";
const response = await questGpt.query({
  query: question,
});
```

### Sample response

```javascript
{
  "metadata": {
    "sources": [
      "https://en.wikipedia.org/wiki/Meaning_of_life"
    ]
  }
  "response": "The meaning of life is to live a life of meaning."
}
```
