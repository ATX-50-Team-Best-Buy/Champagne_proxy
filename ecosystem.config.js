module.exports = {
  apps: [{
    name: 'champagne_proxy',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-237-49.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/front-end-capstone.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/Champagne_proxy.git',
      path: '/home/ubuntu/champagne_proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}