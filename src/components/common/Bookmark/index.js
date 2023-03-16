import React from 'react';

import BookmarkIcon from './bookmark-icon';

const Bookmark = ({ isBookmarked, onClick }) => {
  return (
    <a onClick={onClick}>
      <BookmarkIcon isBookmarked={isBookmarked} />
    </a>
  );
};

export default Bookmark;
