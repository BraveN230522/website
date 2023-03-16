import React from 'react';

import { SectionStyles, TitleHeader, Title, Article } from './styles';

const Section = ({ title, more, children, columns, grid, className, centered, dark }) => {
  return (
    <SectionStyles className={className} centered={centered} dark={dark}>
      <TitleHeader>
        <Title dark={dark}>{title}</Title>
        {more}
      </TitleHeader>

      <Article columns={columns} grid={grid}>
        {children}
      </Article>
    </SectionStyles>
  );
};

export default Section;
