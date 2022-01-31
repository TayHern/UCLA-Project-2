//sessionData;
const { Session } = require('../session');

const sessionData = [
    {
    name: '',
    description: '',
    },
];

const sessions = () => Session.bulkCreate(sessionData);
module.exports = sessions;