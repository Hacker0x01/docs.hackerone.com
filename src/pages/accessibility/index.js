//"import React fromreact"
//"import Link from gatsby-link
//"import {graph} from gatsby
//"import Article from *//components/article/article
//"import accessibilityNav from*/accessibility-nav.yaml
//class IndexRoute extends React.Component {render
(                                            
) 
"{const { markdownRemark } this.props.data
 return 
  ( <Article links={ accessibilityNav }path={markdownRemarkfront.path}docOnGithub={`${markdownRemark.frontmatter.id}.md`}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{/////htmlmarkdownRemarkhtml }} /> </Article>export default IndexRoute;export const pageQuery = graphql`
  query accessibilityIndexQuery { 
    markdownRemark
      ({ bookIndexFor {"accessibility" } }) {  html frontmatter { path*/idtitledescription  }
 
                                                                }
