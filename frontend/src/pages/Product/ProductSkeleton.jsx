import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1488}
    height={1057}
    viewBox="0 0 1488 1057"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="10" ry="10" width="655" height="775" />
    <rect x="755" y="0" rx="10" ry="10" width="200" height="22" />
    <rect x="755" y="50" rx="0" ry="0" width="728" height="72" />
    <rect x="755" y="150" rx="10" ry="10" width="364" height="264" />
  </ContentLoader>
);

export default ProductSkeleton;
