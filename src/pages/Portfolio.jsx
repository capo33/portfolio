import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  CardActions,
} from "@mui/material";
import { ButtonContent } from "semantic-ui-react";

import { portfolio } from "../components/data/Projects";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/Portfolio.css";

function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const checked = {
    value: true,
  };

  return (
    <div className='projects'>
      <div className='container '>
        <Grid container spacing={1} className='section pb_45 pt_45'>
          <Grid item xs={12}>
            {/* tabs */}

            <Tabs
              variant='scrollable'
              scrollButtons='auto'
              aria-label='scrollable auto tabs example'
              // backgr="inherit"
              value={tabValue}
              className='customTabs'
              onChange={(e, newValue) => setTabValue(newValue)}
            >
              <Tab
                label='All'
                value='All'
                className={
                  tabValue === "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
              {[...new Set(portfolio.map((item) => item.tag))].map(
                (tag, index) => (
                  <Tab
                    key={index}
                    label={tag}
                    value={tag}
                    className={
                      tabValue === tag
                        ? "customTabs_item active"
                        : "customTabs_item"
                    }
                  />
                )
              )}
            </Tabs>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {portfolio.map((project, index) => (
                <React.Fragment key={project.id}>
                  {tabValue === project.tag || tabValue === "All" ? (
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <Grow in={checked.value} timeout={1000}>
                        <Card
                          className='customCard'
                          style={{ background: "#E8E8E8" }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component='img'
                            //   height='10'
                              image={project.image}
                              title={project.title}
                              className='customCard_image'
                            />
                            <CardContent>
                              <Typography
                                variant='body2'
                                className='customCard_title'
                              >
                                {project.title}
                              </Typography>
                              <Typography
                                variant='body2'
                                className='customCard_caption'
                              >
                                {project.description}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions className='projectDialog'>
                            {project?.links?.map((link, index) => (
                              <div className='projectDialog_icon' key={index}>
                                <ButtonContent className='  '>
                                  <a
                                    href={link.link}
                                    className='projectDialog_icon btn btn_link  '
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    {link.icon}
                                  </a>
                                </ButtonContent>
                              </div>
                            ))}
                          </CardActions>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Portfolio;
