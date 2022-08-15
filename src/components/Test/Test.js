import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { coursesActions } from "../../store/trainingCourses-slice";
import Edit from "../../UI/Actions/Edit";

// import UploadBar from "../UploadBar/UploadBar";

// import useUpload from "../../Temp/hooks/useUpload";

const Test = () => {
  let str =
    "cokolwiek /b/powiem ci/b/ cos/nl/ /l/jeszcze/l/ /b//l/czego nie/l//b/ wiem i sie wiecej /nl/ nie /b/dowiem/b//addresses//treningi, https://www.facebook.pl";
 
    let str2 = "Nazywam się Dorota Alewras. Jestem przede wszystkim /b/ trenerem Obedience/b/ (więcej o mnie i moich psach /l/tutaj/l/), czyli sportowego posłuszeństwa. Skoro tu trafiłeś, pewnie wiesz mniej więcej co to za sport, więc nie będę się tu wdawać w szczegóły./addresses//omnie"
  const cos1 = str2.split("/addresses/");
  const coslink = cos1[1] ? cos1[1] : ""
  return (
    <> 
    <a href="faes" >fejs</a>
    <ul className={classes.uploadbar}>
      {cos1[0].split("/nl/").map((item) => (
        <div>
          {item.split("/b/").map((item2, index) => (
              <li>{index & (2 !== 0) ? <b>{<li>{item2.split("/l/").map((item3,index) => <li>
              {index % 2 !== 0 ? <Link to={coslink}>{item3}</Link> : item3}
            </li>)}</li>}</b> : <li>{item2.split("/l/").map((item3,index) => <li>
                          {index % 2 !== 0 ? <a href={coslink}>{item3}</a> : item3}
                        </li>)}</li>}</li>
          ))}
        </div>
      ))}
    </ul>
    <Edit />
    </>
  );
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