import React from 'react';
import ContactHeaderBackground from '@images/home-background.jpg';
import styled from '@emotion/styled';
import {
  PrivacySection,
  PrivacyText,
  MarkBold,
  PrivacyWrapper,
  QuoteWrapper,
  QuoteNumber,
  FocusWrapper,
} from './styles';
import HeaderMedium from '../Layout/HeaderMedium';

const PrivacyHeaderMedium = styled(HeaderMedium)`
  p {
    text-shadow: 0 0 5px black;
  }
  > figure img {
    opacity: 0.8;
  }
`;

const PrivacyPolicy = () => {
  const headerData = {
    title: 'Sports Where I Am Privacy Policy',
    details: 'Details of our Privacy Policy can be read here.',
    mobileImageURL: ContactHeaderBackground,
    imageURL: ContactHeaderBackground,
  };
  return (
    <>
      <PrivacyHeaderMedium headerData={headerData} />
      <PrivacyWrapper>
        <PrivacySection title="1. PURPOSE OF OUR POLICY">
          <PrivacyText>
            <MarkBold>1.1</MarkBold> WhereIAm Group Pty Ltd (ACN 157 847 928) ‘Sports Where I Am’ (we, us or our) has
            adopted this Privacy Policy to ensure that we have standards in place to protect the Personal Information
            that we collect about individuals that is necessary and incidental to:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> Providing the system and services that we offer; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> The normal day-to-day operations of our business.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>1.2</MarkBold> This Privacy Policy follows the standards of both:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> The Australian Privacy Principles set by the Australian Government for the
              handling of Personal Information under the Privacy Act 1988 (Cth) <MarkBold>(Privacy Act)</MarkBold>; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> The regulations and principles set by the European Union’s General Data
              Protection Regulation <MarkBold>(GDPR)</MarkBold> for the handling of Personal Data.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>1.3</MarkBold> By publishing this Privacy Policy we aim to make it easy for our customers and the
            public to understand what Personal Information we collect and store, why we do so, how we receive and/or
            obtain that information, and the rights an individual has with respect to their Personal Information in our
            possession.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="2. WHO AND WHAT THIS POLICY APPLIES TO">
          <PrivacyText>
            <MarkBold>2.1</MarkBold> Our Privacy Policy deals with how we handle “personal information” and “personal
            data” as it is defined in the Privacy Act and the GDPR respectively{' '}
            <MarkBold>(Personal Information)</MarkBold>.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>2.2</MarkBold> We handle Personal Information in our own right and also for and on behalf of our
            customers and users.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>2.3</MarkBold> Our Privacy Policy does not apply to information we collect about businesses or
            companies, however it does apply to information about the people in those businesses or companies that we
            store.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>2.4</MarkBold> The Privacy Policy applies to all forms of information, physical and digital,
            whether collected or stored electronically or in hardcopy.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>2.5</MarkBold> If, at any time, an individual provides Personal Information or other information
            about someone other than himself or herself, the individual warrants that they have that person's consent to
            provide such information for the purpose specified.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>2.6</MarkBold> We consider the protection of privacy of children very important. We do not
            knowingly collect personal data from children under the age of 16 without obtaining parental consent. If an
            individual is under 16 years of age, then they should not use or access the service at any time or in any
            manner. If we learn that Personal Information has been collected on the service from persons under 16 years
            of age and without verifiable parental consent, then we will take the appropriate steps to delete such
            information.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="3. THE INFORMATION WE COLLECT">
          <PrivacyText>
            <MarkBold>3.1</MarkBold> In the course of business it is necessary for us to collect Personal Information.
            This information allows us to identify who an individual is for the purposes of our business, share Personal
            Information when asked of us, contact the individual in the ordinary course of business and transact with
            the individual. Without limitation, the type of information we may collect is:
            <QuoteWrapper>
              <MarkBold>(a) Personal Information.</MarkBold> We may collect personal details such as an individual’s
              name, location, date of birth, nationality, family details and other information defined as “Personal
              Information” in the Privacy Act that allows us to identify who the individual is;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b) Contact Information.</MarkBold> We may collect information such as an individual’s email
              address, telephone & fax number, third-party usernames, residential, business and postal address and other
              information that allows us to contact the individual;
            </QuoteWrapper>
            <QuoteWrapper>
              <FocusWrapper>
                <MarkBold>(c) Profile Information.</MarkBold> Including when you create an account with us, or when you
                connect or provide us with your third party profile details (e.g. Facebook). In these circumstances we
                may collect information specified on those profiles, as well as any content like messages, posts or
                photos you post or make available;
              </FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d) Financial Information.</MarkBold> We may collect financial information related to an
              individual such as any bank or credit card details used to transact with us and other information that
              allows us to transact with the individual and/or provide them with our services;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e) Technical Information.</MarkBold> We may collect the IP Addresses of users accessing our
              systems, the actions of users on our website and other digital information created by an individual’s use
              of our online systems;
            </QuoteWrapper>
            <QuoteWrapper>
              <FocusWrapper>
                <MarkBold>(f) Booking Information:</MarkBold> We may collect information specific to bookings that are
                made or facilitated through us, which may include information regarding your planned itinerary, as well
                as other types of information such Contact Information, Financial Information and Statistical
                Information;
              </FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(g) Statistical Information.</MarkBold> We may collect information about an individual’s online
              and offline preferences, habits, movements, trends, decisions, associations, memberships, finances,
              purchases and other information for statistical purposes; and
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(h) Information an individual sends us.</MarkBold> We may collect any personal correspondence
              that an individual sends us, or that is sent to us by others about the individual’s activities.{' '}
              <FocusWrapper>
                This includes, without limitation, information or feedback contained in communications between you and
                our customer support teams, which from time to time might take place over third party platforms (e.g.
                Facebook).{' '}
              </FocusWrapper>
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>3.2</MarkBold> We may collect other Personal Information about an individual, which we will
            maintain in accordance with this Privacy Policy.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>3.3</MarkBold> We may also collect non-Personal Information about an individual such as
            information regarding their computer, network and browser. Where non-Personal Information is collected the
            Australian Privacy Principles and the GDPR do not apply.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="4. HOW INFORMATION IS COLLECTED">
          <PrivacyText>
            <MarkBold>4.1</MarkBold> Most information will be collected in association with an individual’s use of
            Sports Where I Am, an enquiry about Sports Where I Am or generally dealing with us. However we may also
            receive Personal Information from sources such as advertising, an individual’s own promotions, public
            records, mailing lists, contractors, staff, recruitment agencies and our business partners. In particular,
            information is likely to be collected as follows:
            <QuoteWrapper>
              <MarkBold>(a) Registrations/Subscriptions.</MarkBold> When an individual registers or subscribes for a
              service, account, connection or other process whereby they enter Personal Information details in order to
              receive or access something, including a transaction;
            </QuoteWrapper>
            <QuoteWrapper>
              <FocusWrapper>
                <MarkBold>(b) Purchases/Bookings.</MarkBold> When an individual purchases tickets, or makes bookings
                with our assistance, or when we are engaged to make such purchases or bookings on behalf of individuals;
              </FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c) Sharing with other Users.</MarkBold> When an individual provides Personal Information to
              other users of the website or service;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d) Supply.</MarkBold> When an individual supplies us with goods or services;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e) Contact.</MarkBold> When an individual contacts us in any way,{' '}
              <FocusWrapper>including without limitation through our customer service channels;</FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(f) Access.</MarkBold> When an individual accesses us physically we may require them to provide
              us with details for us to permit them such access. When an individual accesses us through the internet we
              may collect information using cookies (if relevant – an individual can adjust their browser’s setting to
              accept or reject cookies) or analytical services; and/or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(g) Pixel Tags.</MarkBold> Pixel tags enable us to send email messages in a format customers can
              read and they tell us whether mail has been opened.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>4.2</MarkBold> As there are many circumstances in which we may collect information both
            electronically and physically, we will endeavour to ensure that an individual is always aware of when their
            Personal Information is being collected.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>4.3</MarkBold> Where we obtain Personal Information without an individual’s knowledge (such as by
            accidental acquisition from a client) we will either delete/destroy the information, or inform the
            individual that we hold such information, in accordance with the Australian Privacy Principles and the GDPR.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="5. 5WHEN PERSONAL INFORMATION IS USED & DISCLOSED">
          <PrivacyText>
            <MarkBold>5.1</MarkBold> In general, the primary principle is that we will not use any Personal Information
            other than for the purpose for which it was collected other than with the individual’s permission. The
            purpose of collection is determined by the circumstances in which the information was collected and/or
            submitted,{' '}
            <FocusWrapper>
              but generally relates to the operation of our business or the provision of services request by you.
            </FocusWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.2</MarkBold> We will only process Personal Information when we can identify a lawful basis to do
            so. It is always our responsibility to ensure that we can demonstrate which lawful basis applies to the
            particular processing purpose.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.3</MarkBold> The most common lawful bases relied upon are:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> Consent: we will only rely upon express, clear and informed consent. Any consent
              provided may specify and/or restrict the purpose, and can be withdrawn at any time without penalty. We
              will keep a record of when and how we got consent from an individual.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> Legitimate interests: we will only rely upon an identifiable legitimate interest
              where we can demonstrate that the processing of Personal Information is necessary to achieve it by
              balancing it against the individual’s interests, rights and freedoms. We will keep a record of our
              legitimate interests assessments
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.4</MarkBold> We will retain Personal Information for the period necessary to fulfil the purposes
            outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.5</MarkBold> If it is necessary for us to disclose an individual’s Personal Information to third
            parties in a manner compliant with the Australian Privacy Principles in the course of our business, we will
            inform you that we intend to do so, or have done so, as soon as practical.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.6</MarkBold> We will not disclose or sell an individual’s Personal Information to unrelated
            third parties under any circumstances, unless the prior written consent of the individual is obtained.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.7</MarkBold> Information is used to enable us to operate our business, especially as it relates
            to an individual. This may include:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> The provision of goods and services between an individual and us;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> Verifying an individual’s identity;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c)</MarkBold> Communicating with an individual about:
              <QuoteNumber>
                <MarkBold>i</MarkBold> Their relationship with us;
              </QuoteNumber>
              <QuoteNumber>
                <MarkBold>ii</MarkBold> Our goods and services;
              </QuoteNumber>
              <QuoteNumber>
                <MarkBold>iii</MarkBold> Our own marketing and promotions to customers and prospects;
              </QuoteNumber>
              <QuoteNumber>
                <MarkBold>iv</MarkBold> Offers from our partners to our customers;
              </QuoteNumber>
              <QuoteNumber>
                <MarkBold>v</MarkBold> Competitions, surveys and questionnaires;
              </QuoteNumber>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d)</MarkBold> Investigating any complaints about or made by an individual, or if we have reason
              to suspect that an individual is in breach of any of our terms and conditions or that an individual is or
              has been otherwise engaged in any unlawful activity; and/or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e)</MarkBold> As required or permitted by any law (including the Privacy Act).
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.8</MarkBold> There are some circumstances in which we must disclose an individual’s information:
            <QuoteWrapper>
              <FocusWrapper>
                <MarkBold>(a)</MarkBold> Where the disclosure is necessary to provide you with services that you have
                requested, and we have agreed to provide;
              </FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <FocusWrapper>
                <MarkBold>(b)</MarkBold> Where the disclosure is necessary to improve our service delivery and business
                practices, though in these circumstances we will endeavour to de-identify any personal information
                before disclosing it;
              </FocusWrapper>
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c)</MarkBold> Where we reasonably believe that an individual may be engaged in fraudulent,
              deceptive or unlawful activity that a governmental authority should be made aware of;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d)</MarkBold> As required by any law (including the Privacy Act); and/or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e)</MarkBold> In order to sell our business (in that we may need to transfer Personal
              Information to a new owner).
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.9</MarkBold> We will not disclose an individual’s Personal Information to any entity outside of
            Australia that is in a jurisdiction that does not have a similar regime to the Australian Privacy Principles
            or an implemented and enforceable privacy policy similar to this Privacy Policy. We will take reasonable
            steps to ensure that any disclosure to an entity outside of Australia will not be made until that entity has
            agreed in writing with us to safeguard Personal Information as we do.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.10</MarkBold> We may utilise third-pay service providers (such as Gmail from Google, Inc., and
            MailChimp from The Rocket Science Group LLC) to communicate with an individual and to store contact details
            about an individual. These service providers are located in the United States of America.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>5.11</MarkBold> An individual who uses Sports Where I Am from outside of Australia will be sending
            information (including Personal Information) to the United States where our servers are located. That
            information may then be transferred within the United States or back out of the United States to other
            countries outside of the individual’s country of residence, depending on the type of information and how it
            is stored by us. These countries may not necessarily have data protection laws as comprehensive or
            protective as those in your country of residence, however our collection, storage and use of Personal
            Information will at all times continue to be governed by this Privacy Policy.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="6. OPTING “IN” OR “OUT”">
          <PrivacyText>
            <MarkBold>6.1</MarkBold> An individual may opt to not have us collect their Personal Information. This may
            prevent us from offering them some or all of our services and may terminate their access to some or all of
            the services they access with or through us. They will be aware of this when:
            <QuoteWrapper>
              <MarkBold>(a) Opt In.</MarkBold> Where relevant, the individual will have the right to choose to have
              information collected and/or receive information from us; or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b) Opt Out.</MarkBold> Where relevant, the individual will have the right to choose to exclude
              himself or herself from some or all collection of information and/or receiving information from us.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>6.2</MarkBold> If an individual believes that they have received information from us that they did
            not opt in or out to receive, they should contact us on the details below.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="7. THE SAFETY & SECURITY OF PERSONAL INFORMATION">
          <PrivacyText>
            <MarkBold>7.1</MarkBold> We have appointed a Data Protection Officer to oversee the management of this
            Privacy Policy and compliance with the Australian Privacy Principles, the Privacy Act and the GDPR. This
            officer may have other duties within our business and also be assisted by internal and external
            professionals and advisors.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.2</MarkBold> We will take all reasonable precautions to protect an individual’s Personal
            Information from unauthorised access. This includes appropriately securing our physical facilities and
            electronic networks.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.3</MarkBold> Sports Where I Am uses SSL encryption to store and transfer Personal Information.
            Despite this, the security of online transactions and the security of communications sent by electronic
            means or by post cannot be guaranteed. Each individual that provides information to us via the internet,
            over the phone or by post does so at their own risk. We cannot accept responsibility for misuse or loss of,
            or unauthorised access to, Personal Information where the security of information is not within our control.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.4</MarkBold> We are not responsible for the privacy or security practices of any third party
            (including third parties that we are permitted to disclose an individual’s Personal Information to in
            accordance with this policy or any applicable laws) unless otherwise required by the Privacy Act and the
            GDPR. The collection and use of an individual’s information by such third parties may be subject to separate
            privacy and security policies.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.5</MarkBold> If an individual suspects any misuse or loss of, or unauthorised access to, their
            Personal Information, they should let us know immediately.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.6</MarkBold> We are not liable for any loss, damage or claim arising out of another person’s use
            of the Personal Information where we were authorised to provide that person with the Personal Information.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.7</MarkBold> Where there is a breach of security leading to the accidental or unlawful
            destruction, loss, alteration, unauthorised disclosure of, or access to, Personal Information, then:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> We will immediately establish the likelihood and severity of the resulting risk
              to wider rights and freedoms of natural persons;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> If we determine there is a risk from the security breach, then we will
              immediately notify the relevant supervisory authority and provide all relevant information on the
              particular breach, and by no later than 72 hours after having first become aware of the breach;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c)</MarkBold> If we determine there is a high risk from the security breach (a higher threshold
              than set for notifying supervisory authorities), we will immediately notify the affected individuals and
              provide all relevant information on the particular breach without undue delay.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>7.8</MarkBold> We will document the facts relating to any security breach, its effects and the
            remedial action taken, and investigate the cause of the breach and how to prevent similar situations in the
            future.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="8. HOW TO ACCESS AND/OR UPDATE INFORMATION">
          <PrivacyText>
            <MarkBold>8.1</MarkBold> Users of Sports Where I Am can update their Personal Information from within their
            Sports Where I Am account or profile.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.2</MarkBold> Subject to the Australian Privacy Principles and the GDPR, an individual has the
            right to request from us the Personal Information that we have about them, and we have an obligation to
            provide them with such information as soon as practicable, and by no later than 28 days of receiving the
            written request. The individual is free to retain and reuse their Personal Information for their own
            purposes. We may be required to transmit the Personal Information directly to another organisation if this
            is technically feasible.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.3</MarkBold> If an individual cannot update their own information, we will correct any errors in
            the Personal Information we hold about an individual within 28 days of receiving written notice from them
            about those errors, or two months where the request for rectification is complex.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.4</MarkBold> It is an individual’s responsibility to provide us with accurate and truthful
            Personal Information. We cannot be liable for any information that is provided to us that is incorrect.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.5</MarkBold> Where a request to access Personal Information is manifestly unfounded, excessive
            and/or repetitive, we may refuse to respond or charge an individual a reasonable fee for our costs incurred
            in meeting any of their requests to disclose the Personal Information we hold about them. Where we refuse to
            respond to a request, we will explain why to the individual, informing them of their right to complain to
            the supervisory authority and to a judicial remedy without undue delay and at the latest within 28 days.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.6</MarkBold> We may be required to delete or remove all Personal Information we have on an
            individual upon request in the following circumstances:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> Where the Personal Information is no longer necessary in relation to the purpose
              for which it was originally collected and/or processed;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> When the individual withdraws consent;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c)</MarkBold> When the individual objects to the processing and there is no overriding
              legitimate interest for continuing the processing;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d)</MarkBold> The processing of the Personal Information was otherwise in breach of the GDPR;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e)</MarkBold> The Personal Information has to be erased in order to comply with a legal
              obligation; and/or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(f)</MarkBold> The Personal Information is in relation to a child.
            </QuoteWrapper>
          </PrivacyText>
          <PrivacyText>
            <MarkBold>8.7</MarkBold> We may refuse to delete or remove all Personal Information we have on an individual
            where the Personal Information was processed for the following reasons:
            <QuoteWrapper>
              <MarkBold>(a)</MarkBold> To exercise the right of freedom of expression and information;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(b)</MarkBold> To comply with a legal obligation for the performance of a public interest task
              or exercise of official authority.
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(c)</MarkBold> For public health purposes in the public interest;
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(d)</MarkBold> Archiving purposes in the public interest, scientific research historical
              research or statistical purposes; or
            </QuoteWrapper>
            <QuoteWrapper>
              <MarkBold>(e)</MarkBold> The exercise or defence of legal claims.
            </QuoteWrapper>
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="9. COMPLAINTS AND DISPUTES">
          <PrivacyText>
            <MarkBold>9.1</MarkBold> If an individual has a complaint about our handling of their Personal Information,
            they should address their complaint in writing to the details below.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>9.2</MarkBold> If we have a dispute regarding an individual’s Personal Information, we both must
            first attempt to resolve the issue directly between us.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>9.3</MarkBold> An individual shall have the right to seek a judicial remedy where he or she
            considers that his or her rights under the GDPR have been infringed as a result of the processing of his or
            her Personal Information in non-compliance with the GDPR. Any proceedings should be commenced in Victoria,
            Australia, where we are established.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>9.4</MarkBold> If we become aware of any unauthorised access to an individual’s Personal
            Information we will inform them at the earliest practical opportunity once we have established what was
            accessed and how it was accessed.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="10. CONTACTING INDIVIDUALS">
          <PrivacyText>
            <MarkBold>10.1</MarkBold> From time to time, we may send an individual important notices, such as changes to
            our terms, conditions and policies. Because this information is important to the individual’s interaction
            with us, they may not opt out of receiving these communications.
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="11. CONTACTING US">
          <PrivacyText>
            <MarkBold>11.1</MarkBold> All correspondence with regards to privacy should be addressed to:
            <QuoteWrapper>
              Data Protection Officer
              <br />
              WhereIAm Group Pty Ltd
              <br />
              PO Box 1200
              <br />
              Windsor VIC 3141
              <br />
              <br />
              <a href="privacy@sportswhereiam.com">privacy@sportswhereiam.com</a>
              <br />
              <br />
              You may contact the Data Protection Officer by email in the first instance.
            </QuoteWrapper>
          </PrivacyText>
        </PrivacySection>

        <PrivacySection title="12. ADDITIONS TO THIS POLICY">
          <PrivacyText>
            <MarkBold>12.1</MarkBold> If we decide to change this Privacy Policy, we will post the changes on our
            webpage at <a href="http://sportswhereiam.com/privacypolicy">sportswhereiam.com/privacypolicy</a>. Please
            refer back to this Privacy Policy to review any amendments.
          </PrivacyText>
          <PrivacyText>
            <MarkBold>12.2</MarkBold> We may do things in addition to what is stated in this Privacy Policy to comply
            with the Australian Privacy Principles and the GDPR, and nothing in this Privacy Policy shall deem us to
            have not complied with the Australian Privacy Principles and the GDPR.
          </PrivacyText>
        </PrivacySection>
      </PrivacyWrapper>
    </>
  );
};

export default PrivacyPolicy;
