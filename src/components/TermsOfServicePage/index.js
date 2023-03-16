import React from 'react';
import ContactHeaderBackground from '@images/home-background.jpg';
import styled from '@emotion/styled';
import { TermsSection, TermsText, MarkTitle, TitleContinue, TermsWrapper, QuoteWrapper, QuoteNumber } from './styles';
import HeaderMedium from '../Layout/HeaderMedium';

const NumericList = styled.ol`
  list-style-type: decimal;
`;

const TermsOfService = () => {
  const headerData = {
    title: 'Terms of Service',
    mobileImageURL: ContactHeaderBackground,
    imageURL: ContactHeaderBackground,
  };
  return (
    <>
      <HeaderMedium headerData={headerData} />
      <TermsWrapper>
        <TermsSection title="TERMS OF SERVICE">
          <TermsText>PARTICULARS</TermsText>
        </TermsSection>

        <TermsSection title="A. PARTIES">
          <TermsText>
            <MarkTitle>A.1</MarkTitle> These Terms of Service (Terms) form an agreement (Agreement) between WHEREIAM
            GROUP PTY LTD ACN 157 847 928 (Sports Where I Am, us, we our) an Australian company, and the user (User,
            you, your).
          </TermsText>
        </TermsSection>

        <TermsSection title="B. PRIVACY POLICY">
          <TermsText>
            <MarkTitle>B.1</MarkTitle> Our Privacy Policy is incorporated into these Terms. In accepting these Terms the
            User also confirms that they have read and accepted our Privacy Policy, and the User agrees to the
            collection, use and sharing of your information and personal data in accordance with the Privacy Policy. The
            User can read the Privacy Policy at{' '}
            <a href="http://sportswhereiam.com/privacy-policy">sportswhereiam.com/privacy-policy</a> (Privacy Policy).
          </TermsText>
        </TermsSection>

        <TermsSection title="C. SERVICE AND ACCEPTANCE">
          <TermsText>
            <MarkTitle>C.1</MarkTitle> Description
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> We operate the website{' '}
              <a href="http://sportswhereiam.com">sportswhereiam.com</a> (Site) and mobile application (App), referred
              together as the Service.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> Your use of the Service (Access, Accessing) is conditional on your acceptance
              and compliance with these Terms.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> By Accessing the Service, you agree to be bound by these Terms and the Privacy
              Policy.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(d)</MarkTitle> The Service allows Users to do the following:
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Find sporting events in the available cities;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Book tickets to sporting events;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>iii</MarkTitle> Upload User Content (defined below in clause [5]) to the Service;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>iv</MarkTitle> Post User Posts to the User Forum (defined below in clause E.1); and
              </QuoteNumber>
              <QuoteNumber>
                v Access information about the sporting event and the services and amenities surrounding it.
              </QuoteNumber>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(e)</MarkTitle> Where the User does not accept the terms and conditions of this Agreement, the
              User must immediately cease using the Service.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(f)</MarkTitle> The App is available:
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Mobile. The mobile application “Sports Where I Am” available from Apple’s
                AppStore, GooglePlay and any other web-based mobile applications made available from time-to-time;
                and/or
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Web. From the application accessed through the URL{' '}
                <a href="http://sportswhereiam.com">sportswhereiam.com</a> (or other domain as used by us from
                time-to-time).
              </QuoteNumber>
            </QuoteWrapper>
          </TermsText>

          <TermsText>
            <MarkTitle>C.2</MarkTitle> Term
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> The User’s Access to the Service shall be ongoing unless terminated by us in
              accordance with these Terms.
            </QuoteWrapper>
          </TermsText>

          <TermsText>
            <MarkTitle>C.3</MarkTitle> Limitations on Use
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> We may limit or restrict Access to the Service from time-to-time on any basis
              as we see fit, including (but not limited to):
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Age & Capacity. Only persons over the age of 18 may register as a User and all
                Users must be capable of forming binding legal contracts, unless the User has the written consent of
                their parent or legal guardian;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Location. We may restrict access to the Service from any location;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>iii</MarkTitle> Certification. We may restrict access to the Service where it cannot, in its
                absolute discretion, verify the User’s identity.
              </QuoteNumber>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> We reserve the right to revise, amend and update these Terms including these
              conditions of use at any time. The User should check the Site for updates to these conditions of use. We
              will notify you if there is any amendment to the Terms, and the revised Terms will take effect when you
              read and accept the revised Terms.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="D. USER REGISTRATION">
          <TermsText>
            <MarkTitle>D.1</MarkTitle> Registration and Account
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> Access to the full functionality of the Service is only available to registered
              Users who set up an account (Account).
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> Until registration as a User is confirmed by us a license to access all
              Services will not be granted.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> You may only open one Account per person. Your Account is not transferable.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(d)</MarkTitle> You will be asked to provide a personal email address and a password in order
              to register for an Account. You are responsible for the safekeeping of your password. We will not be
              liable for any unauthorised use of your Account.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(e)</MarkTitle> You must provide accurate information when setting up your Account. Your
              Account will be cancelled if your details are found to be incorrect.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(f)</MarkTitle> Any username and passwords created by you or assigned by us must be kept safe
              and secure and only used by those authorised to do so. You must notify the administrator immediately if
              you suspect that your details have been compromised or stolen.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="E. USER FORUM">
          <TermsText>
            <MarkTitle>E.1</MarkTitle> Purpose
            <TitleContinue>
              The User Forum is available for Users to post questions, information about the sporting games, information
              about the area and document their experiences (User Posts). Users can also upload User Content (defined
              below in clause [5]) including photographs and videos of photographs of their experiences .
            </TitleContinue>
          </TermsText>
          <TermsText>
            <MarkTitle>E.2</MarkTitle> Prohibited Content
            <TitleContinue>
              We reserve the right to remove any User Post or User Content (together, User Information) from the User
              Forum and/or restrict the access of the User if the User Information is deemed to be:
            </TitleContinue>
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> Offensive;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> Defamatory;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> Sexist, racist, homophobic or otherwise discriminatory;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(d)</MarkTitle> Explicit; and/or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(e)</MarkTitle> In breach of any law.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="F. TICKET BOOKING AND THIRD PARTY SERVICES">
          <TermsText>
            <MarkTitle>F.1</MarkTitle> Booking
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> The booking and purchase of tickets will occur directly through the Service and
              your interface will be with the Service directly.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> As part of the functionality of the Service, we may use certain third party
              applications or services (TPS) to facilitate the booking of tickets to sporting games, but at all times
              your interface will be with the Service for the booking and purchase of tickets.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> In the event that we use a TPS as part of the Service, the User consents to:
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Providing the TPS the information required for the purchase of tickets;
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Allowing us to access the information provided in (c)(i) above; and
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>iii</MarkTitle> Abiding by the TPS’ terms and conditions of service.
              </QuoteNumber>
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>F.2</MarkTitle> Ongoing Availability.
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> The User agrees that our ability to book tickets may be unavailable if the TPS
              we use becomes unavailable, and that functionality or content that is shared between the TPS and the
              Service may be lost as a result.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> We cannot guarantee the availability or efficacy of any TPS connection, and you
              release us from all liability for any loss incurred as a result of any defective or failed TPS.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>F.3</MarkTitle> Shipping and ticket delivery
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> All tickets will be delivered via the delivery method you nominate upon
              booking.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> The delivery methods include [local pickup and mobile entry].
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> The User acknowledges that e-tickets or tickets marked as electronic or instant
              may not be available for immediate download in all circumstances, but we will provide you with
              instructions as to how to download your ticket as soon as practicable after purchase.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(d)</MarkTitle> Where the delivery method nominated is mobile-entry, we may use a TPS to
              facilitate your retrieval of the ticket for entry at the sporting event.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(e)</MarkTitle> The User is responsible for contacting our customer service department in the
              event that the electronic ticket or e-ticket or mobile ticket is not downloadable for any reason.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(f)</MarkTitle> The User acknowledges that there is no guaranteed delivery date, and in some
              cases the booking order will indicate an estimated delivery date.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(g)</MarkTitle> The User acknowledges that it is their responsibility to check the ticket order
              for delivery and shipping information.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(h)</MarkTitle> The User acknowledges that the User is responsible for the collection of the
              ticket and that we are not responsible for any failure by you to collect the ticket in accordance with the
              instructions for collection provided by us, and the User releases us from all liability for any loss
              incurred as a result of any failed collection of the ticket.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="G. THE USER AGREES TO FULLY INDEMNIFY US FROM AND AGAINST ANY AND ALL CLAIMS, ACTIONS, DEMANDS, LIABILITIES, PAYMENTS, SETTLEMENT COSTS, LOSS (INCLUDING CONSEQUENTIAL LOSS) OR DAMAGE, INCLUDING LEGAL AND ACCOUNTING FEES ARISING FROM OR IN CONNECTION WITH THE SHIPPING, DELIVERY OR TICKET COLLECTION PROCESSES UNDERTAKEN AS A RESULT OF YOUR ACCESS TO THE SERVICE.ACCOUNT ACCESS USING THIRD-PARTY SERVICES">
          <TermsText>
            <MarkTitle>G.1</MarkTitle> Registration & Login.
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> The User may be able to register for the Service, and access the Services, by
              using their account with a TPS (including, but not limited to, Facebook);
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> As part of the functionality of the Service the User may connect their profile
              with a TPS by:
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Providing their TPS login information to us through the Service; or
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Allowing us to access the TPS in accordance with its terms & conditions of
                service.
              </QuoteNumber>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> When connecting to the Service using a TPS, the User warrants that they are not
              in breach of any of its terms and conditions of service.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>G.2</MarkTitle> Ongoing Availability.
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> The User agrees that access to the Service may be unavailable if the TPS
              becomes unavailable, and that the User may lose functionality or content that is shared between the TPS
              and the Service;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> The User may disconnect the connection between the Service and the TPS at any
              time.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>G.3</MarkTitle> Data to and from TPS.
            <QuoteWrapper>
              <MarkTitle>(a)</MarkTitle> Where the User connects and or registers to the Service using a TPS, the User
              authorises us to:
              <QuoteNumber>
                <MarkTitle>i</MarkTitle> Use data from that TPS to create and/or edit the User’s profile on the Service;
                and/or
              </QuoteNumber>
              <QuoteNumber>
                <MarkTitle>ii</MarkTitle> Send and receive data from that TPS for the purpose of providing the Service
                to the User.
              </QuoteNumber>
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="H. GEO-LOCATION TECHNOLOGY">
          <TermsText>
            <MarkTitle>H.1</MarkTitle> The Service employs geo-location technology (GeoTech) to find sporting games in
            the User’s area. In the event of a GeoTech error, we take no responsibility for any loss incurred by the
            User as a result of an incorrect booking.
          </TermsText>
        </TermsSection>

        <TermsSection title="I. SERVICE">
          <TermsText>
            <MarkTitle>I.1</MarkTitle> The Service is only accessible to the User for the Term. set out in clause C.2.
          </TermsText>
          <TermsText>
            <MarkTitle>I.2</MarkTitle> The User agrees and accepts that the functional elements of the Service may be:
            <QuoteWrapper>
              <MarkTitle>(b)</MarkTitle> hosted by us and shall only be installed, accessed and maintained by us,
              accessed using the internet or other connection to Sports Where I Am servers and is not available
              ‘locally’ from the User’s systems; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(c)</MarkTitle> managed and supported exclusively by us from our servers and that no ‘back-end’
              access to the Service is available to the User unless expressly agreed in writing.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>I.3</MarkTitle> We reserve the right to upgrade, maintain, tune, backup, amend, add or remove
            features, redesign, improve or otherwise alter the Service.
          </TermsText>
        </TermsSection>

        <TermsSection title="J. LICENCE">
          <TermsText>
            <MarkTitle>J.1</MarkTitle> By accepting the terms and conditions of this Agreement, the User is granted a
            limited, non-exclusive and revocable licence to access the Service for the Term, in accordance with the
            terms and conditions of this Agreement.
          </TermsText>
          <TermsText>
            <MarkTitle>J.2</MarkTitle> We may revoke or suspend the User’s licence(s) in its absolute discretion for any
            reason that it sees fit, including for breach of the Terms in this Agreement by the User. We will ordinarily
            advise the User of any suspension or revocation however it is under no obligation to do so.
          </TermsText>
        </TermsSection>

        <TermsSection title="K. AUTHORISED USERS">
          <TermsText>
            <MarkTitle>K.1</MarkTitle> We shall authorise users to access the Service in its absolute discretion. We
            accept no liability for access to User Content or User Post by users authorised by the User or using login
            details of users authorised by the User.
          </TermsText>
          <TermsText>
            <MarkTitle>K.2</MarkTitle> The User is responsible for ensuring that users authorised to use the Service
            comply with this Agreement in full and are liable for any breach of them.
          </TermsText>
        </TermsSection>

        <TermsSection title="L. USER OWNED CONTENT">
          <TermsText>
            <MarkTitle>L.1</MarkTitle> You grant to us a perpetual, irrevocable, non-exclusive, worldwide, transferable
            licence to use, exercise and exploit the intellectual property rights in all information, data, images,
            audio and video files uploaded by you to the Service (User Content) for the purposes of our business and the
            provision of the Services, and agree that we may assign such rights at its discretion.
          </TermsText>
          <TermsText>
            <MarkTitle>L.2</MarkTitle> You acknowledge and agree that you, and not us, are responsible for ensuring the
            lawfulness of your User Content and obtaining any and all necessary rights and consents to upload, store,
            and access any User Content.
          </TermsText>
          <TermsText>
            <MarkTitle>L.3</MarkTitle> You acknowledge and agree that it is your responsibility to ensure that:
            <QuoteWrapper>
              <MarkTitle>(d)</MarkTitle> your User Content does not infringe any intellectual property rights, privacy
              rights or any other rights of any person;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(e)</MarkTitle> you do not use the Service to engage any conduct that is unlawful, immoral,
              threatening, abusive or in a way that is deemed unreasonable by us in our discretion; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(f)</MarkTitle> your use of the Service does not breach any obligations of confidentiality to
              any person.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>L.4</MarkTitle> We accept no liability for the content of User Content or User Post.
          </TermsText>
          <TermsText>
            <MarkTitle>L.5</MarkTitle> The User is responsible for the accuracy, quality and legality of User
            Information and the User’s acquisition of it, and the users that create, access and/or use User Information.
          </TermsText>
          <TermsText>
            <MarkTitle>L.6</MarkTitle> We shall be authorised to permanently delete User Information where:
            <QuoteWrapper>
              <MarkTitle>(g)</MarkTitle> The User deletes the Service or no longer wishes to use it; or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(h)</MarkTitle> This Agreement is terminated.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="M. DATA">
          <TermsText>
            <MarkTitle>M.1</MarkTitle> Security. We take the security of the Service and the privacy of its users very
            seriously. The User agrees that the User shall not do anything to prejudice the security or privacy of our
            systems or the information on them.
          </TermsText>
          <TermsText>
            <MarkTitle>M.2</MarkTitle> Transmission. We shall do all things reasonable to ensure that the transmission
            of data occurs according to accepted industry standards.
          </TermsText>
        </TermsSection>

        <TermsSection title="N. ACCESS">
          <TermsText>
            <MarkTitle>N.1</MarkTitle> You agree and acknowledge that your Access and use of the Service is at your sole
            risk.
          </TermsText>
          <TermsText>
            <MarkTitle>N.2</MarkTitle> You accept all responsibility for any activity that occurs while using the
            Service.
          </TermsText>
          <TermsText>
            <MarkTitle>N.3</MarkTitle> You agree that you will not:
            <QuoteWrapper>
              <MarkTitle>(i)</MarkTitle> use the Service for any purpose that is illegal, beyond the scope of their
              intended use, or otherwise prohibited in these Terms;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(j)</MarkTitle> compromise the security of the Service;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(k)</MarkTitle> use the Service in any way that could damage our reputation or the goodwill or
              other rights associated with the Service;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(l)</MarkTitle> use the Service in a manner that violates the publicity, privacy or
              data-protection rights of others;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(m)</MarkTitle> use any aspect of the Service for re-sale purposes; or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(n)</MarkTitle> encourage or enable any other individual to do any of the foregoing.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>N.4</MarkTitle> While we also take reasonable steps to ensure the Service is virus free, you
            acknowledge that you access the Service at your own risk and that we are not responsible for any damage
            caused as a result of accessing the Service. This includes, but is not limited to, any monetary or other
            loss that may result from loss or corruption of data, system downtime or hardware damage.
          </TermsText>
        </TermsSection>

        <TermsSection title="O. INTELLECTUAL PROPERTY">
          <TermsText>
            <MarkTitle>O.1</MarkTitle> Trade Marks
            <QuoteWrapper>
              <MarkTitle>(o)</MarkTitle> We have moral and registered rights in our trade marks and the User shall not
              copy, alter, use or otherwise deal with the trade marks in any way without our prior written consent.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(p)</MarkTitle> Apple® AppStore®, Google®, GooglePlay® and other trade marks are the
              Intellectual Property of their respective owners.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>O.2</MarkTitle> Proprietary Information. The Service may use software and other proprietary
            systems and Intellectual Property for whichwe have appropriate authority to use, and the User agrees that
            such is protected by copyright, trade marks, patents, proprietary rights and other laws, both domestically
            and internationally. The User warrants that it shall not infringe on any third-party rights through the use
            of the Service.
          </TermsText>
          <TermsText>
            <MarkTitle>O.3</MarkTitle> Service. The User agrees and accepts that all present and future copyright in the
            Sports Where I Am information and material appearing on the Service either vests in and is the exclusive
            property of Sports Where I Am, or is licensed to Sports Where I Am (Content). This Content may include text,
            materials, graphics, software, tools, results derived from the use of software and tools, advertisements,
            names, logos and trade marks, source code, usage data, ideas, enhancements, feature requests, and
            suggestions on the Service. The Content is protected by copyright, trade mark and other intellectual
            property laws unless expressly indicated otherwise on the Service.
          </TermsText>
          <TermsText>
            <MarkTitle>O.4</MarkTitle> Paid Advertising and Third Party Material. Some of the content on the Service,
            including articles, sponsorships and promotions, constitutes paid advertising. Responsibility for the
            content of advertisements appearing on the Service (including hyperlinks to advertisers’ own websites) rests
            solely with the advertisers, and does not constitute a recommendation or endorsement by us, Your
            correspondence or dealings with, or participation in promotions of, advertisers on the Service are solely
            between yourself and such advertisers. We will not be liable or responsible for any loss or damage of any
            sort incurred as the result of any such dealings or as the result of the presence of advertisements on the
            Service,
          </TermsText>
          <TermsText>
            <MarkTitle>O.5</MarkTitle> The User further warrants that by using the Service the User will not:
            <QuoteWrapper>
              <MarkTitle>(q)</MarkTitle> copy the Service or the services that it provides for the User’s own commercial
              purposes; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(r)</MarkTitle> directly or indirectly copy, recreate, decompile, reverse engineer or otherwise
              obtain, modify or use any source or object code, architecture, algorithms contained in the Service or any
              documentation associated with it.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="P. LIABILITY & INDEMNITY">
          <TermsText>
            <MarkTitle>P.1</MarkTitle> You agree to fully indemnify and hold us harmless, and our related entities and
            employees from and against any and all claims, actions, demands, liabilities, payments, settlement costs,
            loss (including consequential loss) or damage, including legal and accounting fees arising from or in
            connection with:
            <QuoteWrapper>
              <MarkTitle>(s)</MarkTitle> any breach by you of these Terms including any warranty;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(t)</MarkTitle> any negligent, reckless or intentional act or omission of you;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(u)</MarkTitle> any breach of law by you in using the Service;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(v)</MarkTitle> any claim, arising out of or in connection with your use of the Service,
              regarding the infringement or alleged infringement of the intellectual property rights of any person; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(w)</MarkTitle> your Access to the Service.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>P.2</MarkTitle> You agree and acknowledge that each indemnity in these Terms is a continuing
            obligation separate and independent from your other obligations in these Terms and survives Termination of
            your Access.
          </TermsText>
          <TermsText>
            <MarkTitle>P.3</MarkTitle> To the extent permitted by law, Sports Where I Am, our related entities or any of
            its respective directors, officers, employees, contractors or agents make no representation or warranty:
            <QuoteWrapper>
              <MarkTitle>(x)</MarkTitle> as to the accuracy, legality, suitability or reliability of the information
              contained in any aspect of the Service; or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(y)</MarkTitle> that the Service will be uninterrupted, without delay, error-free,
              omission-free or free of viruses.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>P.4</MarkTitle> To the extent permitted by law:
            <QuoteWrapper>
              <MarkTitle>(z)</MarkTitle> You release us, our related entities and employees from any liability arising
              as a result of your reliance on the accuracy or currency of information contained in any aspect of the
              Service.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(aa)</MarkTitle> We do not accept responsibility for any loss or damage, however caused
              (including through negligence), which you may directly or indirectly suffer in connection with your use of
              the Service or any linked website or your interaction or use of any TPS. We do not accept any
              responsibility for any such loss arising out of your use of, or reliance on, information contained on or
              accessed through the Service of the TPS.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(bb)</MarkTitle> We do not accept responsibility for any indirect or consequential loss
              including costs and expenses suffered by you, beyond the value of a refund and the cost directly connected
              with the purchase and collection of a ticket. Without limiting the immediately preceding sentence, you
              agree and acknowledge that your decision to travel to the location of the ticketed event is not
              conditional on your successful entrance to that event, and you release us from any liability for your
              costs and expenses connected with travel to and accommodation at that location, including airfares,
              accommodation expenses, ground travel costs and sustenance expenses.
            </QuoteWrapper>
          </TermsText>
          <TermsText>
            <MarkTitle>P.5</MarkTitle> To the extent allowed by law, in no circumstances will we be liable for any
            direct, incidental, consequential or indirect damages, loss or corruption of data, loss of profits,
            goodwill, bargain or opportunity, loss of anticipated savings or any other similar or analogous loss
            resulting from the User’s access to, or use of, or inability to use the Service or any Content, or in any
            way relating to an experience itself (or the provision or non-provision of an experience), whether based on
            warranty, contract, tort, negligence, in equity or any other legal theory, and whether or not we knew or
            should have known of the possibility of such damage, to business interruption of any type, whether in tort,
            contract or otherwise.
          </TermsText>
          <TermsText>
            <MarkTitle>P.6</MarkTitle> Termination
          </TermsText>
          <TermsText>
            <MarkTitle>P.7</MarkTitle> Expiry or termination of the licence to the Service (Termination) is without
            prejudice to and does not affect the accrued rights or remedies of any of the parties arising in any way out
            of this Agreement up to the date of Termination.
          </TermsText>
          <TermsText>
            <MarkTitle>P.8</MarkTitle> If Termination occurs, you agree that you will no longer have Access to the
            Service or to any TPS.
          </TermsText>
          <TermsText>
            <MarkTitle>P.9</MarkTitle> Termination will not affect any unpaid amounts due and payable to us at the time
            of Termination.
          </TermsText>
          <TermsText>
            <MarkTitle>P.10</MarkTitle> These Terms will survive Termination where intended.
          </TermsText>
        </TermsSection>

        <TermsSection title="Q. DISPUTES">
          <TermsText>
            <MarkTitle>Q.1</MarkTitle> For any dispute between us and the User, the following process shall apply:
            <QuoteWrapper>
              <MarkTitle>(cc)</MarkTitle> Negotiation. If there is a dispute between the parties relating to or arising
              out of this Agreement, then within 5 Business Days of a party notifying the other party of a dispute,
              senior representatives from each party must meet (or if discuss directly via the telephone or internet)
              and use all reasonable endeavours acting in good faith to resolve the dispute by joint discussions;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(dd)</MarkTitle> Mediation. If the dispute between the parties relating to or arising out of
              this Agreement is not resolved within five Business Days of notification of the dispute under clause 13.1,
              the parties must agree to submit the dispute to mediation, administered by lawyers engaged in alternative
              dispute resolution;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(ee)</MarkTitle> Arbitration. If the dispute between the parties relating to or arising out of
              this Agreement is not settled by mediation under clause (b), either party may by written notice to the
              other refer the dispute to arbitration administered by the Institute of Arbitrators Australia. The
              arbitrator will be agreed between the parties from a panel suggested by the President of the Institute of
              Arbitrators Australia or failing Agreement, an arbitrator will be appointed by the President of the
              Institute of Arbitrators Australia; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkTitle>(ff)</MarkTitle> Court proceedings. A party may not commence court proceedings in relation to a
              dispute relating to or arising out of this Agreement until it has exhausted the procedures in this clause
              (d) unless the party seeks appropriate injunctive or other interlocutory relief to preserve property or
              rights or to avoid losses that damages would otherwise be inadequate to compensate.
            </QuoteWrapper>
          </TermsText>
        </TermsSection>

        <TermsSection title="R. NOTICES">
          <TermsText>
            <MarkTitle>R.1</MarkTitle> The User can direct notices, enquiries, complaints and so forth to us as set out
            in this Agreement. We may notify the User of a change of details from time-to-time.
          </TermsText>
          <TermsText>
            <MarkTitle>R.2</MarkTitle> We will send the User notices and other correspondence to the details that the
            User submits to us, or that the User notifies us of from time-to-time. It is the User’s responsibility to
            update its contact details as they change.
          </TermsText>
          <TermsText>
            <MarkTitle>R.3</MarkTitle> A consent, notice or communication under this Agreement is effective if it is
            sent as an electronic communication unless required to be physically delivered under law.
          </TermsText>
        </TermsSection>

        <TermsSection title="S. ASSIGNMENT">
          <TermsText>
            <MarkTitle>S.1</MarkTitle> The User may only assign or otherwise create an interest in their rights under
            this document with the written consent of us.
          </TermsText>
          <TermsText>
            <MarkTitle>S.2</MarkTitle> We may assign their rights under this Agreement by giving the User written
            notice.
          </TermsText>
        </TermsSection>

        <TermsSection title="T. GENERAL">
          <TermsText>
            <MarkTitle>T.1</MarkTitle> Entire Agreement. These Terms constitute the entire terms of the Agreement
            between you and us and supersede any prior representations, understandings or arrangements made between the
            parties, whether orally or in writing.
          </TermsText>
          <TermsText>
            <MarkTitle>T.2</MarkTitle> Disclaimer. Each party acknowledges that it has not relied on any representation,
            warranty or statement made by any other party, other than as set out in this Agreement.
          </TermsText>
          <TermsText>
            <MarkTitle>T.3</MarkTitle> Relationship. Nothing in these Terms creates a joint venture, partnership, or the
            relationship of principal and agent, or employee and employer between the parties.
          </TermsText>
          <TermsText>
            <MarkTitle>T.4</MarkTitle> Waiver. No clause of this Agreement will be deemed waived and no breach excused
            unless such waiver or consent is provided in writing.
          </TermsText>
          <TermsText>
            <MarkTitle>T.5</MarkTitle> Further Assurances. Each party must do anything necessary (including executing
            agreements and documents) to give full effect to this Agreement and the transaction facilitated by it.
          </TermsText>
          <TermsText>
            <MarkTitle>T.6</MarkTitle> Governing Law. This Agreement is governed by the laws of the state of Victoria,
            Australia. Each of the parties hereby submits to the non-exclusive jurisdiction of courts with jurisdiction
            in Victoria, Australia.
          </TermsText>
          <TermsText>
            <MarkTitle>T.7</MarkTitle> Liability for Expenses. Each party must pay its own expenses incurred in
            negotiating, executing, stamping and registering this Agreement.
          </TermsText>
          <TermsText>
            <MarkTitle>T.8</MarkTitle> Inconsistency. If this Agreement is inconsistent with any other document or
            Agreement between the parties, this document prevails to the extent of the inconsistency.
          </TermsText>
          <TermsText>
            <MarkTitle>T.9</MarkTitle> Counterparts. This Agreement may be executed in any number of counterparts. All
            counterparts together will be taken to constitute one instrument.
          </TermsText>
          <TermsText>
            <MarkTitle>T.10</MarkTitle> Time is of the essence in this Agreement.
          </TermsText>
          <TermsText>
            <MarkTitle>T.11</MarkTitle> Severability. Any clause of this Agreement, which is invalid or unenforceable is
            ineffective to the extent of the invalidity or unenforceability without affecting the remaining clauses of
            this Agreement.
          </TermsText>
        </TermsSection>

        <a id="bein-terms" />
        <TermsSection title="beIN Consumer Promotion">
          <TermsText>
            <MarkTitle>Terms and Conditions:</MarkTitle>
          </TermsText>
          <TermsText>
            Information on how to enter forms part of the terms and conditions of entry. Entry into the promotion is
            deemed acceptance of these terms and conditions. Headings in this document are included for ease of
            reference, and do not affect interpretation in any way.
            <NumericList>
              <li>
                The promoter is WHEREIAM GROUP PTY LTD (ABN 28157847928) of 534 Church street, Richmond, VIC, 3121
                telephone number 1300 995 136 (Promoter).
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Duration:</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="2">
              <li>
                All references to time in this document are a reference to the local time in Sydney, New South Wales,
                Australia on the date stated. The promotion commences at 08:00AM on 7th November 2020 and closes at
                08:00 AM on March 7th, 2021 (Promotion Period).
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Eligibility to enter:</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="3">
              <li>
                The competition is open to residents of Australia aged 18 years or over except employees of WHEREIAM
                GROUP PTY LTD and their close relatives and anyone otherwise connected with the organisation or judging
                of the competition. There is no entry fee and no purchase necessary to enter this competition
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Entry into the promotion:</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="4">
              <li>
                To enter, Eligible Entrants must during the Promotion Period complete the entire survey on URL:
                https://sportswhereiam.com/bein/and answer the question ‘Describe the sports experience you are most
                looking forward to having’ in 50 words or less’. The survey link is accessible via the URL
                https://sportswhereiam.com/bein/
              </li>
              <li>The Promoter is not responsible for any lost, late or misdirected entries.</li>
              <li>Multiple entries are not permitted.</li>
              <li>The time of entry will be deemed to be the time the entry is received by the Promoter.</li>
              <li>
                The Promoter reserves the right, at any time, to verify the validity of entries and Eligible Entrants
                (including an entrant's identity, age and place of residence) and to disqualify any entrant who tampers
                with the entry process. Failure by the Promoter to enforce any of its rights at any stage does not
                constitute a waiver of those rights.
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Judging of entries</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="9">
              <li>Entries will be judged based on their originality and creativity.</li>
              <li>
                Judging will take place at 10:00AM on 14th March 2021 at the offices of the Promoter. Judging will be
                conducted by the Promoter. (Adjudicator).
              </li>
              <li>
                The judges’ decision is final and no correspondence will be entered into. Chance plays no part in
                determining the winning entry.
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Judging backup entries</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="12">
              <li>
                As part of judging, the Adjudicator will select an additional 2 entries to be used as backup winners in
                the event that an entrant is unable to satisfy the promotion terms and condition or forfeits or does not
                claim a prize. For any prize that remains unclaimed on 21st March 2021, the Promoterwill award the prize
                to the backup winner in the order judged by the Adjudicator, subject to any written direction given
                under applicable law
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>The prize</MarkTitle>
          </TermsText>
          <TermsText>
            The prize is a single Sports Where I Am voucher to the value of $500 AUD. The prize is not transferable.
            Prizes are subject to availability and we reserve the right to substitute any prize with another of
            equivalent value without giving notice. The gift voucher will be subjected to the terms and conditions
            detailed on this link: https://sportswhereiam.com/terms-of-service/
          </TermsText>

          <TermsText>
            <MarkTitle>Notification of the winner</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="13">
              <li>
                The winner will be notified by email address listed in their profile within 2 business days of the
                judging of entries and their name will be published on http://sportswhereiam.com/terms-of-service/
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Limitation of liability and variation of terms</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="14">
              <li>
                If any act, omission, event or circumstance occurs which is beyond the reasonable control of the
                Promoter and which prevents the Promoter from complying with these terms and conditions, the Promoter
                will not be liable for any failure to perform or delay in performing its obligations. The Promoter
                reserves the right (subject to any applicable law) to cancel, terminate or modify or suspend this
                promotion.
              </li>
              <li>
                The Promoter, its related bodies corporate and their respective officers, employees, contractors and
                agents (Promotion Parties) will not be liable for any losses, damages, expenses, costs or personal
                injuries arising out of this promotion, the promotion of this promotion or the use of any prize,
                including but not limited to any breach of these terms and conditions, contract or tort (including
                negligence) and any other common law, equitable or statutory remedy (Damages) whatsoever, including but
                not limited to direct, indirect and consequential Damages, including Damages that cannot reasonably be
                considered to arise naturally and in the ordinary course of things, even if those Damages were in the
                contemplation of the Promotion Parties.
              </li>
              <li>
                The exclusion of liability in clause 20 does not apply to limit or exclude liability: a) for personal
                injury or death suffered or sustained in connection with the supply of goods or services which are
                supplied by the Promoter in the ordinary course of business. To remove doubt: third party goods or
                services, which other than in connection with this promotion, are in the normal course of business
                supplied by a third party unrelated to the Promotion Parties, are not supplied by the Promoter in the
                ordinary course of business; or b) to the extent it is not permissible at law to limit or exclude
                liability in the manner contemplated in that clause (in which case that liability is limited to the
                maximum extent allowable by law).
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Entry details and privacy</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="17">
              <li>
                Entry details remain the property of the Promoter. The name and photograph of the winner may be used for
                promotional purposes by the Promoter, unless the winner otherwise notifies the Promoter at the time of
                accepting the prize. Entrants consent to the Promoter using personal information provided in connection
                with this promotion for the purposes of facilitating the conduct of the promotion and awarding any
                prizes (including to third parties involved in the promotion and any applicable statutory authorities)
                and to conduct marketing activities. Without limiting the foregoing, entrants’ personal information
                provided in connection with this promotion will be handled in accordance with the Promoter’s Privacy
                Statement, visit https://sportswhereiam.com/privacy/
              </li>
            </NumericList>
          </TermsText>

          <TermsText>
            <MarkTitle>Tax Implications</MarkTitle>
          </TermsText>
          <TermsText>
            <NumericList start="18">
              <li>
                The Promoter accepts no responsibility for any tax implications that may arise from accepting a prize.
                Independent financial advice should be sought.
              </li>
            </NumericList>
          </TermsText>
        </TermsSection>
      </TermsWrapper>
    </>
  );
};

export default TermsOfService;
