import { Component } from "react";

//Membuat Class untuk Data
class Data extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {name: 'Rizky', age: 22},
          {name: 'Tezy', age: 21},
          {name: 'Bagyo', age: 20}
        ]
      }
    }

    render = () => {
      return (
        <div class="Data">
          <div class="title">
            <h1>Data Siswa</h1>
          </div>
          <div class="list">
            <ul>
              <h3>
              {this.state.data.map((student) => {
                return <li>{student.name} - {student.age}</li>
              })}
              </h3>
            </ul>
          </div>
          <div class="table">
            <table border="1">
              <tr>
                <th>Nama</th>
                <th>Umur</th>
              </tr>
              {this.state.data.map((student) =>
                <tr>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      )
    }
  }

  export default Data;

