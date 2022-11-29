import React from 'react';
import { renderHook, RenderHookResult } from '@testing-library/react';
import useFPToggles from '../src/useFPToggles';
import { FPDetail } from 'featureprobe-client-sdk-js';
import FPContext from '../src/context';

const renderUseTogglesHook = (
  toggles: { [key: string]: FPDetail; } | undefined
): RenderHookResult<{ [key: string]: FPDetail; } | undefined, any> =>
  renderHook(() => useFPToggles(), {
    initialProps: toggles,
    wrapper: ({children}) => (
      <FPContext.Provider value={{ toggles }}>
        {children}
      </FPContext.Provider>
    )
  });

describe('useFPToggles', () => {
  test('should return all the toggles', async () => {
    const toggles: { [key: string]: FPDetail; } | undefined = {
      'toggle1': {
        value: true,
        ruleIndex: 0,
        variationIndex: 0,
        version: 1,
        reason: 'reason'
      },
    }

    const { result } = renderUseTogglesHook(toggles);

    expect(result.current).toEqual(toggles)
  })
})
