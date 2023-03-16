import { useMutation } from '@apollo/react-hooks';
import { ADD_SUBSCRIBE } from '@graphql/mutation/subscribe';

const SubscribeMutation = ({ children }) => {
  let [addSubscribe, { loading, error, data }] = useMutation(ADD_SUBSCRIBE);

  if ((data && data.addSubscribe === null) || error) {
    error = true;
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children({
    addSubscribe,
    status: {
      loading,
      error,
      data,
    },
  });
};

export { SubscribeMutation };
