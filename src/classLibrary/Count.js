import { Component } from "react";

//Membuat Function untuk Menghitung
function Count(props) {
    return (
      <div>
        <h2>Hasil dari {props.fNumber} + {props.lNumber} adalah {parseInt(props.fNumber) + parseInt(props.lNumber)}</h2>
      </div>
    )
  }

export default Count;


