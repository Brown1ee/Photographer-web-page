import Layout from "../components/Layout";

const Clients = () => (
  <Layout>
    <div>
      <h2>wedding day</h2>
      <div className="container">
        <div className="image-and-text">
          <img src="https://www.elizabethannedesigns.com/blog/wp-content/uploads/2013/06/Classic-Wedding-Portrait-From-Kristyn-Hogan-600x399.jpg" />
          <img src="https://content1.getnarrativeapp.com/879352b8-4c94-44b0-af26-a2618505c189/img_ref/84d7bcff-c1b9-430d-a7b2-9788e47c336a/Allie-Harris-271_candid_laughter_couple_Wedding_portrait_1500.jpg" />
        </div>
      </div>
      <div>
        <ul>
          <h3>TERMENI/ CONDIȚII pentru prestația serviciilor foto la nuntă:</h3>
          <li>
            prestez doar servicii fotografice. Mirii de sine stătător aleg
            serviciile video, eu pot doar să recomand;
          </li>
          <li>
            dacă numărul invitaților la nunta dvs. depășește 80 persoane, la
            eveniment vor lucra doi fotografi. Dacă nr e mai mic de 80, e
            posibil să fie și unul, însă asta se discută individual. Nu lucrez
            la evenimente cu 160+ invitați;
          </li>
          <li>
            evenimentul Dvs. trebuie să reprezinte pentru mine un interes
            artistic. Evit nunți clasice moldovenești, tradiții și program
            standart (luatul nașilor de acasă, mersul cu limuzina, spălatul pe
            mâini, etc). Descrieți detaliat evenimentul Dvs. când trimiteți
            cererea pentru ofertă;
          </li>
          <li>
            data nunții se rezervează doar când este dat avansul; restul sumei
            se achită în ziua nunții;
          </li>
          <li>
            întîlnirile prealabile (în ziua rezevrării și cu 1-2 săptămîni
            înaintea nunții) cu fotograful sunt obligatorii, nu doar pentru ca
            să facem cunoștință, dar și, ceea ce este foarte important, să
            cunosc toate detaliile legate de nuntă și să particip în organizarea
            timpului;
          </li>
          <li>
            dvs. trebuie să aveți totală încredere în viziunea mea asupra
            nunții. Pentru mine un rezultat bun contează la fel de mult ca și
            pentru dvs.;
          </li>
          <li>
            am dreptul de autor de a publica o serie de fotografii selectate din
            ziua evenimentului în portfolio propriu/ rețele de socializare, de
            alt fel fotografierea evenimentului Dvs. nu îmi este interesantă;
          </li>
          <li>
            numărul de ore lucrătoare la o nuntă nu trebuie să depășească 12
            ore. Orele adăugătoare se achită aparte;
          </li>
          <li>
            {" "}
            numărul de fotografii primite de la un eveniment de până la 12 ore,
            este de la 800 fotografii, toate editate;
          </li>
          <li>
            fotografiile le primiți printr-un link spre galeria personală
            online, accesibilă de pe smartphone sau PC, activă 6 luni, și pe
            usb, timp de 1-3 luni din ziua nunții;
          </li>
          <li>
            în preț se include și un photobook tip Premium 20x20cm/ 30 pagini;
          </li>
          <li>
            locul de bază de activitate este Republica Moldova (Chișinău), însă
            sunt disponibilă pentru a pleca peste hotarele țării. Nu lucrez în
            localități depărtate de Chișinău (există câteva excepții);
          </li>
          <li>
            evenimentele pentru 2019 le rezervez cu 6 luni până la data
            evenimentului, nu mai devreme. Prețurile serviciilor le puteți afla
            dacă completați acest formular sau puteți lăsa un mesaj privat
            (descrierea detaliată și data evenimentului, locul petrecerii, nr
            aproximativ de invitați, alte detalii) pe pagina de facebook:
          </li>
        </ul>
      </div>
    </div>

    <style jsx>
      {`
        h3 {
          font-family: "Didact Gothic", sans-serif;
          font-weight: lighter;
          color: #4a4a4a;
        }
        ul {
          width: 65%;
          margin: auto;
          color: #4a4a4a;
        }
        li {
          line-height: 30px;
          font-family: "Didact Gothic", sans-serif;
        }
        h2 {
          text-align: center;
          font-family: "Didact Gothic", sans-serif;
          font-weight: lighter;
        }
        .container {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .image-and-text {
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        img {
          width: 600px;
          height: 400px;
          padding: 20px;
        }
        @media only screen and (max-width: 700px) {
          img {
            width: 90%;
            padding: 20px;
          }
        }
      `}
    </style>
  </Layout>
);

export default Clients;
