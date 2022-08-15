import React, { useState } from "react";
import classes from "./Test.module.css";
import { useDispatch } from "react-redux";
import { sendData } from "../../store/TestStore/test-actions";
import { testActions } from "../../store/TestStore/test-slice";
const ElementEdit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const changeTtitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeDescHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const patchedTutorial = {
      id: props.id,
      title: title,
      description: description,
    };
    dispatch(testActions.changeTestItem(patchedTutorial));

    const url = "http://localhost:8000/api/tutorials";
    dispatch(sendData(url, patchedTutorial));
  };

  return (
    <form className={classes.overlay} onSubmit={submitHandler}>
      <label>Title</label>
      <input type="text" onChange={changeTtitleHandler} value={title} />
      <label>Description</label>
      <input type="text" onChange={changeDescHandler} value={description} />
      <button type="submit">Edytuj</button>
      <button onClick={props.onClose}>Close</button>
    </form>
  );
};

export default ElementEdit;

{
  /* <div className={classes.tutorial}>
<h2>{props.title}</h2>
<p>{props.description}</p>
<p>{props.id}</p>
<button onClick={showEditHandler}>Change</button>
</div> */
}


//   let str =
//     "cokolwiek /bold/powiem ci/bold/ cos/nextl/ /link/jeszcze/link/ /bold/czego nie/bold/ wiem /addresses/www.facebook.pl";

//   console.log(str.split("/addresses/"));
//   const cos5 = str.split("/addresses/");

//   const cos1 = cos5[0].split("/nextl/").map((item) => <div>{item}</div>);
//   const cos2 = [];
//   cos1.forEach((item) => cos2.push(item.props.children));
//   // console.log(cos2);

//   return (
//     <ul className={classes.uploadbar}>
//       {cos2.map((item) => (
//         <div>
//           {item.split("/bold/").map((item2, index) => (
//               <li>{index & (2 !== 0) ? <b>{<li>{item2.split("/link/").map((item3,index) => <li>
//               {index % 2 !== 0 ? <a href="">{item3}</a> : item3}
//             </li>)}</li>}</b> : <li>{item2.split("/link/").map((item3,index) => <li>
//                           {index % 2 !== 0 ? <a href="">{item3}</a> : item3}
//                         </li>)}</li>}</li>
//           ))}
//         </div>
//       ))}
//     </ul>
//   );
// };