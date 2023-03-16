import React from 'react';

import { FAQSection, HighlightWrapper, TopicWrapper, QuoteWrapper } from './styles';

import FAQMenuItem from './FAQMenuItem';

const FAQList = () => {
  return (
    <>
      <FAQSection title="Frequently Asked">
        <FAQMenuItem title="Where is Sports Where I Am based?">
          <p>
            We are based in Melbourne, Australia. We have been helping travelling sports fans have amazing sports
            experiences since 2013.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Why should I buy tickets through Sports Where I Am?">
          <p>
            We built our service with travelling sports fans in mind - usually for those travelling overseas. So buying
            tickets from Sports Where I Am means you’re dealing with a team who are focused on the same things that you
            are.
          </p>
          <p>
            Our responsive customer service team will be on hand to provide you with any advice you need during the
            planning stages of your trip, as well as any follow-up you might need while you’re actually on it. With
            travel, often plans change or are impacted by factors outside of your control. In these circumstances, it’s
            good to deal with a team who are aware of the context of your booking to get it sorted quickly.
          </p>
          <p>
            Prices on our site are competitive - we’ve gone into a bit of detail about this{' '}
            <a href="https://blog.sportswhereiam.com/2019/05/compare-best-sports-ticket-prices-australia-usa-europe/">
              here
            </a>
            . This includes how our prices compare with other sites, as well as the things travellers need to consider
            when purchasing tickets for events overseas.
          </p>
          <p>
            We only deal with trustworthy ticket suppliers around the world, but it’s also comforting to know that your
            tickets are covered by our 100% Money-Back Guarantee, outlined below.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="What’s the best way for me to contact Sports Where I Am?">
          <p>
            Usually the best way to get in contact with our Australian-based Customer Service team is via{' '}
            <a href="team@sportswhereiam.com; ‎">email</a> or
            <a href="https://www.messenger.com/t/sportswhereiam">Facebook Messenger</a>.
          </p>
          <p>If you have a more urgent enquiry, you can call us 24/7, 7 days a week:</p>
          <p>Within Australia: 1300 995 136</p>
          <p>All other countries: +61 (0) 3 6111 3513</p>
          <p>
            Head over to the <a href="http://www.sportswhereiam.com/contact">Contact Us</a> page contact details
            regarding partnership, media or employment enquiries.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Are you hiring?">
          <p>Hey, we might be! Check out our employment vacancies here.</p>
        </FAQMenuItem>
        <FAQMenuItem title="How safe is my private data on Sports Where I am?">
          <p>
            Any information that you provide is safe. We won’t sell or share your email address or other personal
            information. You can check out our full privacy policy{' '}
            <a href="http://sportswhereiam.com/privacy-policy/">here</a>.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="What are the details of the SWIAM Money Back Guarantee?">
          <p>
            We’ve mentioned elsewhere that we only deal with trustworthy ticket suppliers who have a proven track
            record, or directly with teams, leagues and venues through our various ticket supply partnerships. In the
            event that something does go wrong, though, we have a 100% money-back guarantee on all tickets sold.
          </p>

          <p>
            Our 100% Money Back Guarantee is based on the following principles:
            <TopicWrapper>- All tickets sold on Sports Where I Am are legitimate and valid for entry</TopicWrapper>
          </p>
          <p>
            All of the tickets sold on SWIAM are guaranteed to be authentic tickets valid for entry to the particular
            event. If there are any issues at all accessing the event on game day customers should contact us ASAP. In
            the unlikely event of a gate access problem that you can’t resolve with event staff, make sure you get
            evidence of ticket invalidity from the venue. SWIAM requires this evidence in order to obtain a refund from
            the ticket seller who supplied the order. The evidence could be a letter from the venue or an email
            identifiably from venue personnel verifying that there was a problem scanning the tickets.
          </p>
          <TopicWrapper>
            - The ticket you receive will always be the same, of equal or higher value than those originally booked
          </TopicWrapper>
          <p>
            In the unlikely event that the seats purchased become unavailable we will provide an equal or superior
            seating alternative.
          </p>
          <TopicWrapper>- All tickets sold on Sports Where I Am will be delivered in time for the event.</TopicWrapper>
          <p>
            Tickets sold on Sports Where I Am are delivered in a variety of methods, depending on the ticket types
            outlined in the Ticketing section below. Regardless of the delivery type, we guarantee that the tickets will
            be delivered to the purchaser in sufficient time before the event occurs. Please note that the purchaser is
            responsible for making themselves available to receive delivery of the tickets when a delivery attempt is
            made. If you have not received your tickets 48 hours prior to the event, and you have not already been
            contacted by our bookings team, we recommend that you email support for an update on the status of your
            booking. We will work with you to resolve any such situations.
          </p>
          <TopicWrapper>- If your event is cancelled, a full refund will be issued.</TopicWrapper>
          <p>
            We will offer a full refund of the ticket order for any event that is confirmed as cancelled. Please note
            that you may be required to return the tickets prior to receiving a refund.
          </p>
          <TopicWrapper>
            - In summary, you will be entitled to Sports Where I Am’s 100% Money-Back Guarantee if:
            <QuoteWrapper>
              - Your ticket order is accepted and confirmed, but your tickets are not delivered to you.
            </QuoteWrapper>
            <QuoteWrapper>
              - Your ticket order is accepted and confirmed by us, but are delivered too late for the tickets to arrive
              in time for the event.
            </QuoteWrapper>
            <QuoteWrapper>
              - You were denied entry at the event because of the tickets or invalid tickets were provided by the
              seller. (* Verified proof must be provided by the venue in written letter format. Written or stamped
              "voids" do not constitute verified proof.)
            </QuoteWrapper>
            <QuoteWrapper>- Your event was cancelled.</QuoteWrapper>
          </TopicWrapper>
        </FAQMenuItem>
        <FAQMenuItem title="Where do these tickets come from? Are they legitimate?">
          <p>
            On Sports Where I Am, our ticket supply is made up of a combination of Primary and Secondary ticketing
            providers from around the world. All tickets on Sports Where I Am are guaranteed to be legitimate and valid
            for entry.
          </p>
          <p>
            <HighlightWrapper>Primary ticketing</HighlightWrapper> refers to ticket supply that we have access to
            directly from a team, league, venue, or other original source of tickets. People often refer to these as
            “official tickets”, even though the actual classification can vary.
          </p>
          <p>
            <HighlightWrapper>Secondary ticketing</HighlightWrapper> refers to tickets made available for sale after the
            seller has previously purchased from a primary ticketing provider. In a lot of cases, these are provided to
            us by season-ticket holders for particular teams or venues who then re-sell tickets for the games they
            cannot attend at a price determined by the market. Prices for these tickets will rise and fall based on
            supply and demand. The result is that tickets on our website are often sold either above or below face
            value. If you have a physical ticket, the price printed on it might look different to what you paid.
          </p>
          <p>
            It’s worth mentioning here that we only partner with accredited secondary ticket providers. We do not work
            with platforms that allow anyone to just list tickets that they might not be able to take responsibility
            for. Our suppliers have a proven track record and accountability and that is the reason we are comfortable
            to offer their tickets to our users backed by our 100% money-back guarantee.
          </p>
          <p>
            The secondary ticket market has changed the way people get to see games today. It is a billion-dollar
            industry that allows fans to grab tickets to sold out or tough-to-access events. It has been operating for
            decades and is a popular and trusted way for fans to get access to any game.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Are the prices on Sports Where I Am competitive with other sites?">
          <p>
            {' '}
            We spend a lot of time ensuring we offer competitive prices. If you’d like to learn more about our prices
            compared to other sites,{' '}
            <a href="https://blog.sportswhereiam.com/2019/05/compare-best-sports-ticket-prices-australia-usa-europe/">
              read the detailed investigation we did on our blog here.
            </a>
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="I’ve seen a better price for a similar ticket elsewhere. Do you price match?">
          <p>
            {' '}
            We don’t have a price-matching policy. There are a few things to consider when comparing our prices with
            those listed on other websites. You can{' '}
            <a href="https://blog.sportswhereiam.com/2019/05/compare-best-sports-ticket-prices-australia-usa-europe/">
              read our detailed instructions for comparing prices here.
            </a>
          </p>
          <p>
            {' '}
            If you’ve gone through all of the steps outlined in the above link, and you still find a major discrepancy
            between our price and the price listed elsewhere for a ticket in the same section, get in contact with us.
            One of our customer service team will see what can be arranged in your particular scenario.
          </p>
          <p>
            {' '}
            You should also check the Stories and Highlights on our Instagram account to see if we have any active
            discount codes running.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="What’s the Booking Fee for?">
          <p>
            We charge a simple, flat 15% booking fee across all of our tickets for sports events. We do not charge you
            for delivery or for printing of tickets, or for currency conversion fees, international currency exchange
            fees, or anything else like that. Our booking fee is applied to absorb any of those costs as well as to pay
            our staff.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="When is the best time to buy?">
          <p>
            We get this question so often that we wish we had a better hard-and-fast rule to share with you. It really
            depends on so many factors. In some cases, tickets are more expensive when events are first listed - or when
            a schedule is released - as the supply is lower and people want to lock in their tickets early. In other
            cases, a season will be underway and a certain matchup might be particularly hyped or popular that it wasn’t
            at the time that the schedule was announced, which results in the price going up the closer it gets. An
            injury, suspension or even weather can impact demand for a particular event.
          </p>
          <p>
            So, yeah, we don’t really get into the prediction game of when the prices for a particular event will be at
            their lowest point. What we can say is that the average time between when a person books a ticket on Sports
            Where I Am and when their event is between 9 and 10 weeks out from the event happening.
          </p>
        </FAQMenuItem>
        <FAQMenuItem
          title="In terms of ticket delivery methods, what’s the difference between a Mobile Ticket, an eTicket,
        International Express Delivery and Hotel Delivery?"
        >
          <p>
            Ticket delivery can take a number of different forms, and like everything, it depends on a lot of factors
            that might be unique to the team, league, venue, or location you’re visiting. We are conscious of the fact
            that most of our customers are travellers, so we work hard to make the process as convenient as possible in
            the travel context.
          </p>
          <p>
            Tickets listed as <HighlightWrapper>eTickets</HighlightWrapper> are PDF versions of your tickets that are
            emailed to you in the lead up to your event. In most cases, these need to be printed off before your event
            so you can scan the barcode at the gate.
          </p>
          <p>
            <HighlightWrapper>Mobile Tickets</HighlightWrapper> require a mobile device to display a barcode/QR code at
            the gate for entry. Most teams, leagues and venues around the world are making a push towards mobile
            ticketing due to the benefits in security and convenience. Sometimes, Mobile Tickets will require you to
            download an Official App in order to receive a transfer. We will provide you with all of the instructions
            you need to access your tickets. You do not need an International SIM card to access mobile tickets - you
            just need a device that can access WiFi. Your phone can usually do this whilst still in Airplane mode, and
            all venues using Mobile Ticketing have WiFi access.
          </p>
          <p>
            <HighlightWrapper>International Express Delivery</HighlightWrapper> tickets are usually tickets that are
            hard-copy only for a specific reason. The majority of our customers purchase from a different country to
            their event, so for almost all International Express Delivery tickets, we’ll get in contact soon after your
            booking to find a convenient delivery method for you whilst you're on your trip. We’ve found that this is a
            better ‘peace of mind’ process rather than having them shipped around the world to then travel back to the
            event with you, as timelines can get too tight that way.
          </p>
          <p>
            <HighlightWrapper>Hotel Delivery</HighlightWrapper> tickets will require you to provide a Hotel address
            during the booking process, and we arrange to have the tickets delivered there for you.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="When will I receive my tickets after I’ve purchased them?">
          <p>
            Once again, the answer here is “it depends on a lot of factors”, including the Delivery Type, the Teams
            involved, the Venue your event is being held in, the League the teams are from, and much more. For example,
            some higher-profile events prefer to hold their ticket delivery until much closer to the day of the event as
            a security measure. The <HighlightWrapper>absolute latest</HighlightWrapper> you can expect to receive your
            tickets is <HighlightWrapper>24-48 hours before the starting time</HighlightWrapper> of the event, but in
            most cases it is well before then. We’ll be in touch with you throughout the process, so you’re informed of
            what to expect.
          </p>
          <p>
            If it helps, we’ve been helping people have great sports experiences overseas since 2013 and we’re proud of
            the fact that we get consistently positive feedback, with many{' '}
            <a href="https://www.instagram.com/sportswhereiam/">taking the time to send us photos</a> from their trip.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Do I need an International SIM card in order to receive delivery of Mobile Tickets?">
          <p>
            No, you don’t need an International SIM card to access mobile tickets - you just need a mobile device that
            can access WiFi. Your phone can usually do this whilst still in Airplane mode, and all venues using Mobile
            Ticketing have WiFi access. You might need to access a third-party service (such as an Official App of the
            home team) beforehand in order to receive the transfer of your tickets, but we will provide you with
            tailored instructions for any delivery type.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="What currencies are available on Sports Where I Am?">
          <p>
            We offer 8 different international currencies for you to choose from: USD, AUD, GBP, EUR, SGD, NZD, CAD,
            HKD. Simply select the currency dropdown option to choose your preferred currency.
          </p>
          <p>*All Australian events are displayed in AUD.</p>
        </FAQMenuItem>
        <FAQMenuItem title="Will there be someone else’s name on my ticket? Is this OK?">
          <p>
            As mentioned in the ‘delivery types’ question above, the global push towards Mobile Ticketing means there
            are fewer instances where a ticket you purchase from SWIAM will have someone else’s name on it.
          </p>
          <p>
            In some cases, with eTickets or Hard Copy tickets, the original season ticket holder’s name might appear on
            tickets you purchased from our service. This is nothing to worry about. Secondary ticketing has been adopted
            by many leagues around the world.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Can I cancel my order after I have placed it?">
          <p>
            As a general rule, all sales are final. Please be absolutely sure you want to purchase the tickets before
            ordering. If you have any concerns please contact us.
          </p>
        </FAQMenuItem>

        <FAQMenuItem title="What if the event is cancelled?">
          <p>
            If an event gets permanently cancelled, you are eligible for a 100% refund. See the ‘Our Guarantee’ section
            above for more details on this.
          </p>
          <p>
            Please note that the refund constitutes the price you paid for the tickets. For more details, please refer
            to the Sports Where I Am Ticket Purchase Terms.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Something has gone wrong with my order, help!">
          <p>
            There are some occasions where the booking process gets disrupted, or errors occur. This can be due to
            issues with information entered during the payment process, or tickets sitting in your Shopping Cart for too
            long, or credit card provider security checks, or something else.
          </p>
          <p>
            In most cases, the best place to start is to check your emails to see if any correspondence has come through
            from our booking platform or from our customer service team. It’s also a good idea to check the transactions
            list on the credit card that you supplied at checkout, to see if a payment (or a pre-authorisation) was
            processed.
          </p>
          <p>
            If the problem remains unclear, please head over to our ‘Contact Us’ page to let us know and we’ll get
            straight to fixing it for you.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="What information do I need to provide at the hotel I booked through Sports Where I Am?">
          <p>
            We recommend taking your booking confirmation number, Government issued ID (License, Passport) & your credit
            card.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Can I change my check-in or check-out time?">
          <p>
            If you would like to request an earlier check-in time or later check-out time, we recommend contacting the
            hotel directly. If this can be facilitated, it might result in extra charges.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Special needs/requests">
          <p>
            For all special needs or requests, we recommend contacting the hotel directly using the contact details
            listed on your booking reference.
          </p>
        </FAQMenuItem>
        <FAQMenuItem title="Help, I need to cancel or amend my booking!">
          <p>Please get in contact with us and we will help you through your circumstance.</p>
        </FAQMenuItem>
      </FAQSection>
    </>
  );
};

export default FAQList;
