import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles.js";
import NewsCard from "../NewsCard/NewsCard";
import classNames from "classnames";

const infoCards = [
  {
    color: "#00838f",
    title: "Press the blue microphone icon ",
    text: "Give me the latest news on covid-19",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: " Covid-19 , Health",
    text: "Give me the latest Health news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Omicron, Covid-Variants",
    text: "What's up with Covid-19",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classNames.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classNames.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
