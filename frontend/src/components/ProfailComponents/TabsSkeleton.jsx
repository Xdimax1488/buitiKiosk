import React from 'react';
import ContentLoader from 'react-content-loader';

const TabSkeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={855}
    height={235}
    viewBox="0 0 855 235"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="107" height="19" /> 
    <rect x="0" y="32" rx="0" ry="0" width="385" height="70" /> 
    <rect x="0" y="129" rx="0" ry="0" width="107" height="19" /> 
    <rect x="0" y="161" rx="0" ry="0" width="385" height="70" /> 
    <rect x="469" y="0" rx="0" ry="0" width="107" height="19" /> 
    <rect x="469" y="32" rx="0" ry="0" width="385" height="70" /> 
    <rect x="469" y="129" rx="0" ry="0" width="107" height="19" /> 
    <rect x="469" y="161" rx="0" ry="0" width="385" height="70" />
  </ContentLoader>
)

export default TabSkeleton;