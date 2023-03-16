import React from 'react';

const HighlightFactory = ({ sentence, searchedTerm }) => {
  const mapMatches = [];

  const regexp = RegExp(searchedTerm, 'gi');
  let matchLookup = regexp.exec(sentence);

  while (matchLookup) {
    mapMatches.push({
      value: matchLookup[0],
      position: matchLookup.index,
    });

    matchLookup = regexp.exec(sentence);
  }

  const splitSentence = `${sentence.toLowerCase()}`.split(searchedTerm.toLowerCase());

  let casedSentenceAggregator = '';
  let casedSentence = [];
  splitSentence.forEach(value => {
    casedSentence = [...casedSentence, `${sentence}`.substr(casedSentenceAggregator.length, `${value}`.length)];
    casedSentenceAggregator = casedSentenceAggregator + value + searchedTerm;
  });
  return (
    <span>
      {casedSentence.map((value, index) => {
        return (
          <>
            {value}
            {index !== splitSentence.length - 1 && (
              <span className="highlighted mx-highlighted">{mapMatches[index].value}</span>
            )}
          </>
        );
      })}{' '}
    </span>
  );
};

export default HighlightFactory;
