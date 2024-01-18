import React, {useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import { Heading, SubHeading, Banner, BannerImage, NavLinkApply, AboutContent} from './style';
import CountdownTimer from './CountdownTimer';

const SkiTrips = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <SkiTripsWrapper>
    <SkiTripsBackground>
      <AboutContent>
        <Content>
          <Heading>Kauden tulevat laskettelureissut</Heading>
          <BannerImage src="https://i.imgur.com/Uc2zeOM.png" alt="Juuri nyt" />
          <p></p>
          {/* <CountdownTimer /> */}
        </Content>
      </AboutContent>
    </SkiTripsBackground>
    <ExtraInfoBox>
        <button onClick={toggleTextVisibility}>
          {isTextVisible ? "Piilota" : "MATKAEHDOT"}
        </button>
        {isTextVisible && (
          <div>
            {}
            <p>TESKI MATKAEHDOT: General terms for Teski tours.</p>
<div>
<p>1. Nämä matkaehdot ovat nähtävillä Teskin virallisilla internetsivuilla https://teknillinenskimbakerho.github.io/teski/. Pyynnöstä ehdot voi saada myös sähköpostilla.
1. These general terms can be seen on Teski’s official internet page https://teknillinenskimbakerho.github.io/teski/ When requested, terms can be sent via e-mail.
</p>
<p>
2. Kaikkien Teskin matkoille osallistuvien on oltava täysi-ikäisiä ja Teskin jäseniä, ellei muuten mainita. Jäsenmaksu tulee olla suoritettuna viimeistään matkan alkaessa.
2. All the attendants in Teski tours must be adults and members of Teski, if not noted otherwise. Membership fee must be paid before the tour begins.
</p>
3. Näissä matkaehdoissa Teskistä käytetään nimitystä matkanjärjestäjä. 
3. In these terms Teski is known as a tour operator. 
<p>
4. Matkustajaa sitova sopimus syntyy, kun matkustaja ilmoittautuu matkalle. 
4. The Passenger is bound after he/she has enrolled to the tour. 
</p>
5. Ilmoittautumalla matkalle, matkustaja sitoutuu noudattamaan näitä matkaehtoja.
5. By enrolling in the tour, the passenger binds to comply with these terms.
<p>
6. Matkan maksu suoritetaan ilmoittautumisen yhteydessä sovitulla tavalla. Mikäli matkustaja ei maksa matkan maksuja eräpäivän jälkeen tulleesta maksumuistutuksesta huolimatta, matkanjärjestäjällä on oikeus perua matkustajan ilmoittautuminen. Tällöin matkanjärjestäjällä on oikeus pidättää matkan etumaksu, joka ilmoitetaan matkakohtaisesti. Mikäli peruutuksen todelliset kulut ovat etumaksua suuremmat, on matkanjärjestäjällä oikeus veloittaa nämä kulut matkustajalta. Matkustaja voi itse perua ilmoittautumisensa pykälän 25 mukaan.
6. Terms of payment are confirmed during the enrollment. If the passenger has not paid the price of the tour despite a payment reminder, the tour operator has the right to cancel their enrollment. The tour operator has the right to withhold the advance payment which is stated when signing up. If the actual costs of cancellation are higher than the advance payment, the tour operator has the right to charge these costs from the passenger. The passenger can cancel their enrollment by following section 25.
</p>
Matkanjärjestäjän oikeudet ja velvollisuudet: The tour operator’s rights and responsibilities:
<p>
7. Matkanjärjestäjällä on oikeus peruuttaa matka - mikäli matkalle ei ole lähdössä riittävästi matkustajia. - mikäli matkan kustannukset nousevat huomattavasti. - mikäli matkanjärjestäjän mahdollisuudet toteuttaa matka sovitulla tavalla olennaisesti vaikeutuu matkakohteessa tai sen läheisyydessä ilmenneiden sotatoimien, luonnonmullistusten, lakon tai vastaavan tilanteen takia, taikka jos matkaa ei muusta odottamattomasta syystä voida toteuttaa vaarantamatta matkustajan henkeä tai terveyttä. 
7. The tour operator has the right to cancel the tour if- a minimum number of passengers enrolled for the tour has not been reached.- the costs of the tour are considerably increased.- the tour operator’s possibilities to carry out the tour as agreed have become significantly worse after concluding the contract due to events beyond tour operator's control. For instance, an action of war, natural disaster or strike at or near the destination.
</p>
8. Peruuttamisesta on ilmoitettava matkustajalle niin pian kuin mahdollista.
8. The passenger must be informed about the cancellation as soon as possible. 
<p>
9. Mikäli matka peruutetaan muista kuin matkustajasta johtuneista syistä, on matkanjärjestäjän palautettava matkustajalle koko maksettu hinta, joka jää jäljelle peruuttamisesta aiheutuneiden menojen jälkeen.
9. If the tour is cancelled due to other than passenger associated reasons the passenger is entitled to a refund, however the tour operator has a right to withhold the costs of cancellation from the refund. 
</p>
10. Mikäli matka joudutaan matkanjärjestäjästä riippumattomista syistä keskeyttämään, on matkanjärjestäjän palautettava matkustajalle toteuttamatta jäänyttä osaa vastaava hinta kuitenkin siten, että keskeytyksestä aiheutuvat kulut saadaan hoidettua.
10. If the tour is interrupted due to other than tour operator associated reasons, the tour operator must refund the part of the tour price that corresponds to the service he/she did not receive, however the tour operator has a right to withhold the costs caused by the interruption.
<p>
11. Matkanjärjestäjällä on oikeus muuttaa matkakohdetta tarvittaessa, kuitenkin niin, ettei matkustajille aiheudu tästä kustannuksia eikä matkakohteen hiihdollinen taso laske huomattavasti. Matkanjärjestäjän on ilmoitettava muutoksista välittömästi matkustajille. 
11. The tour operator has a right to change the tour destination if needed, however as so that there will be no extra costs to the passenger and the quality of the skiing possibilities in the destination is not reduced considerably. The tour operator must inform the passenger about the changes immediately.
</p>
12. Matkanjärjestäjä ei vastaa matkustajalle tapahtuvista henkilö-, esine-, vastuu- tai varallisuusvahingoista.
12. The tour operator is not responsible for damages to passenger’s health, material, liability or wealth. 
<p>
13. Matkanjärjestäjä ei ole vastuussa vahingosta, joka aiheutuu ylivoimaisesta esteestä tai muusta ennalta arvaamattomasta syystä, jota matkanjärjestäjä tai matkanjärjestäjän apunaan käyttämä elinkeinoharjoittaja ei olisi voinut estää. Tällaisia syitä ovat esimerkiksi sotatoimet, luonnonmullistus, tarttuva tauti, lakko tai vastaavat tapahtumat.
13. The tour operator is not responsible for damage caused by a force majeure or other unpredictable incidents that the tour operator or an enterpriser assisting the tour operator could not have prevented even through utmost care. Such events are, for example, an action of war, natural disaster, contagious disease, strike or other similar incidents.
</p>
14. Matkanjärjestäjä on velvollinen ilmoittamaan tarkan lähtöajan ja paikan viimeistään 5 vuorokautta ennen lähtöä WWW-sivuillaan tai sähköpostitse kaikille toimivan sähköpostiosoitteensa ilmoittaneille, mikäli tarkka lähtöaika ja -paikka on mahdollista ilmoittaa. - Mikäli matkanjärjestäjästä riippumattomista syistä lähtöaikaa tai -paikkaa ei voida ilmoittaa, siitä tiedotetaan viimeistään 5 vuorokautta ennen lähtöä. Tässä tapauksessa matkanjärjestäjä ilmoittaa puuttuvat tiedot välittömästi ne saatuaan.
14. The tour operator is obligated to inform the exact departure time and place not later than 5 days before the departure on its website or by e-mail for everyone who have notified their e-mail addresses, if the exact departure time and place is possible to inform. - If the departure time and place cannot be informed other than the tour operator associated reasons, it will be announced not later than 5 days before the departure. In this case the tour operator informs passengers immediately after receiving the missing information.
<p>
15. Matkanjärjestäjä on velvollinen ilmoittamaan matkustajalle ns. pakolliset varusteet, joita matkan mukava toteuttaminen vaatii. Näihin kuuluvat mm. makuupussi/lakanat, pyyhe ja kypärä.
15. The tour operator is obligated to inform the passenger about the so-called mandatory equipment which are required to accomplish the tour. These equipment are e.g. a sleeping bag/sheets and a towel and a helmet.
</p>
16. Matkanjärjestäjällä on tarvittaessa oikeus rajoittaa matkustajien matkatavaroiden määrää. 
16. The tour operator has a right to limit the amount of passenger’s baggage.
<p>
17. Mikäli matkustaja ei ole saapunut lähtöpaikalle ennalta määrättyyn lähtöaikaan mennessä, matkanjärjestäjällä ei ole velvollisuutta odottaa myöhässä olevaa matkustajaa. Matkustajalle ei tällöin palauteta hänen maksamiaan maksuja.
17. If the passenger does not arrive to the agreed point of departure at the agreed time, the tour operator is not obligated to wait for the passenger. In this case the passenger is not entitled to a refund.
</p>
18. Matkanjärjestäjä on velvollinen ilmoittamaan mitä matka-asiakirjoja Suomen kansalaisilla tulee olla mukana matkoilla. Matkanjärjestäjä ei ole vastuussa muiden maiden kansalaisten tarvitsemista matka-asiakirjoista. Nämä asiakirjat sisältävät mm. passin ja viisumin.
18. The tour operator is obligated to inform the passenger about the necessary travel documents for Finnish passenger. The tour operator is not responsible for other nationalities necessary travel documents. These travel documents include among other things passport and visa. 
<p>
19. Mikäli matkustajan matka estyy matkustamiseen tarvittavien asiakirjojen, kuten voimassa olevan passin tai viisumin puutteen takia, tai muusta matkustajasta itsestään johtuvasta syystä, ei matkustajalle tällöin palauteta hänen maksamiaan maksuja.
19. If the passenger cannot take part to the tour due to not having the necessary travel documents such as a valid passport or visa, or due to other reasons associated with the passenger, he/she is not entitled to a refund. 
</p>
20. Matkanjärjestäjällä on oikeus jälkikäteen laskuttaa matkustajaa kaikista matkustajan aiheuttamista ylimääräisistä kustannuksista kuten esimerkiksi siivous tai rikkoutunut irtaimisto.
20. The tour operator has a right to charge the passenger afterwards for all the extra cost caused by the passenger, such as the cleaning or a broken furnishing.
<p>
21. Matkanjärjestäjällä on oikeus estää matkustajan pääsy matkalle, mikäli hänellä on aiempia maksamattomia maksuja Teskille.
21. If a passenger has unpaid payments for Teski, the tour operator has a right to prevent the passenger’s access to the tour.
</p>
Matkustajan oikeudet ja velvollisuudet: The passenger’s rights and responsibilities:
<p>
22. Ilmoittautumalla matkalle, matkustaja sitoutuu noudattamaan näitä matkaehtoja. 
22. By enrolling to the tour, the passenger binds to comply with these terms.
</p>
23. Jotta ilmoittautuminen huomioidaan, on matkustajan ilmoittettava matkanjärjestäjälle kaikki matkanjärjestäjän vaatimat tiedot. Matkustaja on itse vastuussa tietojensa oikeellisuudesta ja on velvollinen ilmoittamaan mahdolliset muutokset matkanjärjestäjälle. Mikäli matkustajan ilmoittamien virheellisten tietojen muuttamisesta aiheutuu kustannuksista, vastaa näistä matkustaja.
23. So that the enrollment will be noticed, the passenger must inform all the required information requested by the tour operator. The passenger is responsible for his/her personal information and must inform the tour operator about possible changes. If changes to the passenger incorrectly informed information cause costs, these costs are passengers to pay.
<p>
24. Matkustaja on velvollinen hankkimaan kaikki tarvittavat matka-asiakirjat. Jos matkustaja ei ole Suomen kansalainen on hän vastuussa oman kansalaisuutensa vaatimista matka-asiakirjoista. Matka-asiakirjat tulee olla kaikkiin maihin Suomen ja kohdemaan välillä.
24. The passenger is responsible to acquire all the necessary travel documents. If the passenger’s nationality is other than Finnish, the passenger is responsible to find out which travel documents are required.
</p>
25. Matkustaja on oikeutettu perumaan matkansa ilman erillistä syytä ilmoittamalla siitä kirjallisesti matkanjärjestäjälle. Tällöin matkanjärjestäjällä on oikeus pidättää itsellään matkan etumaksu. Mikäli peruutuksen todelliset kulut ovat suuremmat kuin etumaksu, on matkanjärjestäjällä oikeus veloittaa nämä kulut matkustajalta. 
25. The passenger has a right to cancel the tour without special reason with written notice to the tour operator. In this case the tour operator has a right to withhold the advance payment to the tour. If the actual costs of cancellation are higher than the advance payment, the tour operator has the right to charge these costs from the passenger.
</div>
          </div>
        )}
      </ExtraInfoBox>
    </SkiTripsWrapper>
  );
};

const SkiTripsWrapper = styled.div`
`;

const ExtraInfoBox = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkiTripsBackground = styled.div`
  background-image: url('https://i.imgur.com/8QlVnCl.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: scroll;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 60%; 
    padding: 20px; 
    font-size: 14px; 
  }
`;

export {SkiTrips};