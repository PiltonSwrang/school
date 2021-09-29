import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './components/Home';
import Students from './pages/Students/Students';
import Subject from './pages/Subject/Subjects';
import Volunteers from './pages/Volunteer/Volunteers';
//! STUDENTS 
import Addstudent from './pages/Students/Addstudent';
import Editstudent from './pages/Students/Editstudent';
import Viewstudents from './pages/Students/Viewstudents';
import Student from './pages/Students/Student';
//! LIBRARY or BOOKS 
import Books from './pages/Books/Books';
import Book from './pages/Books/Book';
import Addbook from './pages/Books/Addbook';
import Viewsbooks from './pages/Books/Viewsbooks';
import Editbook from './pages/Books/Editbook';
//!EXAM
import Exam from './pages/Exams/Exam';
import Editexam from './pages/Exams/Editexam';
import Exams from './pages/Exams/Exams';
import Viewresults from './pages/Exams/Viewresults';
import Conductexam from './pages/Exams/Conductexam';
import Examresult from './pages/Exams/Examresult';
//!CLASS
import Classes from './pages/Classes/Classes';
import Class from './pages/Classes/Class';
import Editclass from './pages/Classes/Editclass';
import Conductclass from './pages/Classes/Conductclass';
import Viewclasses from './pages/Classes/Viewclasses';
//! VOLUNTEER 
import Addvolunteer from './pages/Volunteer/Addvolunteer';
import Editvolunteer from './pages/Volunteer/Editvolunteer';
import Viewvolunteer from './pages/Volunteer/Viewvolunteer';
import Volunteer from './pages/Volunteer/Volunteer';
//! SUBJECTS
import Viewsubjects from './pages/Subject/Viewsubjects'
import Addsubject from './pages/Subject/Addsubject';
import Editsubject from './pages/Subject/Editsubject';
import Sub from './pages/Subject/Sub';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* //! STUDENTS  */}
          <Route exact path="/students/view-students/:id" component={Student} />
          <Route exact path="/students/view-students/edit-student/:id" component={Editstudent} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/add-student" component={Addstudent} />
          <Route exact path="/students/view-students" component={Viewstudents} />
          {/* //! BOOKS  */}
          <Route exact path="/library/view-library/:id" component={Book} />
          <Route exact path="/library/view-library/edit-book/:id" component={Editbook} />
          <Route exact path="/library" component={Books} />
          <Route exact path="/library/add-book" component={Addbook} />
          <Route exact path="/library/view-library" component={Viewsbooks} />
          <Route exact path="/library/return-book" component={Viewsbooks} />
          <Route exact path="/library/lend-book" component={Viewsbooks} />
          {/* //! EXAM  */}
          <Route exact path="/exams/view-results/:id" component={Exam} />
          <Route exact path="/exams/view-results/edit-exam/:id" component={Editexam} />
          <Route exact path="/exams" component={Exams} />
          <Route exact path="/exams/conduct-exam" component={Conductexam} />
          {/* <Route exact path="/exams/exam-result" component={Examresult} /> */}
          <Route exact path="/exams/view-results" component={Viewresults} />
          {/* //! CLASSES  */}
          <Route exact path="/classes/view-classes/edit-class/:id" component={Editclass} />
          <Route exact path="/classes/view-classes/:id" component={Class} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/classes/conduct-class" component={Conductclass} />
          <Route exact path="/classes/view-classes" component={Viewclasses} />
          {/*//! VOLUNTEER  */}
          <Route exact path="/volunteer/view-volunteers/:id" component={Volunteer} />
          <Route exact path="/volunteer/view-volunteers/edit-volunteer/:id" component={Editvolunteer} />
          <Route exact path="/volunteer" component={Volunteers} />
          <Route exact path="/volunteer/view-volunteers" component={Viewvolunteer} />
          <Route exact path="/volunteer/add-volunteer" component={Addvolunteer} />
          {/* //! SUBJECT  */}
          <Route exact path="/subject/view-subjects/:id" component={Sub} />
          <Route exact path="/subject/view-subjects/edit-subject/:id" component={Editsubject} />
          <Route exact path="/subject" component={Subject} />
          <Route exact path="/subject/add-subject" component={Addsubject} />
          <Route exact path="/subject/view-subjects" component={Viewsubjects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
