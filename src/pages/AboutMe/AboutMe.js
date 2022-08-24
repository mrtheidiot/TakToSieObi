import Banner from "../../components/Banner/Banner";
import AboutMeActions from "./Actions/AboutMeActions";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import Gallery from "../../components/Gallery/Gallery";
import { useSelector } from "react-redux";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  const aboutMeContent = useSelector((state) => state.aboutme.aboutMeContent);
  const error = useSelector(state => state.aboutme.error)
  const editMode = useSelector((state) => state.ui.editMode);

  const sectionClasses = `${classes.wrapper} display-flex`;

  return (
    <div>
      <Banner id={3} />
      {error && error}
      {aboutMeContent.map((section) => (
        <section className={sectionClasses} key={section.id}  data-testid="aboutme-mainsection">
          <div className={classes.content} data-aos={editMode ? "" : "fade-up"}>
            <h3 className={classes.title}>{section.title}</h3>
            <div className={classes.parts}>
              {section.parts.map((part) => (
                <p key={part.id}>{part.text}</p>
              ))}
            </div>
            <div className={classes.sideImage}>
              <img src={section.sideImage} />
            </div>
            {editMode && (
              <AddOrEdit edit={true}>
                <AboutMeActions id={section.id} />
              </AddOrEdit>
            )}
          </div>
          {section.sectionGallery && (
            <Gallery size="170" source={section.sectionGallery} />
          )}
        </section>
      ))}
      {editMode && (
        <AddOrEdit edit={false}>
          <AboutMeActions />
        </AddOrEdit>
      )}
    </div>
  );
};

export default AboutMe;

// import React from "react";
// import classes from "./AboutMe.module.css";
// import ImageItem from "../../UI/ImageItem/ImageItem";
// import dorotka from "./../../assets/dorotka.jpg";
// import rivia from "./../../assets/plaza.png";
// import Banner from "../../components/Banner/Banner";

// import d1 from "./../../assets/dyplomy/d1.jpeg";
// import d2 from "./../../assets/dyplomy/d2.jpg";
// import d3 from "./../../assets/dyplomy/d3.jpg";
// import d4 from "./../../assets/dyplomy/d4.jpg";
// import d5 from "./../../assets/dyplomy/d5.jpg";
// import d6 from "./../../assets/dyplomy/d6.jpg";
// import d7 from "./../../assets/dyplomy/d7.png";
// import d8 from "./../../assets/dyplomy/d8.jpg";
// import d9 from "./../../assets/dyplomy/d9.png";
// import d10 from "./../../assets/dyplomy/d10.jpg";

// import r1 from "./../../assets/rivia/r1.jpg";
// import r2 from "./../../assets/rivia/r2.jpg";
// import r3 from "./../../assets/rivia/r3.jpg";
// import r4 from "./../../assets/rivia/r4.jpg";
// import r5 from "./../../assets/rivia/r5.jpg";
// import r6 from "./../../assets/rivia/r6.jpg";
// import r7 from "./../../assets/rivia/r7.jpg";
// import r8 from "./../../assets/rivia/r8.png";
// import r9 from "./../../assets/rivia/r9.png";
// import r10 from "./../../assets/rivia/r10.png";
// import riv2 from './../../assets/rivia/riv2.jpg';
// import riv3 from './../../assets/rivia/riv3.jpg';
// import riv1 from './../../assets/rivia/riv1.jpg';

// import j1 from "./../../assets/joker/j1.jpg";
// import j2 from "./../../assets/joker/j2.jpg";
// import j3 from "./../../assets/joker/jok2.jpg";
// import j4 from "./../../assets/joker/j4.jpg";
// import j5 from "./../../assets/joker/j5.jpg";
// import j6 from "./../../assets/joker/j6.jpg";
// import j7 from "./../../assets/joker/jok1.jpg";
// import j8 from './../../assets/joker/jok3.jpg';
// import j9 from './../../assets/joker/j8.jpg';
// import j10 from './../../assets/joker/jok4.jpg';

// const AboutMe = () => {
//   return (
//     <>
//       <Banner id={2} />
//       <div className={classes.wrapper}>
//         <div className={classes.naglowek}>
//           <div className={classes.nag1}>JA:</div>
//           {/* <div className={classes.nag2}>Ja:</div> */}
//           <div className={classes.nag3}>Nazywam sie Dorota Alewras.</div>
//         </div>
//         <br></br>
//         <div className={classes.content_wrapper}>
//           <div className={classes.content_text}>
//             <div className={classes.text}>
// Prowadzę szkołę sportowego posłuszeństwa Tak to się Obi, a poza
// tym współpracuję w charakterze trenera ze szczecińską Szkołą na 6
// Łap. Tam zajmuję się posłuszeństwem na co dzień oraz przypadkami
// psów problematycznych, a zwłaszcza agresywnych.
//             </div>
//             <br></br>
//             <div className={classes.text}>
// Do zainteresowania psami i sportami kynologicznymi w pokrętny
// sposób trafiłam zaczynając od koni. Te zwierzęta to wciąż moja
// największa pasja i - jak tylko będę miała możliwość - zamierzam
// wrócić do jeździectwa. Tak czy inaczej, życie potoczyło się swoją
// ścieżką i doprowadziło mnie (przynajmniej na razie) do psiego
//               świata.
//             </div>
//             <br></br>
//             <div className={classes.text}>
// Jeśli chodzi o kynologiczne aktywności, najbardziej interesuje
// mnie (to zresztą mało powiedziane) - UWAGA, NIESPODZIANKA -
// obedience! Zachwyca mnie poziom komunikacji i porozumienia między
// psem i przewodnikiem, którzy wspólnie trenują ten sport. Zresztą
// od dziecka marzyłam o psie, który będzie reagował na każdą moją
// komendę słowną lub gest (chciałam też kiedyś równie posłusznego
// dinozaura, ale najpierw ogarnę swoje bordery). Niektórym obedience
// kojarzy się ze ślepym posłuszeństwem oraz psami-robotami, ale
// wierzcie mi, że nie ma nic dalszego od prawdy. Żeby pies tak
// chętnie i bezwarunkowo wykonywał polecenia, jego motywacja musi
// być niesamowicie wysoka, a zaprawdę powiadam Wam - nie da się tego
// osiągnąć bez gigantycznego zaangażowania przewodnika, mnóstwa
// zabawy z psem i generalnie spędzania z nim wielu godzin
// tygodniowo, dając mu dużo od siebie. Co i jak dawać (i brać) -
// dowiesz się na treningach ze mną :)
//             </div>
//             <br></br>
//             <div className={classes.text}>
// Dodatkowo ciekawi mnie obrona oraz pasienie owiec, które robi
// niesamowitą robotę psychologiczną.
//             </div>
//             <br></br>
//             <div className={classes.text}>
// W tym miejscu warto zaznaczyć, że jestem z wykształcenia
// psychologiem i gdybym tylko mogła przeżyć kilka żyć jednocześnie,
// to zawodowo poszłabym również w tę stronę. Póki co psy. Ale moje
// zainteresowanie psychopatią nie jest bez znaczenia, jeśli spojrzeć
// na to, jaką rasę psów sobie upodobałam.
//             </div>
//             <div className={classes.text}>
// A są to border collie. Wiem, zdumiewające - w świecie obedience ze
// świecą szukać bordera.
//             </div>
//             <div className={classes.text}>
//               Ja mam dwa, o których rozpisałam się w dedykowanych im sekcjach :)
//             </div>
//             <div className={classes.text}>
// Poniżej znajdują się dowody mojej kynologicznej edukacji. Będę
// dokładać wszelkich starań, żeby takich zdjęć było coraz więcej, bo
// i my, i psy, i metody wciąż się zmieniają - trzeba być na bieżąco.
//             </div>
//           </div>
//           <div className={classes.content_picture}>
//             <img src={dorotka} />
//           </div>
//         </div>
//         <div className={classes.gallery__wrapper}>
//           <div className={classes.gallery}>
//             <ImageItem img={d7} alt="alt" />
//             <ImageItem img={d2} alt="alt" />
//             <ImageItem img={d3} alt="alt" />
//             <ImageItem img={d8} alt="alt" />
//             <ImageItem img={d9} alt="alt" />
//           </div>
//           <div className={classes.gallery}>
//             <ImageItem img={d6} alt="alt" />
//             <ImageItem img={d1} alt="alt" />

//             <ImageItem img={d4} alt="alt" />
//             <ImageItem img={d5} alt="alt" />
//             <ImageItem img={d10} alt="alt" />
//           </div>
//         </div>
//         <hr className={classes.hr1}></hr>
//         <div className={classes.naglowek}>
//           <div className={classes.nag1}>RIVIA:</div>
//           <div className={classes.nag2}></div>
//           <br></br>
//           <div className={classes.nag3}>
//             ANIMA DE RIVIA Natalaland „Rivia” (dla przyjaciół Buba).
//           </div>
//         </div>
//         <br></br>
//         <div className={classes.content_wrapper}>
//           <div className={classes.content_text}>
//             <div className={classes.text}>
//               Przepiękna, mądra sunia, która miała być miszczem obedience, ale
//               chyba nie będzie. Mój pierwszy pies nie licząc najwspanialszego
//               jamnika Floyda, z którym się wychowałam. Tego bezskutecznie
//               próbowałam nauczyć podawać łapę i kto wie - może to właśnie ta
//               porażka dydaktyczna obudziła we mnie determinację do uprawiania
//               sportowego posłuszeństwa?
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Z Rivią amatorsko próbowałyśmy większości znanych mi aktywności,
//               tj. obedience, pasienie, agility, frisbee, fitness. Generalnie we
//               wszystkim jest dobra, ale póki co w niczym wybitna. Planuję dalej
//               szukać czegoś, co będzie dla niej przyjemnością, ale nie odpuścimy
//               sobie obi. Osiągniemy coś lub nie, ale będziemy walczyć i bawić
//               się treningami. Na ten moment mamy na koncie start w zawodach
//               treningowych, na których stwierdzono u niej „potencjał”.
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Na pewno bardzo dużo mnie ten pies nauczył, pomimo umiarkowanego
//               will to please i względnej bezproblemowości, ma swoje za uszami.
//               Największym naszym wyzwaniem w pracy jest szybka eskalacja
//               frustracji i ogólnie praca z emocjami w treningu, więc na ten
//               temat już mam potężne doświadczenie dzięki niej.
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Życiowo jest wspaniałym towarzyszem, bardzo delikatna z natury -
//               prawdziwa dama. Zobaczymy, dokąd nas poniesie ta wspólna droga :)
//             </div>
//             <br></br>
//             {/* - "obiecujący" start w zawodach treningowych podczas III Otwartych Mistrzostw Polski BC i OA w Szczecinie (09.2021) */}
//             <div className={classes.text2}>
//                 <div className={classes.osiagniecia}>
//                 Osiągnięcia:
//                 </div>
//                 <br></br>
//                  - "obiecujący" start w zawodach treningowych podczas III Otwartych Mistrzostw Polski BC i OA w Szczecinie (09.2021)
//                  <br></br>
//                  <br></br>
//                  - start w zawodach Rally-o w klasie Standard; pierwsza z trzech wymaganych "łapek" do wyższej klasy
//             </div>

//             <br></br>
//           </div>
//           <div className={classes.content_picture}>
//             <img src={rivia} />
//           </div>
//         </div>
//         <div className={classes.gallery__wrapper}>
//           <div className={classes.gallery}>
//             <ImageItem img={r5} alt="alt" />
//             <ImageItem img={r2} alt="alt" />
//             <ImageItem img={riv3} alt="alt" />
//             <ImageItem img={riv1} alt="alt" />
//             <ImageItem img={r9} alt="alt" />
//           </div>
//           <div className={classes.gallery}>
//             <ImageItem img={r1} alt="alt" />
//             <ImageItem img={r6} alt="alt" />
//             <ImageItem img={r7} alt="alt" />
//             <ImageItem img={r8} alt="alt" />
//             <ImageItem img={riv2} alt="alt" />
//           </div>
//         </div>
//         <hr className={classes.hr1}></hr>
//         <div className={classes.naglowek}>
//           <div className={classes.nag1}>JOKER:</div>
//           <div className={classes.nag2}></div>
//           <br></br>
//           <div className={classes.nag3}>
//             F’WHY SO SERIOUS Sonic Workaholic “Joker”.
//           </div>
//         </div>
//         <br></br>
//         <div className={classes.content_wrapper}>
//           <div className={classes.content_text}>
//             <div className={classes.text}>
//               Urodzony w czerwcu 2021 – czyli pandemiczny pies. Mimo to nie
//               wykazuje objawów lęku separacyjnego ;) Pochodzi z linii o
//               predyspozycjach i osiągnięciach w agility oraz obedience. Roboczo
//               nazywany przeze mnie borderową maliną, bo zachowuje się
//               wielokrotnie jak klasyczny belg.
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Piekielnie (to słowo dobrane bardzo świadomie) inteligentny pies,
//               który jak najbardziej ma możliwości na zostanie miszczem
//               obedience. Agility pewnie też, choć to nie moja bajka, więc na
//               tych torach pewnie nie będziemy częstymi gośćmi. Ale spróbować nie
//               zaszkodzi, zwłaszcza, że ten piesek jest wiecznie gotowy na każdą
//               zaproponowaną aktywność. Na ten moment jest to bardzo młody pies
//               (ma 10 miesięcy w chwili, w której piszę ten tekst), więc na razie
//               nie poznał zbyt wielu dyscyplin. Do agility się szykujemy z
//               czystej ciekawości, obedience uprawiamy póki co w warunkach
//               domowych z myślą o pierwszych startach treningowych – ale tu od
//               pierwszej sesji było dla mnie jasne, że jeśli tego nie popsuję to
//               chłopak może zajść naprawdę wysoko. Dodatkowo w najbliższej
//               przyszłości planuję spróbować naszych wspólnych sił w obronie a
//               treningi pasienia już wpisałam w kalendarz jako regularną
//               aktywność. W tym też jest bardzo obiecujący.
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Pies o niezwykle atletycznej, lekkiej budowie, imponująco szybki,
//               zwrotny, a przy tym myślący. To może być pies mojego życia. Na co
//               dzień, poza pracą i spacerem, psa prawie nie ma – śpi w domu wiele
//               godzin, od pierwszego dnia wchodził do klatki i od razu się kładł,
//               nie ma z nim absolutnie żadnych problemów.
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               Na dworze już nieco inaczej to wygląda – przez swoją inteligencję
//               i szybkie reakcje na bodźce życie w centrum miasta jest dla niego
//               bardzo kosztowne. W pierwszym odruchu jest ostrożny wobec niemal
//               każdego obiektu, natomiast nie zamyka się w tych obawach, a po
//               chwili zwątpienia podchodzi z ciekawością sprawdzić z czym ma do
//               czynienia. Wrażliwość na presję jak dla mnie idealna – odpowiada
//               szybko na nawet delikatną presję, ale nie peszy go to, po prostu
//               błyskawicznie dopasowuje swoje zachowanie do moich sygnałów i
//               natychmiast jest gotowy do dalszej pracy. Zdecydowanie pies
//               jednego właściciela. Na tę chwilę – odpukać!! – zdrowy jak rydz,
//               stawy idealne, a przy tym pies jest proporcjonalny, silny,
//               umięśniony i piękny :) opinia rzecz jasna obiektywna!
//             </div>
//             <br></br>
//             <div className={classes.text}>
//               W przyszłości planuję wyrobić mu papiery hodowlane.
//             </div>
//           </div>
//           <div className={classes.content_picture}>
//             <img src={j9} />
//           </div>
//         </div>
//         <div className={classes.gallery__wrapper}>
//           <div className={classes.gallery}>
//             <ImageItem img={j5} alt="alt" />
//             <ImageItem img={j1} alt="alt" />
//             <ImageItem img={j4} alt="alt" />
//             <ImageItem img={j6} alt="alt" />
//           </div>
//           <div className={classes.gallery}>
//             <ImageItem img={j8} alt="alt" />
//             <ImageItem img={j3} alt="alt" />
//             <ImageItem img={j7} alt="alt" />
//             <ImageItem img={j10} alt="alt" />
//           </div>
//         </div>
//         <hr className={classes.hr1}></hr>
//       </div>
//     </>
//   );
// };

// export default AboutMe;
