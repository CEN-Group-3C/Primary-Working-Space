const server = require('./server.js');
const db = require('./database.js');

db.connectToDatabase();

server.listen(3000, () => {
  console.log('Server is running on port 3000')
});