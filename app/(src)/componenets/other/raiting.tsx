import React from 'react';
import { Rating } from 'react-simple-star-rating';

export default function RatingStar({
  readonly,
  value,
  onClick,
  className,
}: any) {
  return (
    <Rating
      onClick={onClick}
      customIcons={[
        { icon: <i className={`fas fa-star  ${className && className}`} /> },
        { icon: <i className={`fas fa-star  ${className && className}`} /> },
        { icon: <i className={`fas fa-star  ${className && className}`} /> },
        { icon: <i className={`fas fa-star  ${className && className}`} /> },
        { icon: <i className={`fas fa-star  ${className && className}`} /> },
      ]}
      rtl
      readonly={readonly}
      allowFraction={readonly}
      initialValue={value}
    />
  );
}
