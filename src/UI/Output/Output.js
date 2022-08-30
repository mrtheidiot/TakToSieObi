import { Link } from "react-router-dom";

import classes from "./Output.module.css";

const Output = (props) => {
  if (!props.text) {
    return "";
  }

  const p1 = props.text.split("/addresses/");
  const pLink = p1[1] ? p1[1] : "";

  return (
    <>
      <div className={classes.text} data-testid="output">
        {p1[0].split("/nl/").map((item, index) => (
          <div key={index}>
            {item.split("/b/").map((item2, index) => (
              <div key={index}>
                {index & (2 !== 0) ? (
                  <b>
                    {
                      <div>
                        {item2.split("/l/").map((item3, index) => (
                          <div key={index}>
                            {index % 2 !== 0 ? (
                              <Link to={pLink}>{item3}</Link>
                            ) : (
                              item3
                            )}
                          </div>
                        ))}
                      </div>
                    }
                  </b>
                ) : (
                  <div>
                    {item2.split("/l/").map((item3, index) => (
                      <div key={index}>
                        {index % 2 !== 0 ? <a href={pLink}>{item3}</a> : item3}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Output;
