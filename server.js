let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/ecce'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname+'/dist/ecce')
});

app.listen(process.env.PORT || 8080);
