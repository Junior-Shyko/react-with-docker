import React, { useState }  from "react";
import { useEffect } from "react";

export default (props) => {
  console.log(props.editteam)
  const [edit, setEdit] = useState([props.editteam]);
  console.log(edit)
    return (
      <div>
        <div className="col">
          <div className="form-group">
            <label>Nome da Turma - {edit.name} </label>
            <input type="text" id="nameTeams" name="name" className="form-control" />           
          </div>
        </div>
      </div>
    )
}