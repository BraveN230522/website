import React from 'react';

import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';

import Icon from '@components/common/Icon';
import Message from '@components/common/Form/Message';

import console from '@utils/console';

import {
  DeliveryDetailsSection,
  DeliveryDetailsFieldSet,
  DeliveryDetailsLegend,
  DeliveryTypeContainer,
  DeliveryDetailsText,
  DeliveryTypeSpan,
  DeliveryCheckbox,
} from './styles';
import DeliveryForm from './DeliveryForm';

const MAIL_OPTION = 'MAIL';
const E_TICKET_OPTION = 'ETICKET';

const isInternationalDelivery = ticket =>
  ticket.shippingOptions && ticket.shippingOptions.length > 0 && ticket.shippingOptions[0].type === MAIL_OPTION;
const isMobileDelivery = ticket =>
  !ticket.shippingOptions ||
  ticket.shippingOptions.length === 0 ||
  (ticket.shippingOptions && ticket.shippingOptions.length > 0 && ticket.shippingOptions[0].type === E_TICKET_OPTION);
const validateShipping = ticket => {
  // if there is no shipping option and the ticket is for a hotel booking, ensure it is an empty array for mapping
  // schema: ({ id, title, price: { annotation } }, shippingIndex)
  if (ticket.product.type !== 'HOTEL') return true;
  console.log('TICKET', ticket, isMobileDelivery(ticket));
  ticket.product.name = ticket.product.name.replace(`${parseInt(ticket.product.name)}:`, '');
  ticket.shippingOptions = [];
  return true;
};

const getDeliveryFormInformation = (acc, ticket) => {
  if (isInternationalDelivery(ticket)) {
    return { ...acc, hasInternational: true };
  }

  // TODO: Replace it for the condition which checks if the ticket is local delivery
  // current I'm not sure what should be the indicator on the ticket which represents local delivery
  if (!isMobileDelivery(ticket)) {
    return { ...acc, hasLocal: true };
  }

  return acc;
};

const DeliveryDetails = ({ errors, getFormValue, setFieldValue, register, title, tickets = [], formData }) => {
  const [isMobile] = useDefaultMediaQueries();

  const handleInternationalDeliveryAutoFill = () => {
    const billingValues = getFormValue();

    Object.keys(billingValues).forEach(key => {
      const property = key.match(/billing\['([a-zA-Z0-9]+)'\]/);

      if (property && property[1] !== 'stateProvince') {
        setFieldValue(`international['${property[1]}']`, billingValues[key], {
          shouldDirty: true,
        });
      }
    });
  };

  const renderDeliveryTypeLabel = (ticket, index) => {
    console.log(2, validateShipping(ticket));
    if (isInternationalDelivery(ticket)) {
      return getDeliveryTypeLabelLayout('International Delivery', ticket, index);
    }

    return getDeliveryTypeLabelLayout('Local Delivery', ticket, index);
  };

  const getDeliveryTypeLabelLayout = (label, ticket, index) => {
    const shippingOptionId =
      ticket.shippingOptions && ticket.shippingOptions.length > 0 ? ticket.shippingOptions[0].id : undefined;
    return (
      <DeliveryTypeContainer>
        <DeliveryTypeSpan>
          {label} - <span>{ticket.product.name}</span>
          <DeliveryCheckbox
            label={null}
            id={shippingOptionId}
            labelLeft
            hide
            checked
            name={`typeTickets[${index}]`}
            type="radio"
            value={shippingOptionId}
            ref={register({ required: true })}
          />
        </DeliveryTypeSpan>
      </DeliveryTypeContainer>
    );
  };

  const renderDeliveryForm = tickets => {
    const { hasInternational, hasLocal } = tickets.reduce(getDeliveryFormInformation, {});

    return (
      <>
        {hasInternational && (
          <DeliveryDetailsFieldSet>
            <DeliveryDetailsLegend bold={isMobile || false}>International Delivery</DeliveryDetailsLegend>
            <DeliveryCheckbox
              label="International delivery address is the same as my billing address"
              labelLeft
              id="international delivery"
              type="checkbox"
              onChange={handleInternationalDeliveryAutoFill}
            />
            <br />

            <DeliveryForm
              countryValue={getFormValue("international['country']")}
              errors={errors}
              entity="international"
              setFieldValue={setFieldValue}
              register={register}
            />
          </DeliveryDetailsFieldSet>
        )}

        {hasLocal && (
          <DeliveryDetailsFieldSet>
            <DeliveryDetailsLegend bold={isMobile || false}>Local Pickup</DeliveryDetailsLegend>
            <DeliveryForm errors={errors} entity="local" setFieldValue={setFieldValue} register={register} />
          </DeliveryDetailsFieldSet>
        )}
      </>
    );
  };

  return (
    <DeliveryDetailsSection title={title}>
      {isMobile ? (
        <DeliveryTypeContainer>
          <DeliveryDetailsText>Your eTickets will be sent to:</DeliveryDetailsText>
          <DeliveryDetailsText>
            {formData.personalInfo.firstName} {formData.personalInfo.lastName}
          </DeliveryDetailsText>
          <DeliveryDetailsText bold>
            {formData.personalInfo.email}
            <Icon name="edit" />
          </DeliveryDetailsText>
        </DeliveryTypeContainer>
      ) : (
        <DeliveryDetailsFieldSet>
          <DeliveryDetailsLegend>Delivery Type</DeliveryDetailsLegend>

          {tickets.map((ticket, index) => (
            <>
              {isMobileDelivery(ticket) && validateShipping(ticket)
                ? ticket.shippingOptions.map(({ id, title, price: { annotation } }, shippingIndex) => (
                    <DeliveryTypeContainer key={`${index + shippingIndex}`}>
                      <DeliveryTypeSpan>
                        {title} - <span>{ticket.product.name}</span>
                      </DeliveryTypeSpan>
                      <DeliveryCheckbox
                        id={title.trim()}
                        label={null}
                        labelLeft
                        name={`typeTickets[${index}]`}
                        type="radio"
                        value={id}
                        checked={!shippingIndex}
                        ref={register({ required: true })}
                      />
                    </DeliveryTypeContainer>
                  ))
                : renderDeliveryTypeLabel(ticket, index)}

              {errors.typeTickets && errors.typeTickets[index] && (
                <Message type="error">The fields above are required.</Message>
              )}
              <br />
            </>
          ))}
        </DeliveryDetailsFieldSet>
      )}

      <DeliveryDetailsFieldSet>
        <DeliveryDetailsLegend bold={isMobile || false}>Billing Address</DeliveryDetailsLegend>
        <DeliveryDetailsText>Your billing address must match your payment details.</DeliveryDetailsText>

        <DeliveryForm errors={errors} entity="billing" setFieldValue={setFieldValue} register={register} />
      </DeliveryDetailsFieldSet>

      {renderDeliveryForm(tickets)}
    </DeliveryDetailsSection>
  );
};

export default DeliveryDetails;
