import Section from "./utils/Section";

// TODO: crop image to better see Camille & reduce image size

function Bio(){
    return (
        <Section title="Biographie">
        <img alt="Portrait" className="bio-photo" src="/media/portrait.jpg" height="200px"/>
        <p>
            La mezzo-soprano belge Camille Bauer commence ses études à Bruxelles avec Dina Grossberger, étudie ensuite avec Stephanie Friede puis Lionel Lhote avant de rentrer au Conservatoire National Supérieur de Musique et de Danse de Paris dans la classe de Yann Toussaint, dont elle est diplômée en 2023. Elle complète sa formation par diverses masterclasses avec entre autres Christianne Stotijn, Olaf Bär, Felicity Lott, François Le Roux, Anne Sofie von Otter.
        </p>
        <p>
            Elle a chanté dans divers choeurs tels le Choeur de Jeunes de La Monnaie “La Choraline,” le Choeur du Palais Royal et Sequenza 9.3. En novembre 2022, elle remporte le deuxième prix sans premier prix attribué du Concours International de Chant Lyrique de Mâcon, ainsi que le prix “jeune espoir féminin” et le prix des lycéens.
        </p>
        <p>
            Le répertoire de lied, mélodie et musique de chambre est également un répertoire qu&apos;elle apprécie tout particulièrement. En 2021, elle participe à l&apos;Académie Francis Poulenc avec Pierre Venissac, les menant à se produire notamment lors du Printemps de la Mélodie ou des Journées Ravel. Elle chante occasionnellement aussi avec le quatuor de clarinettes Clarnival.
        </p>
        <p>
            En mars 2023, Camille chante la Second Woman dans Didon et Énée de Purcell sous la direction de Leonardo García Alarcón au Conservatoire National de Paris. Elle rejoint l&apos;Opéra Studio de l&apos;Opéra National du Rhin en 2023, avec lequel elle chante le Journal d&apos;Hélène Berr de Bernard Foccroulle, Clotilde dans Norma, et chantera lors de la saison 24-25 la Mère, la Tante et la Standardiste dans Les Trois Brigands de Didier Puntos ainsi que Anitra et la 3ème Fille des Pâturages dans Peer Gynt.
        </p>

        </Section>
    )
}

export default Bio;