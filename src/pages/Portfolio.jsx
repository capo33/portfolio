import { Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import Projects from '../components/data/Projects';
import '../styles/css/Portfolio.css'
 
function Portfolio() {

    const [tabValue, setTabValue] = useState("All");
    const [projectDialoge, setProjectDialoge] = useState(false)

    return (
        
        <Grid container spacing={2} className="section mb_30 pb_45 pt_45">
            {/* Title */}
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">My Projects </h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)} className="customTabs" indicatorColor="primary">
                    <Tab label="All" value="All" className={tabValue === 'All'? 'customTabs_item active' : 'customTabs_item'}/>
                       {[...new Set(Projects.map(item => (item.tag)))].map((tag,index) => (
                                    <Tab key={index}label={tag} value={tag} className={tabValue === tag? 'customTabs_item active' : 'customTabs_item'} />
                        ))}
                </Tabs>
            </Grid>
            
            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3} >
                    {Projects.map((project) => (
                        <React.Fragment key={project.id}>
                            {tabValue === project.tag || tabValue === 'All'? (
                                <Grid item xs={12} sm={6} md={4} key={project.links.id}> 
                                    <Grow in timeout={1000}>
                                        <Card className="customCard" onClick={() => setProjectDialoge(project)} key={project.id}>
                                        <CardMedia className="customCard_image" image={project.image} title={project.title} key={project.id}/>
                                            <CardActions>
                                                <CardContent key={project.id}>
                                                    <Typography variant='body2' className="customCard_title">{project.title}</Typography>
                                                    <Typography variant='body2' className="customCard_caption">{project.description}</Typography>
                                                </CardContent>
                                            </CardActions>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>

            {/* Dialog */}

         <Dialog open={projectDialoge} onClose={() => setProjectDialoge(false)} className="projectDialog"  maxWidth='sm' // sx, sm, md, lg, xl
         fullWidth>
            <DialogTitle onClose={() => setProjectDialoge(false)}>
                {projectDialoge.title}
            </DialogTitle>
            <img src={projectDialoge.image} alt="" className='projectDialog_image'/>
            <DialogContent> 
                <Typography className="projectDialog_description">{projectDialoge.caption}</Typography>
            </DialogContent>
            <DialogActions className="projectDialog_actions">
                {projectDialoge?.links?.map((link) => (
                    <a href={link.link} target="_blank" rel="noreferrer" className="projectDialog_icon">
                        {link.icon}
                    </a>
                ))}
            </DialogActions>
        </Dialog>

        </Grid>
    )
}

export default Portfolio
