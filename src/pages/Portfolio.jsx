import React, {useEffect, useState} from 'react'
import { angularProject, reactProject, javaScriptProject, databaseProject, experimentalProject, schoolProject } from '../components/data/Projects';
import PortfolioList from '../components/PortfolioList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/css/Portfolio.css'
import '../styles/scss/portfolio.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
 
function Portfolio() {

    const [selected, setSelected] = useState('all')
    const [data, setData] = useState([])
    const list = [
       
        {
            id:'experimental',
            title:'Experimental'
        },
        {
            id:'school',
            title:'School'
        },
        {
            id:'react',
            title:'React'
        },
        {
            id:'angular',
            title:'angular'
        },
        {
            id:'javaScript',
            title:'JavaScript'
        },
        {
            id:'Api',
            title:'Api'
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'school':
                setData(schoolProject)
                 break;
            case 'react':
                setData(reactProject)
                break;
            case 'javaScript':
                setData(javaScriptProject)
                break;
            case 'angular':
                setData(angularProject)
                break;
            case 'Api':
                setData(databaseProject)
                break;
            case 'exprimental':
                setData(experimentalProject)
                break;
        
            default:
                setData(experimentalProject)
                break;
        }
    },[selected])

    
    return (
               <div className="portfolio-section">
                    <div className="portfolio">
                    <h1 className="h-tags">Portfolio</h1>   
                    <ul className="menu-item">
                        {list.map((item) => (
                            <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}
                            key={item.id}
                            />
                        ))}
                    </ul>
                    <div className=" data-card">
                        {data.map((d) => {
                            return (
                            <div className="cardy" key={d.id}>
                                      <img src={d.image} alt={d.title} />
                                     <div className="card-body">
                                     <h4>{d.title}</h4>
                                     <p>{d.description}</p>
                                     <ul>
                                         <li><a  href={d.github}target="_blank" rel="noreferrer" className="github"><FontAwesomeIcon icon={faGithub} style={{marginRight:'5px'}}/> Github</a></li>
                                         <li><a  href={d.demo} target="_blank" rel="noreferrer"  className="demo"><FontAwesomeIcon icon={faGlobe} style={{marginRight:'5px'}}/>Demo</a></li>
                                     </ul>
                                     </div>
                                 </div>

                            )
                        })}
                       
                    </div>
                </div>
               </div>
    )
}

export default Portfolio
