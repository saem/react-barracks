import React from 'react'

import barracks from 'barracks'
import {router, routerSubscriptions} from './router'

const store = barracks({
    onError: (err, state, createSend) => {
        console.error(`error: ${err}`)
    },
    onAction: (data, state, name, caller, createSend) => {
        console.log(`data: ${data}`)
    },
    onStateChange: (data, state, prev, caller, createSend) => {
        console.log(`state: ${prev} -> ${state}`)
    }
});

const routing = router((route) => {
    return [
        route('/', params => (<TheApp />)),
        route('/404', params => (<NotFound />))
    ];
});

store.model({
    namespace: 'app',
    state: {
        route: '/',
        subject: 'World'
    },
    effects: {
        'view': (payload) => { console.log('view', payload); }
    },
    reducers: {
        'start': (payload, state) => { return state; }
    },
    subscriptions: routerSubscriptions
});

const createSend = store.start({});
const send = createSend('appDispatcher', true);

export default class AppContainer extends React.Component {
    componentWillMount() {
        store.start();
        this.setState(store.state());
        send('app:start', { name: 'Loki' });
    }

    render() {
        const subject = this.state.app.subject;
        return routing(this.state.app.route,
            <TheApp test="test" subject={subject}/>);
    }
}

const TheApp = (props) => {
    console.log(props);
    return (<p>Hello, World!</p>);
};

const NotFound = () => {
    return (<h1>404 - Didn't find what you were looking for!</h1>);
};
