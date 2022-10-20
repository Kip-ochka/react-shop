import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="14" y="399" rx="0" ry="0" width="72" height="30" />
    <rect x="100" y="381" rx="0" ry="0" width="0" height="1" />
    <rect x="125" y="387" rx="20" ry="20" width="153" height="47" />
    <rect x="-5" y="246" rx="0" ry="0" width="288" height="30" />
    <rect x="-1" y="286" rx="0" ry="0" width="280" height="90" />
    <circle cx="140" cy="122" r="119" />
  </ContentLoader>
)


export default Sceleton

