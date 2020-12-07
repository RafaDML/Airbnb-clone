import React from 'react';
import{ Switch, Route} from 'react-router-dom';
import BecomeHost from './BecomeHost';
import Header from './Header';
import Banner from './HomeFolder/Banner';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component={props => <> <Header/><Banner/> </>}/>
            <Route exact path = '/index.html' component={props => <> <Header/><Banner/> </>}/>
            <Route exact path = '/anfitrion.html' component={BecomeHost}/>
        </Switch>
    )
}

export default Routes;