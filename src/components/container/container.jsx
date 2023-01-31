import React from 'react';
import './container.scss';

export default function container(props) {
  const { children } = props;
  return <div class="container">{children}</div>;
}
