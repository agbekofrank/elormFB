import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
// Post = new Mongo.Collection('post');


Meteor.startup(() => {
    new App({
        target: document.getElementById('app')
    })
});

