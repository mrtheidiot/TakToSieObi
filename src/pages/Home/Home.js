import HomeSection from "./HomeSection";
import useHTTP from "../../hooks/useHTTP";
import { getHomePageData } from "../../store/API/api-functions";
import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
// import Add_HomeSection from "./SectionActions/Add";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent } from "../../store/fetch-actions";
import { fetchContent } from "../../store/fetch-actions";
import Add_HomeSection from "./SectionActions/Add"; 

const url =
  "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json";

export const MainPage = () => {
  const [showAddOverlay, setShowAddOverlay] = useState(false);
  const requestState = useSelector((state) => state.ui.requestState);
  // const { sendRequest, status, error, data } = useHTTP(getHomePageData, true);
  const content1 = useSelector((state) => state.home.homePageContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(url, "home"));
  }, [dispatch]);
  let content = [];

  // if (status === "loading") {
  //   content = <p>Loading...</p>;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  if (requestState.status === "completed" && content1.length > 0) {
    content = content1.map((section) => (
      <HomeSection
        id={section.id}
        key={section.id}
        title={section.title}
        content={section.content}
        btn1ID={section.button_1}
        // btn2ID={section.button_2}
      />
      // <div>Home</div>
    ));
  }

  const showAddHandler = () => {
    setShowAddOverlay(prevState => !prevState);
  };

  const onDelete = () => {
    dispatch(deleteContent("-N8nb908N92-9aUvmzqf"));
  };

  return (
    <>
      <Banner id={3} message="Witaj w TakToSięObi!" />
      <div className={classes.mainpage__main}>
        <div className={classes.mainpage__heading}>
          Witaj w Tak to się Obi!
          <br></br>
          Przedstawię Ci stronę, żebyś wiedział o co tu w ogóle chodzi:
        </div>
        {content}
      </div>
      {/* <Add_HomeSection /> */}
      <button onClick={onDelete}>Delete Button</button>
      <button onClick={showAddHandler}>Add new section</button>
      {showAddOverlay && <Add_HomeSection onClose={showAddHandler} />}
    </>
  );
};

export default MainPage;

/* <Banner id={5} />
<div className={classes.mainpage__main}>
  <div className={classes.mainpage__heading}>
    Witaj w Tak to się Obi!
    <br></br>
    Przedstawię Ci stronę, żebyś wiedział o co tu w ogóle chodzi:
  </div>
  <MainPageSection2 />
  {sectionContent.map((section, index) => (
    <MainPageSection
      text1={section.text1}
      text2={section.text2}
      buttons={section.buttons}
      key={index}
    />
  ))}
  <div className={classes.mainpage__heading}>Do zobaczenia!</div>
</div>
</> */

// "Prowadzę treningi indywidualne oraz grupowe teamów na różnym poziomie zaawansowania – tym zajmuję się w ramach mojej szkoły, która nazywa się Tak to się Obi.";
// const sectionContent = [
//   {
//     buttons: [
//       {
//         preLink: 2,
//         category: "Facebook",
//         internal: 0,
//         link: "https://www.facebook.com/PiesPotrafi",
//       },
//       {
//         preLink: 1,
//         category: "PiesPotrafi.pl",
//         internal: 0,
//         link: "https://www.piespotrafi.pl",
//       },
//     ],
//     text1:
//       "Niektóre kursy i wydarzenia prowadzę z ramienia szkoły, z którą współpracuję od 2018 roku – Szkoła na 6 Łap Piespotrafi.pl w Szczecinie. Tam zobaczycie mnie jak prowadzę zajęcia grupowe z posłuszeństwa na co dzień, przedszkola dla papisiów oraz konsultacje i treningi indywidualne w przypadku problemów behawioralnych psa.",
//   },
//   {
//     buttons: [
//       {
//         preLink: 3,
//         category: "Asortyment",
//         internal: 1,
//         link: "/asortyment",
//       },
//     ],
//     text1:
//       "Na swojej drodze budowania doświadczenia zebrałam wnioski i stworzyłam swój mały warsztat. Można zatem za moim pośrednictwem zaopatrzyć się w niezbędne (według mnie) akcesoria do treningu.",
//   },
//   {
//     buttons: [
//       {
//         preLink: 1,
//         category: "Kalendarz",
//         internal: 1,
//         link: "/kalendarz",
//       },
//     ],
//     text1:
//       "Kursów do wyboru jest mnóstwo, aż można się pogubić. Wszystkie nadchodzące wydarzenia zawsze będą ze stosownym wyprzedzeniem dodane do kalendarza. Podam też informacje kto jest organizatorem danego wydarzenia. Uwaga: w zależności od kursu zapisy są dokonywane na inne sposoby – czytaj uważnie, tam będzie wszystko napisane. Nawet będą linki do zapisów! Pomyślałam o wszystkim.",
//   },
//   {
//     buttons: [
//       {
//         preLink: 3,
//         category: "Kontakt",
//         internal: 1,
//         link: "/kontakt",
//       },
//     ],
//     text1:
//       "Jeśli coś budzi Twoje wątpliwości lub nie wiesz na jaki rodzaj kursu powinieneś się wybrać – napisz do mnie sms albo wiadomość na fb.",
//   },
// ];
