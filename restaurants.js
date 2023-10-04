const listOfRestaurants = [
    {
        name: "Italian Trattoria",
        picture: "img/restaurants/IT.jpg",
        type: "Italien",
        note: "★★★★ 4.1",
        price: "$",
        description: "Une trattoria ancrée dans la tradition est généralement dépourvue de menu imprimé, avec un service décontracté, du vin vendu à la carafe plutôt qu'à la bouteille, des prix bas et un menu d'offres modestes mais abondantes qui suivent des recettes régionales et locales plutôt que de la haute cuisine.",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45249.98516144877!2d-0.5863512414017767!3d44.85976888757434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552985c9603b43%3A0x8950156090451f57!2sIT%20-%20Italian%20Trattoria%20-%20Bassins%20%C3%A0%20Flot%20N%C2%B02%2C%2040%20quai%20Virginie%20H%C3%A9riot%2C%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696327610281!5m2!1sen!2sfr",
        feedback: ["Fontanille Nina : \"Un des meilleurs restaurant italien à Bordeaux. \n Habitant à 45 min de votre restaurant, nous sommes à chaque fois impatient de venir y déguster vos plats ...\"",
        "FZ EA : \"Bonne cuisine italienne, même si nos plats avaient certains bémols(les pâtes a la truffe manque de goût de truffe et les pâtes aux anchois trop salées.) Les désserts ont rattrapés le repas car très bons (tiramisu sans alcool). Le restaurat propose des portions XL pour les plus gourmand ! ...\"",
        "Carine Jansana : \"En sortant de la visite des bassins des lumières, à 14h, superbe déjeuner tardif (aucun soucis pour l'arrivée tardive) Accueil sympatique, choix d'une pizza vegetale, de pasta amalfi et de pasta modena : les trois sont succulent et copieux. ...\""]
    },
    {
        name: "Flam's",
        picture: "img/restaurants/flams.jpg",
        type: "Flammekuche",
        filter : "Européen",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Européen",
        description: "Prenez place dans notre restaurant pour déguster de délicieuses Flammekueches et autres spécialités alsaciennes. Notre Flam’s est situé quai Virginie Hériot, à proximité du cinéma UGC Ciné Cité, à Bassins à Flot Bordeaux.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.774834837901!2d-0.5638900235514509!3d44.86687847107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55294b9110484d%3A0xea0fc62fefae3859!2sFlam&#39;s%20BORDEAUX!5e0!3m2!1sen!2sfr!4v1696328452997!5m2!1sen!2sfr",
        feedback: ["Solène l'abeille : \"12,90€ pour des flammekueches à volonté : un rapport qualité-prix imbattable, surtout qu'elles sont finement délicieuses !! On en a pris 5 tournées à 2 et on s'est vraiment régalées. Bons et réconfortant.\"",
        "Logan Paul : \"Excellent rapport qualité prix. Nous avons opté pour la formule à volonté à partager au prix de 17€90 incluant également un dessert au choix. Les serveuses s'adaptent à vos demandes. En effet, nous voulions voulions goûter un maximum de saveurs.\"",
        "Jul : \"Un restaurant sympathique dans un lieu calme ! La formule à volonté permet de tester plusieurs flamenkuches ce qui est intéressant & celles que j'ai pu tester, salées comme sucrées, étaient très bonnes !\""],
    },
    {
        name: "McDonald's",
        picture: "img/restaurants/mcdo.jpg",
        type: "Sur le pouce",
        filter:"Sur le pouce",
        note: "★★★ 3.4",
        price: "$",
        filterType: "Sur le pouce",
        description: "Chaîne classique de restauration rapide établie de longue date connue pour ses burgers et ses frites.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.619432866565!2d-0.5675503237582161!3d44.870041771070454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55285fa11b5623%3A0x804453834483b6bd!2sMcDonald&#39;s%20Port%20Autonome!5e0!3m2!1sfr!2sfr!4v1695993503644!5m2!1sfr!2sfr",
        feedback: ["Marion Nouvite : \"Accueil très chaleureux, lieu très propre, nouvelle vaisselle écologique, ballond animaliers offerts aux enfants ainsi que des sachets de bonbons! Du jamais vu!\"",
        "Julien Ternette : \"L'équipière du McDo, Isabelle, à ete absolument gentille et agréable lorsque je suis venu déjeuner ce midi. Service impeccable, prise de commande à la caisse pour me faire gagner du temps, rapide, et puis tout simplementfort aimable !\"",
        "Malika Siette : \"Merci à Isabelle pour cet après-midi d'anniversaire. Mon fils ainsi que ses copains ont un super moment pour ses 5 ans. Le seul hic dommage ont voit que le temps c'est de l'argent...\""],
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot-regent.jpg",
        type: "Français",
        filter: "Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8911.689302679866!2d-0.574214647141527!3d44.875591263096524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529691f32330f%3A0x567e9ec74962da1e!2sBistro%20R%C3%A9gent%20Bordeaux%20Lac!5e0!3m2!1sfr!2sfr!4v1695999824304!5m2!1sfr!2sfr",
        feedback: ["Panet : \"Excellent petit bistrot, à la bonne franquette. Le personnel est très aimable et attentionné.Tout les plats sont simples et bons.Des desserts de qualité.\"",
        "Logane Fossaert : \"Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.\"",
        "MRgnn : \"Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale\""],
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat-salad.jpg",
        type: "Salade",
        filter: "Sur le pouce",
        note: "★★★★ 4.2",
        price: "$",
        filterType: "Sur le pouce",
        description: "Créez la salade de vos envies chez Eat Salad! Nous composons sous vos yeux votre salade sur-mesure, servie froide ou chaude, avec nos ingrédients frais et nos sauces faites maison. Eat Salad satisfait aussi toutes vos envies sucrées grâce à nos jus maison et desserts. Sur place, à emporter ou en livraison, votre repas est servi rapidement et avec le sourire chez Eat Salad.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4110264353674!2d-0.5597578414046314!3d44.863897760445205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288c3ebd5fd3%3A0xca0fc2319444168e!2sEat%20Salad!5e0!3m2!1sfr!2sfr!4v1695993849704!5m2!1sfr!2sfr",
        feedback:
        ["Véronique Frémond-Kahlouche : \"Très agréable restaurant où l'accueil est particulièrement chalereux ! On y mange de très bonnes choses de grande qualité et fraîcheur ! J'adore y aller ! Je recommande chaudement.\"",
        "Christian Delégume : \"Une équipe jeune, sympathique et accueillante. Le concept est simple et redoutablement efficace. Pour ne rien gâcher c'est hyper bon. Si vous hésitez, vous avez tort. Allez-y et régalez vous. C'est aussi simple que cela.\"",
        "Aurore Movie : \"Très bien! La serveuse était agréable et patiente, et la nourriture fraîche et savoureuse!\""],
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        filter:"Sur le pouce",
        note: "★★★ 3.8",
        price: "$",
        filterType: "Sur le pouce",
        description: "Le foodtruck bio propose des crêpes et des galettes préparées avec des ingrédients biologiques de qualité. C'est une option de restauration rapide saine et respectueuse de l'environnement.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.5997177715944!2d-0.5625698230891266!3d44.87044307107046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ec2456ab0b%3A0x69bdfff0571c7115!2sLe%20foodtruck%20bio!5e0!3m2!1sfr!2sfr!4v1695994245877!5m2!1sfr!2sfr",
        feedback: ["Noa de Cajou : \"Très bon moment de détente après la visite de la base sous-marine. \
        Crêpe délicieuse et bière de la région bordelaise.\"",
        "Silvano Ptique : \"Bonne adresse pour déguster des crêpes et des galettes avec du fromage ou des douceurs. Agréable moment de détente et de restauration après la visite de la lumière du bassin.\"",
        "Jean Saigne : \"Joli kiosque avec des produits bio, un moment de détente en mangeant une crêpe ou des galettes bio avant ou après le musée. Des gens jeunes et gentils.\""],
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au-bureau.jpg",
        type: "Bistrot",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
        description: "Rendez-vous dans nos pubs authentiques et unique ... Veritable lieu de vie au décors Anglo-saxons. Au bureau rythme votre journée du matin jusqu'au soir : Repas entre amis, apéros, sport, musique, danse ... Vous allez aimer passer du temps au Bureau.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180999.38014211395!2d-0.7099575724938272!3d44.85994718614654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529fdfc590523%3A0xc7bcff4311836b92!2sAu%20Bureau%20Bordeaux%20Bacalan!5e0!3m2!1sen!2sfr!4v1696341520651!5m2!1sen!2sfr",
        feedback: ["KevinOthèque : \"Un très belle endroit avec un personnel sourriant et efficace, j'ai pue prendre le Spicy burger qui était exellent.\"", 
        "AymericOray : \"Depuis le temps qu'on voulait y venir, c'est fait et pas de regrets et belle découverte. Accueil au top, service des nombreux serveurs, souriant et aggréable.\"", "HervéStibule : \"Cadre sympa et service attentionné.\""],
    },
    {
        name: "Papadum",
        picture: "img/restaurants/papadum.jpg",
        type: "Indien",
        filter: "Exotique",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Exotique",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22625.11599445518!2d-0.6298349353996984!3d44.859454818814505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ce312979b3%3A0xcd498169a87cd78e!2sPapadum%20Indian%20Food!5e0!3m2!1sen!2sfr!4v1696341566165!5m2!1sen!2sfr",
        feedback: ["BenjaminSanspouce : \"De passage lors de notre périple a Bordeaux nous avons par hasard croisé cette établissement.\"",
        "DarenRoi : \"Nous avons manger copieusement : portion généreuse, aliments frais mais nous regretter le manque de saveur. Le goût est vraiment trop occidentalisé donc quand on aime les épices indiennes on est déçu.\"",
        "MélinaTure : \"Une expérience incroyable, le services était top, le personnel très professionnel mais intime avec ses clients et que dire sur la nouriture ... UN VRAI DÉLICE !\""],
    },
    {
        name: "Bistrot Spinoza",
        picture: "img/restaurants/spinoza.png",
        type: "Bistrot",
        filter:"Français",
        note: "★★★★ 4.7",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.8525336943735!2d-0.563612608758037!3d44.8652967986152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552987b3a4b889%3A0xe0b6219777fe72af!2sBISTROT%20SPINOZA!5e0!3m2!1sen!2sfr!4v1696341613677!5m2!1sen!2sfr",
        feedback: "",
    },
    {
        name: "Su and Shi",
        picture: "img/restaurants/sushi.jpg",
        type: "Japonais",
        filter:"Exotique",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Exotique",
        description: "Votre restaurant SuAndShi Bordeaux vous accueille tous les jours de la semaine. Nos produits sont sélectionnés avec soins pour vous offrir la meilleure expérience gustative possible (Saumon Label Ecosse et tant d'autres). Nos makis, sushis, chirachis, sashimis, california rolls, poke bowls ou encore Ice Rolls sont préparés chaque jour et à déguster sur place ou en livraison.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9041832384396!2d-0.5607889233158913!3d44.86424537326768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288fd41e8377%3A0xaaa739008bb5c88!2sSuAndShi%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341673783!5m2!1sen!2sfr",
        feedback: ["ThorPain : \*Très bon palts et carte avec du choix. Pas mal de végétarien. Serveur sympatique et aux petits soins.\"",
        "AlainTerrieur : \"Découvert après une sortie au bassin des lumières, ce petit restaurant est superbe avec une décoration moderne et épuré.\"",
        "CarryBou : \"Exellente expérience comme à chaque fois que l'on commande chez vous <3.\""],
    },
    {
        name: "La dame",
        picture: "img/restaurants/la-dame.png",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.2",
        price: "$",
        filterType: "Ouvert tard",
        description: "Restaurant / Discothèque branchée sur un bateau proposant des plats internationaux et des cocktails, avec des DJ Bordelais.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.941746021337!2d-0.5605893087584819!3d44.863480698735145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288dc4b71ccb%3A0x820075d6645fe650!2sLA%20DAME%20Food%26Club!5e0!3m2!1sen!2sfr!4v1696341709812!5m2!1sen!2sfr",
        feedback: ["ÉlodieManche : \"Grosse decéption, beaucoup de monde et 17€ à l'entrée.\"",
        "VincentTime : \"J'avais pas envie parce que je suis une tête de mûle mais Julien nous à tellement accuillis !!!!! Nous étions 30 mais il souviendrons des L5 et nous nous nous souviendrons de lui et du repas. Nous nous sommmes régalé, le repas délicieux, le vin parfait et Julien extra-ordinaire !!!!! Allez-y vite, Merci Julien !\"",
        "MarieGolade : \"Je n'ai pas profiter de la nouriture au vue de l'heur. Mais pour la partie club / Boite de nuit je dois dire que j'ai beaucoup aimé l'ambiance, Le cadre, la vue etc ...\""],
    },
    {
        name: "Joya",
        picture: "img/restaurants/joya.jpg",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.5",
        price: "$$",
        filterType: "Ouvert tard",
        description: "Restaurant intimiste proposant un brunch le dimanche et en soirée des annimations.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.439048738226!2d-0.6159332104828618!3d44.83882880680118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552983897d85a5%3A0xc9a237149114cb11!2sJoya%20Bar%20Restaurant!5e0!3m2!1sen!2sfr!4v1696341751139!5m2!1sen!2sfr",
        feedback: ["SirylDeRay : \"Ambiance et vue sympa mais carte restaurant ne correspond pas à celle du web ni a l'entrée du restaurant. Bref dommage.\"",
        "MathieuSard : \"Très bon repas, ambiance festive après 23h\""],
    },
    {
        name: "La côte et l'Arète",
        picture: "img/restaurants/cote-arete.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.5",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.355055767264!2d-0.6159332374415232!3d44.83893572020651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529f9c0f062e5%3A0xd91be9c303c78e2c!2sLa%20C%C3%B4te%20et%20l&#39;Ar%C3%AAte%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341788892!5m2!1sen!2sfr",
        feedback: ["Hassena : \"Boris nous a accueilli malgré notre retard conséquent\"",
        "Logane Fossaert : \"Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.\"",
        "MRgnn : \"Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale\"" ],
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la-terasse.jpg",
        type: "Français",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
        description: "Ambiance sympatique en journée avec soirées a thèmes le week-end.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.2710628164!2d-0.6159332644001336!3d44.83904263338562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288a64012f5d%3A0x9edfab67797417e9!2sLa%20Terrasse!5e0!3m2!1sen!2sfr!4v1696341832400!5m2!1sen!2sfr",
        feedback: ["AlainTerrieur : \"Super resto, bien mangé, partis la peau du ventre bien tendus.\"",
        "MarieTime : \"J'étais à coté de la personne peau du ventre bien tendu, je suis d'accord avec lui.\"",
        "LouisLabrocante : \"Super rencontre avec Mr terrieur et Mme Time, Je recommande.\""],
    },
    {
        name: "Tripletta",
        picture: "img/restaurants/tripletta.jpg",
        type: "Italien",
        filter:"Européen",
        note: "★★★★ 4.4",
        price: "$$",
        filterType: "Européen",
        description: "La pizza é la vita ! Et Tripletta c’est la vie d’un quartier avec supplément d’âme, c’est ce four qui jamais ne s’éteint, cette Napolitaine rouge ou blanche toujours parfaitement cuite, ces ingrédients d’exception nés et produits en Italie.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.777164079108!2d-0.5776765061683115!3d44.85973735364169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529931eaebc2f%3A0x2fd493fea28fbe3f!2sTripletta%20Chartrons!5e0!3m2!1sen!2sfr!4v1696341884179!5m2!1sen!2sfr",
        feedback: ["Tibo Inshape : \"Repas très satisfaisant, le service était plutot pas mal je dirais, nous sommes tombés sur un serveur très rapide, je recommande!\"",
                "Margot Robbie : \"Je me suis régaler, j'avais l'impression d'être en Italie. Je reviendrais volontier!\"",
                "Cole Sprouse : \"J'ai ramené toute ma famille et je ne suis pas déçu! Les sauces sont incroyables, bravo a Tripletta!\""]
    },
    {
        name: "Le Jardin Pêcheur",
        picture: "img/restaurants/le-jardin-pecheur.jpg",
        type: "Brasserie",
        filter:"Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.049735528196!2d-0.5568487233160415!3d44.861282273463345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55297cd773cbe9%3A0x42bfb3160d459467!2sLe%20Jardin%20P%C3%AAcheur!5e0!3m2!1sen!2sfr!4v1696341936589!5m2!1sen!2sfr",
        feedback: "",
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe-maritime.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.0",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9459079208086!2d-0.558257423315945!3d44.863395973323705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288e18eeb965%3A0x928003ce2518a8e4!2sCaf%C3%A9%20Maritime%20-%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341973038!5m2!1sen!2sfr",
        feedback: "",
    }
];

const createPage = (index) => {

    // Création et ajout du titre dans la balise h3 .title-restaurant
    const containerPage = document.querySelector(".test");
    const restaurantPage = document.createElement("div");
    const selectedRestaurant = listOfRestaurants.find((restaurant) => restaurantId === index);

    if (selectedRestaurant) {
        restaurantPage.innerHTML = `
            <div class="block-img">
                <img src=${listOfRestaurants[index].picture} alt="Restaurant italien." class="restaurant-card-img" >
            </div>
            <div class="text-restaurant">
                <h3 class="title-restaurant">${listOfRestaurants[index].name}</h3>
                <p class="type-food">${listOfRestaurants[index].type}</p>
            <div class="note-price">
                <span class="star">${listOfRestaurants[index].note}</span>
                <span class="price">${listOfRestaurants[index].price}</span>
            </div>
                <p class="description">${listOfRestaurants[index].description}</p>
                <div class="location">
                <iframe src="${listOfRestaurants[index].map}" width="250" height="112" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="feedbacks">
                <h3>Avis</h3>
                <div class="feedback-cards">
                    <p class="feedback"><span class="yellow-stars">★★★ </span>${listOfRestaurants[index].feedback[0]}</p>
                    <p class="feedback"><span class="yellow-stars">★★★ </span>${listOfRestaurants[index].feedback[1]}</p>
                    <p class="feedback"><span class="yellow-stars">*** </span>${listOfRestaurants[index].feedback[2]}</p>
                </div>
            </div>
        `;
    }
    containerPage.appendChild(restaurantPage);
}

// Récupérez l'élément où vous afficherez les détails du restaurant
const restaurantDetailsContainer = document.querySelector('.test');

// Récupérez l'ID du paramètre de requête dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get('id');

// Utilisez la fonction createPage pour afficher les détails du restaurant en fonction de l'ID
if (restaurantId) {
    createPage(restaurantId);
}