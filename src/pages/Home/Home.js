import { useEffect } from "react";

import Banner from "../../components/Banner/Banner";
import HomeSection from "./HomeSection";
import Actions from "./HomeActions/Actions";
import AddSection from "../../components/Edit/AddSection";

import { useSelector, useDispatch } from "react-redux";
import { fetchStoreContent } from "../../store/fetch-actions";


import classes from "./Home.module.css";

export const MainPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(
      fetchStoreContent(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json",
        "home"
      )
    )
  },[dispatch])

  const homePageContent = useSelector((state) => state.home.homePageContent);
  const error = useSelector((state) => state.home.error);

  return (
    <>
      <Banner id={3} />
      <div className={classes.mainpage__main}>
        <div className={classes.mainpage__heading}>
          Witaj w Tak to się Obi!
          <br></br>
          Przedstawię Ci stronę, żebyś wiedział o co tu w ogóle chodzi:
        </div>
        {error && <p>{error}</p>}
        {homePageContent.map((section) => (
          <HomeSection
            id={section.id}
            key={section.id}
            contentPart1={section.contentPart1}
            contentPart2={section.contentPart2}
            contentPage3={section.contentPage3}
          />
        ))}
      </div>
      <AddSection>
        <Actions />
      </AddSection>
    </>
  );
};

export default MainPage;

/* /* <Banner id={5} />
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
