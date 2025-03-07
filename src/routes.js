import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';
import Counter from './pages/counter';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/products/:id" component={Product}></Route>
            <Route path="/counter" component={Counter}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;