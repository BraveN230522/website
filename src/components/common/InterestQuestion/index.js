import React from 'react';
import { adopt } from 'react-adopt';
import Link from 'next/link';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';

import { Tip, LocationIcon, ViewsAndReplies, QuestionsMainContent, QuestionsContainer } from './styles';
import InterestQuestionsQuery from './queries';

const Data = adopt({
  questions: ({ render, interestId, interestType }) => (
    <InterestQuestionsQuery interestType={interestType} interestId={interestId}>
      {render}
    </InterestQuestionsQuery>
  ),
});

const InterestQuestions = ({ interestId, interestType, cityName, venueName }) => {
  const linkUrl =
    cityName && venueName
      ? formatSlugSegments(LINK_ABSOLUTE, cityName, venueName, 'fan-tips')
      : formatSlugSegments(LINK_ABSOLUTE, 'venue', interestId, 'fan-tips');
  return (
    <Data interestId={interestId} interestType={interestType}>
      {({ questions }) => {
        console.log(questions, 'questions');
        return questions && questions.length ? (
          <Link href={linkUrl}>
            <QuestionsContainer>
              {questions?.slice(0, 3).map(item => (
                <QuestionsMainContent key={item.questionID}>
                  <LocationIcon src={item.icon} />
                  <div>
                    <Tip>{item.questionTitle}</Tip>
                    <ViewsAndReplies>
                      {/* {item.views} Views • {item.answers?.length} Replies */}
                      {item.answers?.length} Replies
                    </ViewsAndReplies>
                  </div>
                </QuestionsMainContent>
              ))}
            </QuestionsContainer>
          </Link>
        ) : (
          <div />
        );
      }}
    </Data>
  );
};

export default InterestQuestions;
