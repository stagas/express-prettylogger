# express-prettylogger

## Installation:

`npm install express-prettylogger`

## Usage:

```javascript
var express = require('express');

require('express-prettylogger');

app.use(express.logger('pretty'));
app.get('/', function (req, res) {
  res.send('Hello, world');
});

app.listen(8080);
```

## Licence:

MIT/X11
