const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
  console.log('Connected to server.');

  const fileName = process.argv[2];
  client.write(fileName);
});

client.on('data', (data) => {
  console.log(`Received file data:\n${data}`);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server.');
});
