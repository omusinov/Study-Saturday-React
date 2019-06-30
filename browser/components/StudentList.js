import React from 'react';

const StudentList = (props) => {
    const students = props.students;
    return (
        students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td><a href="#" onClick={ () => props.selectStudent(student.id, student.tests) } > Details </a></td>
              </tr>
            );
        })
    )
}

export default StudentList;