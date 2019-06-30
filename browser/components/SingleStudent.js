import React from 'react';

const SingleStudent = (props) => {
    const student = props.selectedStudent;
    const tests = props.tests;
    console.log(tests);
    return (
        <div>
            <h2>{student.fullName}</h2>
            <h4> Average grade  : 
            {
                Math.round(tests.reduce((acc, test) => {
                    acc += Number(test.grade);
                    return acc;
                }, 0)  / tests.length)
            } %
            </h4>
            <table>
            <tbody>
                <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                </tr>
                {
                    tests.map(test => {
                        return (
                            <tr key={test.id}>
                                <td>{test.subject}</td>
                                <td>{test.grade}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default SingleStudent;