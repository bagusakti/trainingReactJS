import { Component } from "react";

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teachers: []
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/teachers')
        .then(response => response.json())
        .then(data => this.setState({teachers: data}));
    }

    render() {
        return (
            <div>
                <h1>Blogs</h1>
                <p>This is the blogs page</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        {this.state.teachers.map((teacher, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.major}</td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        );
    }
}

export default Blogs;

