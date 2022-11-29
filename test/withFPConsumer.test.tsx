import { FPDetail } from 'featureprobe-client-sdk-js';
import React, { ComponentType, FC } from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FPContext from '../src/context';
import { withFPConsumer } from '../src/withFPConsumer';

const TestComponent: FC = (props) => (
  <div data-testid="demo-component">{JSON.stringify(props)}</div>
);

const renderComponent = (
  Component: ComponentType,
  toggles: { [key: string]: FPDetail; } | undefined,
): RenderResult =>
  render(<Component />, {
    wrapper: ({ children }) => (
      <FPContext.Provider value={{ toggles }}>
        {children}
      </FPContext.Provider>
    )
  })

describe('withFPConsumer', () => {
  test('should add the toggles to the component props', async () => {
    const toggles: { [key: string]: FPDetail; } | undefined = {
      'toggle1': {
        value: true,
        ruleIndex: 0,
        variationIndex: 0,
        version: 1,
        reason: 'reason'
      },
    };

    const Component = withFPConsumer(TestComponent);
    renderComponent(Component, toggles);

    const el = screen.getByTestId('demo-component');
    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent(JSON.stringify(toggles))
  })
})
