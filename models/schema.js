const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        purpose: "Unique identifier for the user"
    },

    preferences: {
        type: Object,
        required: true,
        purpose: "Grouped settings related to user experience and notifications"
    },

    preferencestheme: {
        type: String,
        enum: ['light', 'dark'],
        default: 'light',
        purpose: "Preferred UI theme"
    },

    preferenceslanguage: {
        type: String,
        default: 'en',
        purpose: "Preferred display language"
    },

    preferencesnotifications: {
        type: Object,
        purpose: "Settings related to how the user wants to receive notifications"
    },

    preferencesnotificationsemail: {
        type: Boolean,
        default: true,
        purpose: "Whether the user wants to receive email notifications"
    },

    preferencesnotificationssms: {
        type: Boolean,
        default: false,
        purpose: "Whether the user wants to receive SMS notifications"
    }
});

module.exports = moongose.model('User', userSchema);
