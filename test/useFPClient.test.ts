import { renderHook } from '@testing-library/react'

import React from 'react';
import useFPClient from '../src/useFPClient';

const useContextSpy = jest.spyOn(React, 'useContext');
const clientMock = jest.fn();

clientMock.mockReturnValue({});

test('should return the client', () => {
  useContextSpy.mockReturnValue({ client: clientMock });
  const { result } = renderHook(() => useFPClient());

  expect(result.current).toBe(clientMock);
});
