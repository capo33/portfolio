import { v4 as uuidv4 } from "uuid"
import { GitHub, Language } from "@material-ui/icons";

const Projects =  [
    {
        id:uuidv4(),
        tag:'Angular',
        image:'image/kahvila.jpg',
        title: 'Caffee Counter',
        caption: 'caffee counter',
        description:"check how many coffees are ordered and served",
        links: [
            {
                id:uuidv4(),
                link:'https://capo33.github.io/kahvila/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/kahvila.git',
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'React',
        image:'image/recipe-finder.jpg',
        title: 'Recipe Finder',
        caption: 'recipe finder.',
        description:"find your favorite recipe and Let's cook something delicious",
        links: [
            {
                id:uuidv4(),
                link:'https://capo33.github.io/recipe-finder/',
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/recipe-finder.git',
                icon:<GitHub />
            },

        ]
    },
    {
        id:uuidv4(),
        tag:'React',
        image:'image/note-keeper.jpg',
        title: 'Note Keeper',
        caption: 'note keeper.',
        description:'write done all note',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/note-keeper/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/note-keeper.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'React',
        image:'image/react-todo-app.jpg',
        title: 'Todo List',
        caption: 'todo list.',
        description:'get your task done',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/react-todo-app/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/react-todo-app.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'JavaScript',
        image:'/image/todo-list.jpg',
        title: 'Todo List',
        caption: 'todo lists',
        description: 'simple app to organize the tasks' ,
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/todo-list/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/todo-list.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'JavaScript',
        image:'image/dice-game.jpg',
        title: 'Dice Game',
        caption: "dice game",
        description: "let's play",
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/dice-game/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/dice-game.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Database',
        image:'image/blog.jpg',
        title: 'Blog',
        caption: 'Blog with [ Ejs - Mongodb ]',
        description:'The Corner',
        links: [
            
            {
                id:uuidv4(),
                link:'https://frozen-mesa-31601.herokuapp.com/'
            }
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/splitting.jpg',
        title: 'Angular Project',
        caption: 'split Server',
        description:"Split server",
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/spliting/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/spliting.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/joke-list2.jpg',
        title: 'Angular Project',
        caption: 'try to laugh.',
        description:'Jokes',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/joke-list/', 
                icon:<Language />
            
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/joke-list.git', 
                icon:<GitHub />
            
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/warning-et-success.jpg',
        title: 'Angular Project',
        caption: 'success and warning page',
        description:'Success and warning page',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/warning-et-success/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/warning-et-success.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/crazy-button.jpg',
        title: 'JavaScript Project',
        caption: 'try to stop the buttons.',
        description:'Crazy Buttons.',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/crazy-button/', 
                icon:<Language />
            
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/crazy-button.git', 
                icon:<GitHub />
            
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/egyption-gods.jpg',
        title: 'React Project',
        caption: 'The most famous ancient Egyptian deities',
        description:'Egyption Deities',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/egyption-gods/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/egyption-gods.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/emojipedia.jpg',
        title: 'React Project',
        caption: 'emoji meaning.',
        description:'Emojipedia',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/emojipedia/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/emojipedia.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/Digital-Marketing.jpg',
        title: 'Css Project',
        caption: 'digital marketing',
        description:'Digital Marketing',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/Digital-Marketing/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/Digital-Marketing.git', 
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/tindog.jpg',
        title: 'Css Project',
        caption: 'help your dog not feel lonely',
        description:'Tindog',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/tindog/',
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/tindog.git',
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'Experimental',
        image:'image/travel-agency.jpg',
        title: 'Css Project',
        caption: 'visit egypt 🛫🧡',
        description:'Travel Agency',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/travel-agency/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/travel-agency.git',
                icon:<GitHub />
            },
        ]
    },
    {
        id:uuidv4(),
        tag:'School Projects',
        image:'image/school-projects.jpg',
        title: 'School Projects',
        caption: 'School Projects',
        description:'Html, Css, JavaScript, Angular',
        links: [
            
            {
                id:uuidv4(),
                link:'https://capo33.github.io/school-projects/', 
                icon:<Language />
            },
            {
                id:uuidv4(),
                link:'https://github.com/capo33/school-projects.git', 
                icon:<GitHub />
            },
        ]
    },

]

export default Projects