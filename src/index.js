import { reverseArr } from "./examples";
import "./styles.css";

let arrOne = [1, 2, 3, 4, 5, 6];
document.getElementById("app").innerHTML = `
<h1>Hello! </h1>
<h3>Reverse this [${arrOne}]</h3>
${reverseArr(arrOne)}
`;
