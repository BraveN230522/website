import { GraphQLInputObjectType } from 'graphql';
import gql from 'graphql-tag';

export const SEND_TICKET_CONFIRMATION = gql`
  query sendTicketConfirmation($bookingId: String!, $email: String!, $fullName: String!, $mergeData: String) {
    sendTicketConfirmation(bookingId: $bookingId, email: $email, fullName: $fullName, mergeData: $mergeData) {
      id
      bookingId
      fullName
      email
      hasSent
    }
  }
`;
