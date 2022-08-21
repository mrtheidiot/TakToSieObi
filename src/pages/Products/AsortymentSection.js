import "./AsortymentSection.css";
import { Link } from 'react-router-dom';

const AsortymentSection = (props) => {
  const styles2 =
    props.ifReverse === 0 ? "asortymentsection-1" : "asortymentsection-1 asortymentsection-1-bgchange";
  const styles3 = 
    props.ifReverse === 0 ? "asortymentsection-7 linksbg__1" : "asortymentsection-7 linksbg__2";
  return (
    <div className={styles2}>
        <div className="asortymentsection-2">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="asortymentsection-3">
          <Link to={props.link}>
            <div className="asortymentsection-4">{props.title}</div>
          </Link>
          <div className="asortymentsection-5">
            <div className="asortymentsection-6">{props.description}</div>
            <div className={styles3}>
              tu beda linki - do zrobienia
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default AsortymentSection;