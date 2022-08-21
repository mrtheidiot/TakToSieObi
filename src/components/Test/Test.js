import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { coursesActions } from "../../store/coursesList-slice";
// import Edit from "../../UI/Actions/Edit";

// import UploadBar from "../UploadBar/UploadBar";

// import useUpload from "../../Temp/hooks/useUpload";

const Test = () => {

  return <div data-aos="fade-up">
  </div>
};

export default Test;

//   let str =
//     "cokolwiek /bold/powiem ci/bold/ cos/nextl/ /link/jeszcze/link/ /bold/czego nie/bold/ wiem /addresses/www.facebook.pl";

//   console.log(str.split("/addresses/"));
//   const cos5 = str.split("/addresses/");

//   const cos1 = cos5[0].split("/nextl/").map((item) => <div>{item}</div>);
//   const cos2 = [];
//   cos1.forEach((item) => cos2.push(item.props.children));
//   // console.log(cos2);

//   return (
    // <ul className={classes.uploadbar}>
    //   {cos2.map((item) => (
    //     <div>
    //       {item.split("/bold/").map((item2, index) => (
    //           <li>{index & (2 !== 0) ? <b>{<li>{item2.split("/link/").map((item3,index) => <li>
    //           {index % 2 !== 0 ? <a href="">{item3}</a> : item3}
    //         </li>)}</li>}</b> : <li>{item2.split("/link/").map((item3,index) => <li>
    //                       {index % 2 !== 0 ? <a href="">{item3}</a> : item3}
    //                     </li>)}</li>}</li>
    //       ))}
    //     </div>
    //   ))}
    // </ul>
//   );
// };