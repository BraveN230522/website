import React from 'react';
import ContactHeaderBackground from '@images/home-background.jpg';
import { TicketSection, TicketText, TicketWrapper, QuoteWrapper } from './styles';
import HeaderMedium from '../Layout/HeaderMedium';

const Ticket = () => {
  const headerData = {
    title: 'Ticket Purchase Terms & Conditions',
    mobileImageURL: ContactHeaderBackground,
    imageURL: ContactHeaderBackground,
  };
  return (
    <>
      <HeaderMedium headerData={headerData} />
      <TicketWrapper>
        <TicketSection title="Who you are purchasing your Sports tickets from?">
          <TicketText>
            This company and the mobile app/website sportswhereiam.com (the “SITE”, “US”, “WE”) are owned and operated
            by Where I Am Group Pty Ltd (ACN 157 847 928) of Level 3/534 Church St, Cremorne 3121, VIC AUSTRALIA.
          </TicketText>
          <TicketText>
            Tickets that are sold to you (“YOU”, YOUR”, “PURCHASER”) through the website are from a third-party (“TICKET
            SELLER”); therefore, the Purchaser’s name will not be printed on the tickets. Please note that the name on
            the tickets does not affect your ability to access the event.
          </TicketText>
          <TicketText>
            Details of the venues, stadiums, teams and events can be obtained from the SITE. Each ticket is issued
            subject to the terms and conditions of the venue at which the relevant event is held and are subject to the
            terms and conditions printed on the ticket.
          </TicketText>
          <TicketText>
            We are not liable for any claims relating to an event or ticket purchase, except as otherwise set out in
            these Terms and Conditions.
          </TicketText>
          <TicketText>
            By visiting, using or purchasing any tickets via the SITE you agree to be bound by these Terms and
            Conditions and our Privacy Policy.
          </TicketText>
        </TicketSection>
        <TicketSection title="Ticket Purchase Conditions">
          <TicketText>
            The following are the rules (“TERMS”) that govern use of the sportswhereiam.com Mobile APP/Website (“SITE”)
            by the user of the SITE (“USER”). By using or visiting the SITE, the USER agrees to be bound by these TERMS
            and to follow these TERMS and all applicable laws and regulations governing the SITE. The SITE reserves the
            right to change these TERMS at any time, effective immediately upon posting on the SITE. If the USER
            violates these TERMS sportswhereiam.com may terminate the USER’S access to the SITE, bar USER from future
            use of the SITE, cancel the USER’S ticket order, and/or take appropriate legal action against USER.
          </TicketText>
          <TicketText>
            Tickets sold through SITE are often obtained through secondary market TICKET SELLERS and are being resold,
            in many cases, above the price or “face value” listed on the ticket. All ticket prices include additional
            service charges and handling fees as defined on each order. The SITE and its TICKET SELLERS are not directly
            affiliated with any sports team, or venue; and SITE does not act as a primary sale box office, unless
            otherwise stated. By agreeing to these TERMS, the USER agrees that the purchase price for tickets on their
            order does not reflect the original purchase price of the ticket and may be either higher or lower than the
            original purchase price.
          </TicketText>
          <TicketText>
            Orders placed through SITE will be fulfilled by one of SITE’S network of participating TICKET SELLERS. For
            further information regarding order status the PURCHASER should contact the SITE.
          </TicketText>
          <TicketText>
            Since tickets are a one-of-a-kind item and not replaceable, there are no refunds, exchanges or
            cancellations. If an event is postponed or rescheduled, tickets will be honored for the rescheduled date.
            New tickets will not need to be issued. If an event is cancelled without a rescheduled date, the USER will
            need to contact the SITE for a refund. The SITE may require the USER to return the supplied tickets at
            USER’S expense before receiving any refund the USER is entitled to due to cancellation. Any shipping and
            handling charges are not refundable. Refunds will be processed in the same currency as the original order.
            Conversion charges, including though not exhaustive of the ones issued by USER’S bank, if any, are not
            covered by sportswhereiam.com. The SITE will not issue exchanges or refunds after a purchase has been made
            or for lost, stolen, damaged or destroyed tickets. When the USER receives tickets, the USER should keep them
            in a safe place. Please note that direct sunlight or heat may damage tickets.
          </TicketText>
        </TicketSection>
        <TicketSection title="Pricing & Payment">
          <TicketText>
            All prices are in the currency indicated at the top of the mobile app/website; you may select your preferred
            currency throughout the checkout process. We cannot confirm the price of an item until after an order is
            completed by you. Despite the SITE’S best efforts, a small number of the items listed on the SITE may be
            priced incorrectly. If the SITE discovers an item’s correct price is higher than the stated price, the SITE
            will either complete the order at the original price, contact USER to inform them of different price with an
            option to purchase, or cancel USER’S order and notify USER of such cancellation.
          </TicketText>
          <TicketText>
            The price charged to USER’S credit card beyond the price of the individual tickets shall include the
            following fees and charges:
            <QuoteWrapper>Items: Cost of the tickets as set by the TICKET SELLER</QuoteWrapper>
            <QuoteWrapper>
              Service Fee: 15% Cost per ticket associated with SITE operation, customer service center operation, and
              other costs associated with the fulfillment of USER’S ticket request.
            </QuoteWrapper>
            <QuoteWrapper>
              Delivery: Costs associated with the Delivery Method chosen by USER and the SITE’S arrangement of USER’S
              ticket delivery by the TICKET SELLER’S.
            </QuoteWrapper>
            <QuoteWrapper>
              Total: Entire amount charged to USER, including each ticket’s price as set by the TICKET SELLER, Service
              Fee, and Delivery.
            </QuoteWrapper>
          </TicketText>
          <TicketText>
            The USER’S credit card will be charged by the SITE and will appear on the USER’S statement as ‘Sports Where
            I am Richmond’. If the USER has any questions about charges on USER’s credit card statement, the USER should
            contact SITE at team@sportswhereiam.com. If tickets are ultimately found to be unavailable, the USER’S
            credit card will not be charged or the USER will receive a full refund for the charged amount if tickets are
            found to be unavailable after the transaction has occurred. In some cases, the SITE may attempt to authorize
            a card multiple times, creating several holds on USER’S account. This often happens when the 3rd party
            credit card processing company requires additional security verification such as a CVV, Zip/Post Code, or
            address, or when USER’S information is incorrectly provided or mistyped. Though the SITE will only clear
            USER’S transaction once, the hold(s) will temporarily lower USER’S available balance. Any hold(s) may take
            several days to clear.
          </TicketText>
          <TicketText>
            The USER is responsible for any and all legal fees incurred by USER or SITE associated with USER’S disputed
            charges and chargebacks for purchases made on SITE. In no event will SITE be responsible for such legal
            fees.
          </TicketText>
        </TicketSection>
        <TicketSection title="Shipping and Ticket Delivery">
          <TicketText>
            All orders are shipped to USER using the delivery method chosen for the order. Most orders are shipped the
            same business day in which they are received. Orders placed after business hours may be shipped on the next
            business day. Shipments may require direct signature at the point of delivery.
          </TicketText>
          <TicketText>
            Event tickets are generally delivered according to the delivery method selected at the time of ticket
            checkout. Most orders are shipped the same business day in which they are received or, if placed after
            business hours, orders may be shipped on the next business day. However, tickets may not always be available
            for immediate delivery, particularly in cases when the tickets have been purchased far in advance of the
            event in question or for certain events including but not limited to the following: off-season orders for
            professional sporting leagues. While most tickets are delivered within three business days of the delivery
            method chosen, this does not imply a guaranteed delivery date. In these situations tickets may be marked
            with an estimated ship date. Tickets will be shipped when available, and choice of an expedited delivery
            method does not guarantee that tickets will be shipped immediately. USER should check the order notes for
            the estimated delivery date.
          </TicketText>
          <TicketText>
            If the USER is located outside of the event country, the USER must choose an International Delivery option.
            If a domestic shipping option is chosen for an order to be shipped outside the country, the shipping cost
            will be adjusted by the SITE after the order is placed to use the International Rate.
          </TicketText>
          <TicketText>
            If the USER specifies a shipping address that does not allow for Delivery Verification, such as a Post
            Office Box, USER may be required to pay an additional fee to cover the additional risks associated with this
            type of order. If such a shipping address is used, the SITE will, at their discretion, either contact USER
            about the additional fee prior to shipping or cancel USER’S order and notify USER of such cancellation.
            Shipments may require direct signature at the point of delivery. Once the TICKET SELLER has shipped the
            tickets, it is USER’s responsibility to receive the package. Should the package be refused, undelivered, or
            returned, refunds or credits will not be issued by SITE as per the all sales are final term of these Terms.
            If a package has been returned and must be re-shipped by the TICKET SELLER, it is the USER responsibility to
            contact the SITE for re-shipping options. The USER understands that additional delivery fees may be charged
            prior to reshipping.
          </TicketText>
          <TicketText>
            Electronic tickets or “e-tickets” marked as “Instant” may not be available for immediate download in all
            circumstances. Due to potential fraud concerns, some “Instant” e-ticket purchases may be downgraded to
            regular e-ticket download to allow for additional processing. In such cases, USER will receive notification
            with USER’S receipt explaining that USER’S order has been downgraded to regular e-ticket download.
          </TicketText>
          <TicketText>
            Electronic tickets or “e-tickets” may not be available for immediate download. After placing an order, USER
            will receive an email with instructions on how to download the tickets; therefore, it is important that USER
            provides accurate email address information during the order process. The USER will be required to enter
            order specific credentials to gain access to the tickets, and USER must have access to a printer from which
            to print the tickets. USER is responsible for contacting Customer Support should USER not receive the email
            instructions, be unable to download the tickets, or be unable to print the tickets. The SITE will not issue
            refunds for USER’s failure to provide a correct email address or failure to print the tickets.
          </TicketText>
          <TicketText>
            For tickets labeled will-call/local pickup, the USER must pick up the tickets at the box office of the venue
            approximately one hour before the scheduled start of the event, or at a major city location described by the
            SITE. The USER will need to bring a government-issued ID in order to claim the tickets. Should USER
            encounter a problem at the box office, USER must contact SITE for assistance.
          </TicketText>
          <TicketText>
            If you have not received your ticket(s) within 48 hours of the event, please contact us on
            team@sportswhereiam.com or by phone in Australia on 1300 995 136, or anywhere else call +61 (0) 3 6111 3513.
          </TicketText>
        </TicketSection>
        <TicketSection title="Refunds and Exchanges">
          <TicketText>
            All sales are final. Since tickets are a one-of-a-kind item and not replaceable, there are no refunds,
            exchanges or cancellations.
          </TicketText>
          <TicketText>
            The venue/teams reserve the right to alter the date, the venue and the event as advertised, without prior
            notice to you. If the event is postponed or rescheduled, we will not provide any refund. We have no
            obligation to notify you of any relevant information regarding any cancelled or rescheduled events. It is
            your responsibility to consult with the Venue/teams on any such occurrences.
          </TicketText>
          <TicketText>You will receive a 100% refund (of the ticket-only subtotal) for your tickets if:</TicketText>
          <TicketText>
            Your order was accepted but not delivered.
            <br />
            Your order was accepted but not delivered in time for the event.
            <br />
            Your tickets were not valid for entry. Verified proof must be provided in letter/email form from the venue.
            Written or stamped “voids” do not constitute verified proof.
          </TicketText>
          <TicketText>You also have our 100% Money Back Guarantee if:</TicketText>
          <TicketText>
            Your event is cancelled and is not rescheduled. If an event is cancelled without a rescheduled date, you
            will need to contact us for a refund. We may require you to return the supplied tickets at your expense
            before receiving any refund you are entitled to due to cancellation.
          </TicketText>
          <TicketText>
            The SITE will assist in the process of securing your refund, but provision of proof, as per the above terms,
            is your responsibility. Booking fees and any processing surcharge maybe refunded, depending on the reason
            for the refund.
          </TicketText>
          <TicketText>
            Refunds will be processed in the same currency as the original order. Any refund payable can only be made
            back to the valid credit or debit card used in the original transaction.
          </TicketText>
          <TicketText>
            We do not cover conversion charges, including though not exhaustive of the ones issued by your bank, if any.
          </TicketText>
          <TicketText>
            The SITE will not issue exchanges or refunds after a purchase has been received, or for lost, stolen,
            damaged or destroyed tickets. When you receive your tickets, you should keep them in a safe place
            (electronically or printed out).
          </TicketText>
          <TicketText>
            If you do not receive tickets ordered from us by the date of the event, a full refund will be provided to
            you within 14 days that you report the non-receipt and provide us with supporting evidence of non-receipt to
            our satisfaction.
          </TicketText>
          <TicketText>
            Subject to any statutory rights of refund, if an event takes place then generally there is no right to a
            refund or exchange, including where you cannot attend for any reason.
          </TicketText>
          <TicketText>
            A change in personal circumstances does not entitle you to return or exchange a ticket.
          </TicketText>
        </TicketSection>
        <TicketSection title="GENERAL">
          <TicketText>
            Despite our best efforts, the SITE does not guarantee the accuracy of event information/event listings on
            the SITE including but not limited to event name, event location or venue, event start time, or event date.
          </TicketText>
          <TicketText>
            The USER agrees to abide by all rules and policies of the venue where the event is located relating to
            conduct and behavior. Should the USER be ejected from the event for failure to abide by the venue’s rules
            and policies, the USER shall be subject to all applicable fines and legal or other expenses associated with
            the ejection. Further, should the ejection result in the loss of the TICKET SELLER’S right to use any other
            season tickets at that venue, or the right to purchase other tickets from that venue, the USER shall be held
            liable for all reasonable costs, expenses, and losses associated with said loss, including but not limited
            to all direct, indirect, vicarious, consequential, exemplary, incidental, special or punitive damages,
            including lost profits.
          </TicketText>
          <TicketText>
            The SITE cannot guarantee ticket availability until the USER is in possession of their tickets. Generally,
            all ticket listings on the SITE are a unique set of tickets from a TICKET SELLER. Some ticket listings on
            the SITE may only be representations of available tickets and not actual seat locations or currently
            available tickets. Occasionally tickets ordered may no longer be available at the price or in the quantity
            originally ordered at the time the order is received. If equivalent or better seat locations are available
            at the same price, the TICKET SELLER will fill the order with the alternative seat locations. If no
            alternates are available, either USER’S credit card will not be charged at all or the entire amount will be
            refunded, and the USER will be notified that the ticket request has been rejected.
          </TicketText>
          <TicketText>
            In order to protect the USER from fraud, the USER may be required to provide additional proof of identify on
            any order.
            <br />
            Proof of identity may include but is not limited to a signed credit card authorization and/or photocopies of
            public documents such as a state driver’s license or federal passport.
          </TicketText>
        </TicketSection>
        <TicketSection title="Changes to Terms and Conditions">
          <TicketText>
            The Terms and Conditions that apply to any particular transaction will be the published terms and conditions
            at the time the transaction was finalised. Subject to the preceding sentence, we or the TICKET SELLER may
            alter or change the terms and conditions as they appear on the SITE from time to time effective immediately
            from posting on the website.
          </TicketText>
          <TicketText>
            You should periodically check the sportswhereiam.com website to ensure that you are aware of the latest
            terms and conditions.
          </TicketText>
        </TicketSection>
        <TicketSection title="Enquiry or Complaints">
          <TicketText>
            For enquiries or complaints regarding the sale and delivery of tickets please contact us by email on
            team@sportswhereiam.com.
          </TicketText>
          <TicketText>
            For enquiries or complaints regarding the staff and/or amenities at a venue or event, please contact the
            venue management.
          </TicketText>
        </TicketSection>
        <TicketSection title="Limitation of liability">
          <TicketText>
            To the extent permitted by law, we shall not have any liability to you beyond the face value of the ticket
            purchased plus any relevant per transaction handling fee and delivery fee. We shall not be liable for any
            loss of enjoyment or wasted expenditure.
          </TicketText>
          <TicketText>
            Personal arrangements including travel, subsistence and accommodation relating to the event which have been
            arranged by you are at your own risk and responsibility.
          </TicketText>
          <TicketText>
            We accept no responsibility for any personal property. This provision does not affect your rights or
            remedies in relation to any consumer guarantee that may be applicable to our services.
          </TicketText>
        </TicketSection>
        <TicketSection title="Data security">
          <TicketText>
            We take the security of the Service and the privacy of its users very seriously. The User agrees that the
            User shall not do anything to prejudice the security or privacy of our systems or the information on them.
            We shall do all things reasonable to ensure that the transmission of data occurs according to accepted
            industry standards.
          </TicketText>
          <TicketText>
            When we process your order we use your credit or debit card and personal information in accordance with our
            Terms and Conditions and our Privacy Policy.
          </TicketText>
          <TicketText>
            If you deny or dispute a charge on your credit or debit card made by us, please contact us immediately.
            Credit card fraud is considered to be a serious offence and we aim to prosecute each case to the fullest
            extent possible.
          </TicketText>
          <TicketText>
            You will select a username and password as part of the registration process. All your account pages are
            protected with Secure Socket Layer (SSL) encryption. You are fully responsible for maintaining the
            confidentiality of your username and password. You agree to immediately notify us at team@sportswhereiam.com
            should you know, or have reasonable grounds to suspect, that the username or password have been compromised.
            We shall not be responsible for your failure to abide by this paragraph. We may, in our sole discretion,
            terminate your account for any reason. Under no circumstances shall we be liable to you or a third-party for
            termination of your account.
          </TicketText>
        </TicketSection>
        <TicketSection title="Copyright and trademark">
          <TicketText>
            The images, text, logos and artwork contained within this SITE are copyright to Where I Am Group Pty Ltd
            and/or the relevant licensors. All rights are reserved. Unauthorised use by way of copying, storage,
            reproduction, publishing electronically or otherwise transmitting in any form or by any means in whole or in
            part is strictly prohibited.
          </TicketText>
          <TicketText>
            The Sports Where I Am name and logo is a registered trademark and is protected by law.
          </TicketText>
        </TicketSection>
        <TicketSection title="Disclaimers">
          <TicketText>
            SITE MAKES NO ASSURANCES THAT THE SITE WILL BE ERROR-FREE, UNINTERRUPTED, OR PROVIDE SPECIFIC RESULTS FROM
            USE OF THE SITE OR ANY SITE CONTENT, SEARCH OR LINK THEREIN. THE SITE AND SITE CONTENT ARE DELIVERED ON AN
            “AS-IS” AND “AS-AVAILABLE” BASIS. SITE MAKES NO ASSURANCES THAT FILES USER ACCESSES OR DOWNLOADS FROM THE
            SITE WILL BE FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES. SITE DISCLAIMS ALL WARRANTIES,
            EXPRESS OR IMPLIED INCLUDING ALSO ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
            PURPOSE. SITE WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING
            WITHOUT LIMITATION, DIRECT, INDIRECT, VICARIOUS, INCIDENTAL, SPECIAL, PUNITIVE, LOSS OF BUSINESS OR LOSS OF
            PROFITS OR CONSEQUENTIAL DAMAGES, WHETHER BASED UPON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT,
            NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          </TicketText>
          <TicketText>
            SITE DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT OF ANY THIRD PARTY USERS, SITE
            USERS, ADVERTISERS AND/OR SPONSORS ON THE SITE, IN CONNECTION WITH THE SITE SERVICE OR OTHERWISE RELATED TO
            USER USE OF THE SITE AND/OR THE SITE SERVICE. SITE IS NOT RESPONSIBLE FOR THE PRODUCTS, SERVICES, ACTIONS OR
            FAILURE TO ACT OF ANY TICKET BROKER, VENUE, PERFORMER, PROMOTER OR OTHER THIRD PARTY IN CONNECTION WITH OR
            REFERENCED ON THE SITE.
          </TicketText>
        </TicketSection>
        <TicketSection title="Governing Law">
          <TicketText>
            The USER agrees that any controversy or claim arising out of or relating to the use of the SITE will be
            governed by the laws of Victoria, AUSTRALIA without regard to its conflict of law provisions. The USER
            agrees to personal jurisdiction by venue in the state and federal courts of Victoria, AUSTRALIA.
          </TicketText>
          <TicketText>These policies were last amended on Wednesday December 20th, 2017.</TicketText>
        </TicketSection>
      </TicketWrapper>
    </>
  );
};

export default Ticket;
