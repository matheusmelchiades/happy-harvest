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
            key: '~/.ssh/keys/spottedtest.pem',
            user: 'ubuntu',
            host: 'ec2-3-93-220-13.compute-1.amazonaws.com',
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
