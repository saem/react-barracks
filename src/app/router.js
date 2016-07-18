import sheetRouter from 'sheet-router'

export const router = (routingFn) => sheetRouter('/404', routingFn);

// For hash routing -- not supporting yet
//import hash from 'sheet-router/hash'
//import hashMatch from 'hash-match'

export const routerSubscriptions = {};

import history from 'sheet-router/history'
import href from 'sheet-router/href'

routerSubscriptions['history'] = (send, done) =>
    history((pathname) => {
        send('app:newLocation', {location: pathname});
        console.log('history');
    });

routerSubscriptions['href'] = (send, done) =>
    href((pathname) => {
        send('app:newLocation', {location: pathname});
        console.log('href');
    });