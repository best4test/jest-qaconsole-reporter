# jest-qaconsole-reporter

Reporter will send your Jest test results to qaconsole.com

Add reporter to jest.config.js
```
reporters: [ "default",["jest-qaconsole-reporter", {"url": "https://demo.qaconsole.io/","apiKey":"bec4ca8a-e07b-4874-b7d9-bb21c9c622a4","projectName": "Jest Puppeteer", "environment":"Production"}] ]    
```
