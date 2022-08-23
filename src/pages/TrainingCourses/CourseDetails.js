import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Output from "../../UI/Output/Output";
import Banner from "../../components/Banner/Banner";
import classes from "./CourseDetails.module.css";
import Gallery from "../../components/Gallery/Gallery";

const ListLeft = (props) => {
  return (
    <section className={classes.list_alignLeft}>
      <h3>{props.title}</h3>
      <ul>
        {props.list.map((item, index) => (
          <div className={classes.li_content} key={index}>
            <i className="fa fa-paw"></i>
            <Output text={item} />
          </div>
        ))}
      </ul>
    </section>
  );
};

const ListCenter = (props) => {
  return (
    <section className={classes.list_alignCenter}>
      <ul>
        {props.list.map((item, index) => (
          <Output text={item} key={index} />
        ))}
      </ul>
    </section>
  );
};

const CourseDetails = () => {
  const params = useParams();
  const courses = useSelector((state) => state.courses.coursesContent);
  const course = courses.find((item) => item.link === params.courselink);
  

  const contentList = course.subsite.map((list, index) => (
    <div key={index}>
      {list.content.length > 1 && (
        <>
          {[0, 4, 9].includes(index) ? (
            <ListCenter list={list.content.split("/nl/")} />
          ) : (
            <ListLeft list={list.content.split("/nl/")} title={list.title} />
          )}
        </>
      )}
    </div>
  ));

  return (
    <>
      <Banner id={1} imageURL={course.bannerImage} />
      <div className={classes.wrapper}>
        <h1>{course.title}</h1>
        {contentList}
        <Gallery size="170" source={course.sectionGallery} />
      </div>
    </>
  );
};

export default CourseDetails;
