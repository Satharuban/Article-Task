import React from "react";

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Article_List from "./Article/article_list";
import Add_Article from "./Article/add_article";
import Article from "./Article/article";
export default function BasicExample() {
  return (
    <React.Fragment>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Article_List}/>
                            <Route exact path='/articles' component={Article_List}/>
                            <Route exact path='/add_article' component={Add_Article}/>
                            <Route exact path='/article/:id' component={Article}/>
                            </Switch>
                    </BrowserRouter>
        </React.Fragment>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/">
    //         <Article_List />
    //       </Route>
    //       <Route exact path="/articles">
    //         <Article_List />
    //       </Route>
    //       <Route exact path="/add_article">
    //         <Add_Article />
    //       </Route>
    //       <Route exact path="/article/:id">
    //         <Article />
    //       </Route>
    //       {/* <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route> */}
    //     </Switch>
    //   </div>
    // </Router>
  );
}
