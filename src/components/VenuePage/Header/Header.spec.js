import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import VenuePageHeader from './index';

const mockData = {
  fromDate: '2020-05-06',
  toDate: '2021-04-11',
  handleChangeDates: () => {},
  data: {
    title: 'Arthur Ashe Stadium',
    description:
      'With a capacity of 23,700 and a cruel nosebleed section, this is a vacuous venue from which fans predictably can sometimes feel detached from the players and excitement. Early Ashe matches usually feature a star against a lowly ranked player or no-name, like #1 Novak Djokovich against an unknown qualifier. Unless you have seats up close or simply must see your favorite player, consider a smaller venue here as there are heaps on offer like below.Louis Armstrong Stadium holds about 10,000 and can be a much better location to more closely view name players, without binoculars. With 5,800 seats, Grandstand stadium makes it possible to intimately experience the intense action. Nearly all seats are available with a Mini-Plan package, including some that are literally first-row courtside. Another bonus: SHADE! It\'s estimated that 20 percent of the seats at Grandstand are in precious, rare shade — practically the ONLY shade in the entire tennis center. Fans often opt for the shady east side of the stadium, which is excellent for visibility and comfort in that there are individual tapered seats. In some areas of Grandstand, there are only butt-flattening bleachers with no back support. Still, here you can easily see and feel the pounding, the pace, and the emotions from the Grandstand seats.In addition to the three major stadiums, there are 16 "outer” courts, where seating capacity ranges from about 100 to 1500. These, too, are intimate spots that are especially inviting during the evening hours when the intense sun had faded. Again, the earlier you arrive, the better your odds of getting a great seat. In some cases fans are denied entry to matches because they arrive late. Lots of doubles matches on the outer courts too. Practice courts are accessible all the time and fans can find plenty of action elsewhere.Fan Author: Chris Martin / Photo credit 32',
    imageURL: 'https://sportswhereiam.com/wp-content/uploads/2015/07/Arthur-Ashe-Stadium.jpg',
    mobileImageURL: 'https://sportswhereiam.com/wp-content/uploads/2015/07/Arthur-Ashe-Stadium.jpg',
  },
};
/**
 * TODO: When graphql request is configured,
 * this toHaveContent tests will be changed for a mock response
 */
describe('<VenuePageHeader />', () => {
  it('Renders a VenuePageHeader component', () => {
    const { fromDate, toDate, data, handleChangeDates } = mockData;
    const { container } = render(
      <VenuePageHeader fromDate={fromDate} toDate={toDate} data={data} handleChangeDates={handleChangeDates} />,
      {
        wrapper: withGlobals,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
