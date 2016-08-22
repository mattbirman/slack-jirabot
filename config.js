'use strict';

const config = {
  jira: {
    protocol: 'https',
    host: '',
    port: 443,
    base: '',
    user: '',
    pass: '',
    apiVersion: 'latest',
    strictSSL: false,
    regex: '([a-zA-Z][a-z0-9A-Z0-9]+-[0-9]+)',
    sprintField: '',
    customFields: {
    },
    response: 'semi-minimal' // full, semi-minimal or minimal
  },
  slack: {
    token: '',
    autoReconnect: true
  },
  usermap: {}
};
module.exports = config;
