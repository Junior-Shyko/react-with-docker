import React  from "react";
import { useEffect } from "react";
import {api} from "../../services/Api";

export const Edit = (params) => {

  console.log(params)
  var url = params.location.pathname;
  console.log({url})
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
       console.log(response)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


    return (
      <div>
        <div className="col">
          <div className="form-group">
            <label>Nome da Turma -</label>
            <input type="text" id="nameTeams" name="name" className="form-control" />           
          </div>
        </div>
      </div>
    )
}