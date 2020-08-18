module.exports = {
  apps: [{
    name: 'champagne',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-17-12-10.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/front-end-capstone.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/Champagne_proxy.git',
      path: '/home/ubuntu/champagne',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}