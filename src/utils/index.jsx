import home from '../assets/home.svg'
import Fixtures from '../assets/Trophy.svg'
import star from '../assets/star.svg'
import user from '../assets/userfocus.svg'
import results from '../assets/lightning.svg'
import help from '../assets/at.svg'
import realMadrid from '../assets/madrid.svg'
import realbetis from '../assets/realbetis.svg'
import arsenal from '../assets/arsenal.svg'
import everton from '../assets/everton_logo.svg.svg'
import brentford from '../assets/brentford_fc_logo.svg.svg'
import barcelona from '../assets/barca.svg'
import sevilla from '../assets/sevilla.svg'
import spurs from '../assets/tottenham_hotspur.svg'
import chelsea from '../assets/chelsea.svg'
import liverpool from '../assets/liverpool.png'
export const navbar = [
    {
        title: "Home",
        logo: home,
        path: ""
    },
    {
        title: "Fixtures",
        logo: Fixtures,
        path: ""
    },
    {
        title: "Leadersboard",
        logo: star,
        path: ""
    },
    {
        title: "User Dashboard",
        logo: user,
        path: ""
    },
    {
        title: "Results",
        logo: results,
        path: ""
    },
    {
        title: "Help",
        logo: help,
        path: ""
    },
    {
        title: "Contact Us",
        logo: help,
        path: ""
    },
]

export const leagueFixtures = [
    {
        home: {
            name: "Real Madrid",
            shortname: "RMA",
            logo: realMadrid,
            score: 4
        },
        away: {
            name: "Real Betis",
            shortname: "RBT",
            logo: realbetis,
            score: 2,
        }
    },
    {
        home: {
            name: "Arsenal",
            shortname: "ARS",
            logo: arsenal,
            score: 6
        },
        away: {
            name: "Chelsea",
            shortname: "CHE",
            logo: chelsea,
            score: 3,
        }
    },
    {
        home: {
            name: "Sevilla",
            shortname: "SEV",
            logo: sevilla,
            score: 1
        },
        away: {
            name: "Barcelona",
            shortname: "BAR",
            logo: barcelona,
            score: 0,
        }
    },
    {
        home: {
            name: "Tottenham",
            shortname: "TOT",
            logo: spurs,
            score: 3
        },
        away: {
            name: "Liverpool",
            shortname: "Liv",
            logo: liverpool,
            score: 3,
        }
    },
    {
        home: {
            name: "Everton",
            shortname: "EVE",
            logo: everton,
            score: 1
        },
        away: {
            name: "Brentford",
            shortname: "BRE",
            logo: brentford,
            score: 3,
        }
    },
]


export const leaderboardData = [
    { player: "Player A", points: 1050 },
    { player: "Player B", points: 980 },
    { player: "Player C", points: 1120 },
    { player: "Player D", points: 920 },
    { player: "Player E", points: 1150 },
    { player: "Player F", points: 1030 },
    { player: "Player G", points: 940 },
    { player: "Player H", points: 1100 },
    { player: "Player I", points: 980 },
    { player: "Player J", points: 990 }
];
