import React from 'react';
import axios from 'axios';
import StudentsList from './StudentsList';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/student');
            const students = res.data;
            this.setState({students: students});
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
            <h2> Students List </h2>
                {
                    <StudentsList students={this.state.students} />
                }
            </div>
        )
    }
}
