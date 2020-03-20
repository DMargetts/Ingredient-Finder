import React from "react";

const Output = props => {
  if (props.ingredients.length === 0) {
    return <p>Awaiting</p>;
  } else {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Certainty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.ingredients[0]}</td>
              <td>{props.probability[0]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[1]}</td>
              <td>{props.probability[1]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[2]}</td>
              <td>{props.probability[2]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[3]}</td>
              <td>{props.probability[3]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[4]}</td>
              <td>{props.probability[4]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[5]}</td>
              <td>{props.probability[5]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[6]}</td>
              <td>{props.probability[6]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[7]}</td>
              <td>{props.probability[7]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[8]}</td>
              <td>{props.probability[8]}</td>
            </tr>
            <tr>
              <td>{props.ingredients[9]}</td>
              <td>{props.probability[9]}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default Output;
