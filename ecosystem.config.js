// ecosystem.config.js
module.exports = {
  apps: [
    // Trading App
    {
      name: 'trading-app',
      script: 'serve',
      args: '-s build -l 3000',
      cwd: './trading-app',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/trading-error.log',
      out_file: './logs/trading-out.log',
      log_file: './logs/trading-combined.log',
      time: true
    },
    
    // Admin Panel
    {
      name: 'admin-panel',
      script: 'serve',
      args: '-s build -l 3001',
      cwd: './admin-panel',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/admin-error.log',
      out_file: './logs/admin-out.log',
      log_file: './logs/admin-combined.log',
      time: true
    }
  ]
};