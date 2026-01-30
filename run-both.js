// run-both.js
const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Starting both applications...');

// Start trading app
const tradingProcess = exec('npm start', {
  cwd: path.join(__dirname, 'trading-app')
});

tradingProcess.stdout.on('data', (data) => {
  console.log(`[Trading App]: ${data}`);
});

tradingProcess.stderr.on('data', (data) => {
  console.error(`[Trading App ERROR]: ${data}`);
});

// Start admin app
const adminProcess = exec('npm start', {
  cwd: path.join(__dirname, 'admin-panel')
});

adminProcess.stdout.on('data', (data) => {
  console.log(`[Admin Panel]: ${data}`);
});

adminProcess.stderr.on('data', (data) => {
  console.error(`[Admin Panel ERROR]: ${data}`);
});

console.log('✅ Both apps are starting...');
console.log('👉 Trading App: http://localhost:3000');
console.log('👉 Admin Panel: http://localhost:3001');