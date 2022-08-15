import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Output.module.css'

const Output = (props) => {

  const cos1 = props.text.split("/addresses/");
  const cos2 = cos1[1] ? cos1[1].split(",") : ""
  const coslink = cos1[1] ? cos1[1] : ""

  return (
    <> 
    <ul className={classes.text}>
      {cos1[0].split("/nl/").map((item, index) => (
        <div key={index}>
          {item.split("/b/").map((item2, index) => (
              <ul key={index}>{index & (2 !== 0) ? <b>{<ul>{item2.split("/l/").map((item3,index) => <li key={index}>
              {index % 2 !== 0 ? <Link to={coslink}>{item3}</Link> : item3}
            </li>)}</ul>}</b> : <ul>{item2.split("/l/").map((item3,index) => <li key={index}>
                          {index % 2 !== 0 ? <a href={coslink}>{item3}</a> : item3}
                        </li>)}</ul>}</ul>
          ))}
        </div>
      ))}
    </ul>
    </>
  );
}

export default Output