import { FaGithub } from "react-icons/fa"
import { BiGlobe } from "react-icons/bi"
import { v4 as uuidv4 } from "uuid"
 
export const portfolio= [
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/star.png',
            title: 'Star Wars',
            description:"UseQuery",
                links: [
                { 
                    id:uuidv4(),link:'https://capo33.github.io/StarWars/', icon: <BiGlobe /> },
                { 
                    id:uuidv4(),link:'https://www.github.com/capo33/StarWars', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/finder.png',
            title: 'Recipe Finder',
            description:"React-hooks",
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/recipe-finder/', icon: <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/recipe-finder.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/pokemon.png',
            title: 'Pokemon Evolution',
            description:'React-hooks',
                 links: [
                { id:uuidv4(),link:'https://capo33.github.io/pokemon-evolution/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/pokemon-evolution', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/keeper.png',
            title: 'Note Keeper',
            description:'React-hooks',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/note-keeper/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/note-keeper.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/grocery.png',
            title: 'Grocery List',
            description:'React-hooks - [ Local Storage ]',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/Grocery-List/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/Grocery-List', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"react",
            caption:" A short description",
            image:'image/todo.png',
            title: 'Todo App',
            description:'React-hooks',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/react-todo-app/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/react-todo-app.git', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"angular",
            caption:" A short description",
            image:'image/kahvila.png',
            title: 'Caffee Counter',
            description: 'caffee counter',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/kahvila/', icon: <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/kahvila.git', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"angular",
            caption:" A short description",
            image:'image/kahvila.png',
            title: 'Caffee Counter',
            description: 'caffee counter',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/kahvila/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/kahvila.git', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"javascript",
            caption:" A short description",
            image:'/image/speaker.png',
            title: 'Text Speaker',
            description: 'JS' ,
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/Text-to-Speech/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/Text-to-Speech', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"javascript",
            caption:" A short description",
            image:'image/dice-game.jpg',
            title: 'Dice Game',
            description: 'JS' ,
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/dice-game/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/dice-game.git', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"javascript",
            caption:" A short description",
            image:'image/memory.png',
            title: 'Memory Game',
            description: "JS",
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/memory-game/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/memory-game', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"api",
            caption:" A short description",
            image:'image/blog.png',
            title: 'Blog',
            description:'Rest-api - [ ejs - mongodb ]',
                links: [
                    { id:uuidv4(),link:'https://frozen-mesa-31601.herokuapp.com/', icon:  <BiGlobe />}
                ]
        },
        {
            id:uuidv4(),
            tag:"api",
            caption:" A short description",
            image:'image/animazon.png',
            title: 'Animazon',
            description:"GrapghQL - [ MERN - React - Apollo ]",
                links: [
                { id:uuidv4(),link: 'https://animazon-client.herokuapp.com/', icon:  <BiGlobe />},
                {id:uuidv4(),link:'https://github.com/capo33/animazon-client', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"api",
            caption:" A short description",
            image:'image/morty.png',
            title: 'Morty Characters',
            description:"GrapghQL - [ React - Apollo ]",
                links: [
                { id:uuidv4(),link: 'https://morty-characters.herokuapp.com/', icon: <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/Morty-Characters', icon: <FaGithub /> },
                ]
        },
        {
            id:uuidv4(),
            tag:"api",
            caption:" A short description",
            image:'image/16.png',
            title: 'SpaceX',
            description:"GrapghQL - [ React - Apollo ]",
                links: [
                { id:uuidv4(),link: 'https://boiling-forest-08686.herokuapp.com/', icon:  <BiGlobe />},
                ]
        },
        {
            id:uuidv4(),
            tag:"school",
            caption:" A short description",
            image:'image/school-projects.jpg',
            title: 'School Projects',
            description:'Html - Css - Angular',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/school-projects/', icon:  <BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/school-projects.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/splitting.jpg',
            title: 'Angular Project',
            description:"Split server",
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/spliting/', icon:<BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/spliting.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/joke-list2.jpg',
            title: 'Angular Project',
            description:'Jokes',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/joke-list/', icon:<BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/joke-list.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/warning-et-success.jpg',
            title: 'Angular Project',
            description:'Success and warning',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/warning-et-success/', icon:<BiGlobe />},
                { id:uuidv4(),link:'https://github.com/capo33/warning-et-success.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/crazy-button.jpg',
            title: 'JavaScript Project',
            description:'Crazy Buttons.',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/crazy-button/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/crazy-button.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/egyption-gods.jpg',
            title: 'React Project',
            description:'Egyption Deities',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/egyption-gods/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/egyption-gods.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/emojipedia.jpg',
            title: 'React Project',
            description:'Emojipedia',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/emojipedia/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/emojipedia.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/Digital-Marketing.jpg',
            title: 'Css Project',
            description:'Digital Marketing',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/Digital-Marketing/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/Digital-Marketing.git', icon:  <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/tindog.jpg',
            title: 'Css Project',
            description:'Tindog',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/tindog/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/tindog.git', icon: <FaGithub /> },
            ]
        },
        {
            id:uuidv4(),
            tag:"experimental",
            caption:" A short description",
            image:'image/travel-agency.jpg',
            title: 'Css Project',
            description:'Travel Agency',
                links: [
                { id:uuidv4(),link:'https://capo33.github.io/travel-agency/', icon:<BiGlobe /> },
                { id:uuidv4(),link:'https://github.com/capo33/travel-agency.git', icon: <FaGithub /> },
            ]
        },
    ]