import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="394" rx="10" ry="10" width="100" height="20" /> 
    <rect x="0" y="355" rx="10" ry="10" width="140" height="20" /> 
    <rect x="0" y="0" rx="10" ry="10" width="280" height="330" /> 
    <rect x="0" y="427" rx="10" ry="10" width="70" height="20" />
  </ContentLoader>
)

export default Skeleton