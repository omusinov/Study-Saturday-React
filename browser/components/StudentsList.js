import React from 'react';

const StudentsList = (props) => {
    const students = props.students;
    console.log(students);
    return (
        <div>
            {
                students.map(student => {
                    return <p key={student.id}> {student.fullName} </p>
                })
            }
        </div>
    )
}

export default StudentsList;