import React, { ComponentType } from 'react';
import FPContext from './context';
import { IContext } from './types';

export function withFPConsumer<C>(
  WrappedComponent: ComponentType<C & IContext>
) {
  return (props: C) => (
    <FPContext.Consumer>
      {
        ({ client, toggles }) => (
          <WrappedComponent client={client} toggles={toggles} {...props} />
        )
      }
    </FPContext.Consumer>
  )
}
