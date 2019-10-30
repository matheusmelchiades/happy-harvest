module.exports = {
    apps: [
        {
            name: 'happy-harvest',
            script: 'yarn',
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: 'development',
            },
        },
    ],

    deploy: {
        development: {
            key: '~/.ssh/keys/happyHarvest.pem',
            user: 'ubuntu',
            host: 'ec2-13-59-226-165.us-east-2.compute.amazonaws.com',
            ref: 'origin/master',
            repo: 'git@github.com:matheusmelchiades/happy-harvest.git',
            path: '/home/ubuntu/happy-harvest/app',
            'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env development',
            env: {
                NODE_ENV: 'development',
            },
        },
    },
};
