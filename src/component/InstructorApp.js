import React, { Component } from 'react';
import ListCoursesComponent from './ListCourseComponent';
import CourseComponent from './CourseComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

class InstructorApp extends Component {
    render() {
        return (<>
            <h1>Instructor Application</h1>
            
            <Router>
                <Switch>
                    <Route path="/" exact component={ListCoursesComponent} />
                    <Route path="/courses" exact component={ListCoursesComponent} />
                    <Route path="/courses/:id" component={CourseComponent} />
                </Switch>
            </Router>
        </>
        )
    }
}

export default InstructorApp