import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from "./navigation"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header style={{marginBottom: `1.45rem`, paddingLeft: `1.25rem`, paddingRight: `1.25rem`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`}}>
        <Grid>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid style={{paddingLeft: `.105rem`}}>
              <StaticImage
                src="../images/knockout_university_formal_horizontal.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="UT Austin Logo"
              />
            </Grid>
            <Grid>
                <Navigation menuLinks={menuLinks}></Navigation>
            </Grid>
          </Grid>
        </Grid>
      <h1 style={{margin: 0}}>
        <Link to="/" style={{color: `white`, textDecoration: `none`, padding: `0rem`, margin: `0rem`}}>
          <div style={{paddingBottom: '1.25rem', fontSize: '2.5rem', margin: `0rem`}}>{siteTitle}</div>
        </Link>
      </h1>
      <h3>
        <div style={{color: `white`, fontSize: '1.35rem', paddingLeft: `.22rem`}}>{siteDescription}</div>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
