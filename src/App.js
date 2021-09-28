import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
// import './utils/firebaseConfig'

import Home from './components/Home';
import Students from './pages/Students/Students';
import Subject from './pages/Subject/Subject';
import Volunteer from './pages/Volunteer/Volunteer';
//! STUDENTS 
import Addstudent from './pages/Students/Addstudent';
import Viewstudents from './pages/Students/Viewstudents';
import Student from './pages/Students/Student';
//! LIBRARY or BOOKS 
import Books from './pages/Books/Books';
import Book from './pages/Books/Book';
import Addbook from './pages/Books/Addbook';
import Viewsbooks from './pages/Books/Viewsbooks';
//!EXAM
import Exams from './pages/Exams/Exams';
import Viewresults from './pages/Exams/Viewresults';
import Conductexam from './pages/Exams/Conductexam';
import Examresult from './pages/Exams/Examresult';
//!CLASS
import Classes from './pages/Classes/Classes';
import Conductclass from './pages/Classes/Conductclass';
import Viewclasses from './pages/Classes/Viewclasses';
//! VOLUNTEER 
import Addvolunteer from './pages/Volunteer/Addvolunteer';
import Viewvolunteer from './pages/Volunteer/Viewvolunteer';
//! SUBJECTS
import Viewsubjects from './pages/Subject/Viewsubjects'
import Addsubject from './pages/Subject/Addsubject';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* //! STUDENTS  */}
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/add-student" component={Addstudent} />
          <Route exact path="/students/view-students" component={Viewstudents} />
          <Route exact path="/students/view-students/student" component={Student} />
          {/* //! BOOKS  */}
          <Route exact path="/library" component={Books} />
          <Route exact path="/library/add-book" component={Addbook} />
          <Route exact path="/library/view-library" component={Viewsbooks} />
          <Route exact path="/library/view-library/book" component={Book} />
          <Route exact path="/library/return-book" component={Viewsbooks} />
          <Route exact path="/library/lend-book" component={Viewsbooks} />
          {/* //! EXAM  */}
          <Route exact path="/exams" component={Exams} />
          <Route exact path="/exams/conduct-exam" component={Conductexam} />
          <Route exact path="/exams/exam-result" component={Examresult} />
          <Route exact path="/exams/view-results" component={Viewresults} />
          {/* //! CLASSES  */}
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/classes/conduct-class" component={Conductclass} />
          <Route exact path="/classes/view-classes" component={Viewclasses} />
          {/*//! VOLUNTEER  */}
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/volunteer/view-volunteers" component={Viewvolunteer} />
          <Route exact path="/volunteer/add-volunteer" component={Addvolunteer} />
          {/* //! SUBJECT  */}
          <Route exact path="/subject" component={Subject} />
          <Route exact path="/subject/add-subject" component={Addsubject} />
          <Route exact path="/subject/view-subjects" component={Viewsubjects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
