import { Fragment } from 'react';

import GadgetsSummary from './GadgetsSummary';
import AvailableGadgets from './AvailableGadgets';

const Gadgets = () => {
  return (
    <Fragment>
      <GadgetsSummary />
      <AvailableGadgets />
    </Fragment>
  );
};

export default Gadgets;