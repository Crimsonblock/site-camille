import Section from "./utils/Section";

const repertoir=[
    {
        composer: "Purcell",
        pieces: [
            {
                name: "Dido and Aeneas",
                roles: ["Sorceress", "2nd Woman*", "Spirit*"]
            }
        ]
    },
    {
        composer: "Porpora",
        pieces: [
            {
                name: "Poliferno",
                roles: ["Ulisse"]
            }
        ]
    },
    {
        composer: "Händel",
        pieces: [
            {
                name: "Giulio Cesare in Egitto",
                roles: ["Sesto"]
            },
            {
                name: "Ariodante",
                roles: ["Ariodante"]
            }
        ]
    },
    {
        composer: "Mosart",
        pieces: [
            {
                name: "Le Nozze di Figaro",
                roles: ["Cherubino"]
            },
            {
                name: "Così fan Tutte",
                roles: ["Dorabella"]
            },
            {
                name: "La Clemenza di Tito",
                roles: ["Sesto, Annio"]
            },
            {
                name: "Idomeneo",
                roles: ["Idamante"]
            },
        ]
    },
    {
        composer: "Rossini",
        pieces: [
            {
                name: "La Cenerentola",
                roles: ["Angelina"]
            }
        ]
    },
    {
        composer: "Bellini",
        pieces: [
            {
                name: "Norma",
                roles: ["Clotilde"]
            }
        ]
    },
    {
        composer: "Humperdinck",
        pieces: [
            {
                name: "Hänsel und Gretel",
                roles: ["Hänsel"]
            }
        ]
    },
    {
        composer: "Strauss",
        pieces: [
            {
                name: "Ariadne auf Naxos",
                roles: ["der Componist"]
            }
        ]
    },
    {
        composer: "Grieg",
        pieces: [
            {
                name: "Peer Gynt",
                roles: ["Anitra", "3ème fille des Pâturages"]
            }
        ]
    },
    {
        composer: "Gounod",
        pieces: [
            {
                name: "Roméo et Juliette",
                roles: ["Stéphano"]
            },
            {
                name: "Faust",
                roles: ["Siébel"]
            }
        ]
    },
    {
        composer: "Debussy",
        pieces: [
            {
                name: "Pelléas et Mélisande",
                roles: ["Yniold"]
            }
        ]
    },
    {
        composer: "Debussy",
        pieces: [
            {
                name: "Pelléas et Mélisande",
                roles: ["Yniold"]
            }
        ]
    },
    {
        composer: "Massenet",
        pieces: [
            {
                name: "Cendrillon",
                roles: ["Cendrillon", "Le Prince"]
            }
        ]
    },
    {
        composer: "Ravel",
        pieces: [
            {
                name: "L'Enfant et les Sortilèges",
                roles: ["L'Enfant*"]
            }
        ]
    },
    {
        composer: "Magnard",
        pieces: [
            {
                name: "Guercoeur",
                roles: ["Giselle", "Bonté", "Souffrance", "l'Ombre d'une femme"]
            }
        ]
    },
    {
        composer: "Foccroulle",
        pieces: [
            {
                name: "Le Journal d'Hélène Berr",
                roles: ["Hélène Berr"]
            }
        ]
    },
    {
        composer: "Puntos",
        pieces: [
            {
                name: "Les Trois Brigands",
                roles: ["la Mère", "la Tante", "la Standardiste"]
            }
        ]
    },
]

function Repertoir(){
    return(
        <Section title="Répertoire">
        {
            repertoir.map((el, index) =>(
                <div key={el.composer}>
                <h2 className="composerName blue roboto-light" key={el.composer}>{el.composer}</h2>
                <ul className="pieceList">
                {
                    el.pieces.map((piece, id) =>(
                        <li key={el.composer+piece.name}>
                        <span className="piece roboto-light"> <i>{piece.name}</i> </span> - <span className="roles"> {piece.roles.join(", ")} </span>
                        </li>
                    ))
                }
                </ul>
                </div>
            ))
        }
        </Section>
    )
}

export default Repertoir;