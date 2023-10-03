const listOfRestaurants = [
    {
        name: "Italian Trattoria",
        picture: "img/restaurants/IT.jpg",
        type: "Italien",
        note: "★★★★ 4.1",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Flam's",
        picture: "img/restaurants/flams.jpg",
        type: "Flammekuche",
        filter : "Européen",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Européen",
        description: "",
        map: "",
        feedback: "", 
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
        feedback: ["Marion Nouvite : \"Accueil très chaleureux, lieu très propre, nouvelle vaisselle écologique, ballond animaliers offerts aux enfants ainsi que des sachets de bonbons! Du jamais vu!\""],
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
        "Christian Delégume : \"Une équipe jeune, sympathique et accueillante. Le concept est simple et redoutablement efficace. Pour ne rien gâcher c'est hyper bon. Si vous hésitez, vous avez tort. Allez-y et régalez vous. C'est aussi simple que cela.\""],
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
        Crêpe délicieuse et bière de la région bordelaise.\""],
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au-bureau.jpg",
        type: "Bistrot",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
        description: "Rendez-vous dans nos pub authentiques et unique ... Veritable lieu de vie au décors Anglo-saxons. Au bureau rithme votre journée du matin jusqu'au soir : Repas entre amis, apéros, sport, musique, danse ... Vous allez aimer passé du temps au Bureau.",
        map: "",
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
        map: "",
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
        map: "",
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
        map: "",
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
        description: "Restaurant / Discothèque branché sur un bateau proposant des plates internationaux et des cocktail, avec des DJ Bordelais.",
        map: "",
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
        description: "Restaurant intimste proposant un brunch le dimanche et en soirée annimation.",
        map: "",
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
        map: "",
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
        description: "Ambiance sympatique en journée avec soirée a thème le week-end.",
        map: "",
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
        description: "",
        map: "",
        feedback: "",
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
        map: "",
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
        map: "",
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
                <span class="star">${listOfRestaurants[index].note}</span>
                <span class="price">${listOfRestaurants[index].price}</span>
                <p class="description">${listOfRestaurants[index].description}</p>
                <div class="location">
                <iframe src="${listOfRestaurants[index].map}" width="250" height="112" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="feedbacks">
                <h3>Avis</h3>
                <div class="feedback-cards">
                    <p class="feedback"><span class="yellow-stars">*** </span>${listOfRestaurants[index].feedback[0]}</p>
                    <p class="feedback"><span class="yellow-stars">*** </span>${listOfRestaurants[index].feedback[1]}</p>
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