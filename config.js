'use strict';

const config = {
  jira: {
    protocol: 'https',
    host: 'pageuppeople.atlassian.net',
    port: 443,
    base: '',
    user: 'slackbot@pageuppeople.com',
    pass: 'w9yBr2Hj',
    apiVersion: 'latest',
    strictSSL: false,
    regex: '([a-zA-Z][a-z0-9A-Z0-9]+-[0-9]+)',
    sprintField: '',
    customFields: {
    },
    response: 'semi-minimal' // full, semi-minimal or minimal
  },
  slack: {
    token: 'xoxb-46910111698-ShUPkB1JRnT1hYSXEuzs1uL6',
    autoReconnect: true
  },
  usermap: {}
};
module.exports = config;
