import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      tests: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async selectStudent(studentId, tests) {
    try {
      const { data } = await axios.get(`/student/${studentId}`);
      this.setState({selectedStudent: data});
      this.setState({tests: tests});
    } catch (err) {
      console.error(err);
    }
  }

  async getStudents() {
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Click me</th>
            </tr>
              <StudentList students={this.state.students} selectStudent={this.selectStudent} />
          </tbody>
        </table>
        {this.state.selectedStudent ? <SingleStudent selectedStudent={this.state.selectedStudent} tests={this.state.tests} /> : ''}
      </div>
    );
  }
}
