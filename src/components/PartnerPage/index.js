import React from 'react';
import ContactHeaderBackground from '@images/home-background.jpg';
import StrapPhoto from '@images/strap-image.png';
import ColumnImage1 from '@images/column-image.png';
import ColumnImage2 from '@images/column-image-2.png';
import ColumnImage3 from '@images/column-image-3.png';
import Icon from '@components/common/Icon';
import {
  GenericWrapper,
  GenericSection,
  StrapContainer,
  HeaderWrapper,
  StrapImage,
  StrapDescription,
  EmphasisedWrapper,
  QuoteWrapper,
  ColumnsWrapper,
  ColumnsObject,
  ColumnTitle,
  ColumnImage,
  ColumnDescription,
  ColumnsTextObject,
} from './styles';
import HeaderMedium from '../Layout/HeaderMedium';

const PartnerPage = () => {
  const headerData = {
    title: 'Partner with us',
    details:
      'At Sports Where I Am, we provide sports fans with the complete experience relating to their gameday: far more than just a ticket.',
    mobileImageURL: ContactHeaderBackground,
    imageURL: ContactHeaderBackground,
  };
  return (
    <>
      <HeaderMedium headerData={headerData} />
      <GenericWrapper>
        <GenericSection>
          <StrapContainer>
            <HeaderWrapper>Sports Where I Am partnership opportunities</HeaderWrapper>
            <StrapImage src={StrapPhoto} alt="strap-image" />
            <StrapDescription>
              Due to this there are many opportunities for travel businesses wanting to partner with the SWIAM service.
              We offer revenue-sharing opportunities for our partners and can provide either API or white-label
              integration options.
              <br />
              <br />
              Our current partners include professional sporting organisations, travel agents and international
              airlines. Contact us at partnerships@sportswhereiam.com if you would like more information about our
              current partnerships, or to talk about how your business could partner with SWIAM.
            </StrapDescription>
          </StrapContainer>
        </GenericSection>

        {/* <GenericSection>
          <QuoteWrapper>
            <EmphasisedWrapper>
              <Icon name="quote" /> Donec facilis tortor ut augue lacinia, at vierra est semper. Sed sapien metus,
              scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.
              <Icon name="quote" />
            </EmphasisedWrapper>
            <span>- FirstName Surname</span>
          </QuoteWrapper>
        </GenericSection> */}

        {/* <GenericSection>
          <ColumnsWrapper>
            <ColumnsObject>
              <ColumnTitle>Lorem Ipsum</ColumnTitle>
              <ColumnImage src={ColumnImage1} alt="column-image-1" />
              <ColumnDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one.
              </ColumnDescription>
            </ColumnsObject>
            <ColumnsObject>
              <ColumnTitle>Lorem Ipsum</ColumnTitle>
              <ColumnImage src={ColumnImage2} alt="column-image-2" />
              <ColumnDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one.
              </ColumnDescription>
            </ColumnsObject>
            <ColumnsObject>
              <ColumnTitle>Lorem Ipsum</ColumnTitle>
              <ColumnImage src={ColumnImage3} alt="column-image-3" />
              <ColumnDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one.
              </ColumnDescription>
            </ColumnsObject>
          </ColumnsWrapper>
        </GenericSection> */}

        {/* <GenericSection>
          <ColumnsWrapper>
            <ColumnsTextObject>
              <HeaderWrapper>Lorem Ipsum is simply dummy</HeaderWrapper>
              <ColumnDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </ColumnDescription>
            </ColumnsTextObject>
            <ColumnsTextObject>
              <HeaderWrapper>Lorem Ipsum is simply dummy</HeaderWrapper>
              <ColumnDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </ColumnDescription>
            </ColumnsTextObject>
          </ColumnsWrapper>
        </GenericSection> */}
      </GenericWrapper>
    </>
  );
};

export default PartnerPage;
