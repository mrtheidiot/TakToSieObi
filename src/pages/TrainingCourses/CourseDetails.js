import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Output from "../../UI/Output/Output";
import Banner from "../../components/Banner/Banner";
import classes from "./CourseDetails.module.css";

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
  let course = {
    bannerImage: "",
    title: "",
    list1: [],
    list2title: "",
    list2: [],
    list3title: "",
    list3: [],
    list4title: "",
    list4: [],
    list5: [],
    list6title: "",
    list6: [],
    list7title: "",
    list7: [],
    list8title: "",
    list8: [],
    list9title: "",
    list9: [],
    list10: [],
  };

  if (courses.length !== 0) {
    const thisCourse = courses.find((item) => item.link === params.courselink);
    console.log(thisCourse)
    course = {
      bannerImage: thisCourse.bannerImage,
      title: thisCourse.title,
      list1: thisCourse.list1.split("/nl/"),
      list2title: thisCourse.title2,
      list2: thisCourse.list2.split("/nl/"),
      list3title: thisCourse.title3,
      list3: thisCourse.list3.split("/nl/"),
      list4title: thisCourse.title4,
      list4: thisCourse.list4.split("/nl/"),
      list5: thisCourse.list5.split("/nl/"),
      list6title: thisCourse.title6,
      list6: thisCourse.list6.split("/nl/"),
      list7title: thisCourse.title7,
      list7: thisCourse.list7.split("/nl/"),
      list8title: thisCourse.title8,
      list8: thisCourse.list8.split("/nl/"),
      list9title: thisCourse.title9,
      list9: thisCourse.list9.split("/nl/"),
      list10: thisCourse.list10.split("/nl/"),
    };
  }

  console.log(course.list3);

  return (
    <>
      <Banner id={1} imageURL={course.bannerImage} />
      <div className={classes.wrapper}>
        <h1>{course.title}</h1>
        <div>
          <ListCenter title={course.title} list={course.list1} />
          {course.list2.length > 1 && (
            <ListLeft list={course.list2} title={course.list2title} />
          )}
          {course.list3.length > 1 && (
            <ListLeft list={course.list3} title={course.list3title} />
          )}
          {course.list4.length > 1 && (
            <ListLeft list={course.list4} title={course.list4title} />
          )}
          <ListCenter list={course.list5} />
          {course.list6.length > 1 && (
            <ListLeft list={course.list6} title={course.list6title} />
          )}
          {course.list7.length > 1 && (
            <ListLeft list={course.list7} title={course.list7title} />
          )}
          {course.list8.length > 1 && (
            <ListLeft list={course.list8} title={course.list8title} />
          )}
          {course.list9.length > 1 && (
            <ListLeft list={course.list9} title={course.list9title} />
          )}
          <ListCenter list={course.list10} />
        </div>
      </div>
      ;
    </>
  );
};

export default CourseDetails;
