import { Component } from "react";
import Section from "./Section";
import Card from "./Card";

const repertoir=[{
    composer: "Purcell",
    roles: ["Dido", "Sorceress", "2nd Woman"]
},
{
    composer: "Händel",
    roles: ["Sesto"]
},
{
    composer: "Mozart",
    roles: ["Cherubino", "Sesto", "Annio", "Idamante", "Dorabella"]
},
{
    composer: "Rossini",
    roles: ["Cenerentola"]
},
{
    composer :"Bellini",
    roles: ["Clotilde"]
},
{
    composer: "Humperdinck",
    roles: ["Hänsel"]
},
{
    composer: "Gounod",
    roles: ["Stéphano", "Siébel"]
},
{
    composer: "Debussy",
    roles: ["Yniold"]
},
{
    composer: "Massenet",
    roles: ["Cendrillon"]
},
{
    composer: "Ravel",
    roles: ["L'Enfant"]
},
{
    composer: "Strauss",
    roles: ["Komponist"]
}]


class Home extends Component{
    render(){
        return(
            <>
                <Section title="Biographie">
                        <div className="bio-photo">
                            <p>Photo au format portrait</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus explicabo debitis. Expedita molestiae provident, veniam enim magnam explicabo eligendi soluta adipisci alias quaerat tempore consequatur, qui quia iure amet.
                            Ducimus nam nobis voluptas consectetur itaque autem temporibus, illo laborum porro magni, veniam deserunt inventore. Esse, perspiciatis itaque molestias dolor dignissimos odio asperiores. Asperiores, rerum magni nostrum nemo cupiditate reprehenderit.
                            Repudiandae delectus porro vero ut placeat, voluptas maxime earum! Nobis, doloremque corrupti et quasi explicabo consequatur a, beatae architecto minima soluta quibusdam ullam officiis eum? Autem reprehenderit ea quo repudiandae.
                            Delectus ratione quibusdam repellat, expedita, possimus cum aliquid voluptatem, cupiditate ab quam debitis perferendis accusamus quae odit officia? Cumque ducimus vero sint illo fuga natus laboriosam, perferendis odio dolorum error.
                            Fugiat magnam esse recusandae dicta molestiae laborum perspiciatis ducimus nesciunt ipsa ex ut quam earum dolores incidunt, facere velit, aut aliquam, porro repellat hic. Omnis autem vitae quam ipsam in!
                            Perferendis itaque vero eius sapiente dolore eaque nostrum hic debitis quibusdam reprehenderit pariatur, quasi et id cum fuga, odit aliquam nihil facilis doloribus explicabo sit corrupti! Architecto asperiores pariatur possimus.
                            Quis, veniam. Distinctio, inventore pariatur hic, adipisci soluta tempora incidunt itaque quos veniam omnis voluptates a quo reiciendis iste. Quisquam deserunt magni iure fuga ullam quidem incidunt, quibusdam ducimus aspernatur!
                            Ad reiciendis fugit quidem? Amet necessitatibus corrupti quisquam quae, maiores maxime eaque eius accusantium iusto odio? Cupiditate quis, maxime provident, facilis eaque asperiores aliquid tenetur non veniam illo reprehenderit. Magnam!
                        </p>
                </Section>  

                <div className="separator-image-placeholder">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    Separator image placeholder (une image de toi sur scène)
                </div>

                <Section title="Répertoire">
                    <div className="cards-container">
                        {repertoir.map((el, index)=>{
                            return(
                                <Card key={el.composer} title={el.composer}>
                                    <ul className="roles">
                                        {el.roles.map((role, id)=>{
                                            return(
                                                <li className="role roboto-light" key={el.composer+role}>{role}</li>
                                            )
                                        })}
                                    </ul>
                                </Card>
                            )
                        })}
                    </div>
                </Section>

                {/* <Section title="Contact">
                    <input type="text" placeholder="name" required="true" />
                    <input type="email" placeholder="email" required="true" />
                    <textarea name="Message" id="message"></textarea>
                </Section> */}
            </>
        );
    }
}

export default Home;