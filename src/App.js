// import logo from './logo.svg';
import Header from './Componets/Header';
import Student from './Componets/Student';
import './App.css';
import {useState} from 'react';
import studentsData from './StudentData'
function App() {

  const [students] = useState(studentsData);

  return (
    <div className="App">
        <Header />
        <div className="Students">
          {students.map(student =>{
            return <Student name={student.name} bio={student.bio} scores={student.scores} key={student.name}/>
          })}
        </div>
    </div>
  );
}

export default App;
