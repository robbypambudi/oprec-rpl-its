import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';

import LoginPage from '@/pages/login/index.page';

jest.mock('next/router', () => require('next-router-mock'));

describe('Login Page', () => {
  it('renders correctly', () => {
    act(() => {
      render(<LoginPage />);
    });
    expect(screen.queryAllByText('Login')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Login')[0]).toBeVisible();

    expect(screen.queryAllByText('Email')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Email')[0]).toBeVisible();

    expect(screen.queryAllByText('Password')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Password')[0]).toBeVisible();

    expect(screen.queryAllByText('Login')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Login')[0]).toBeVisible();

    // Input Email
    act(() => {
      fireEvent.change(screen.queryAllByRole('textbox')[0], {
        target: { value: 'robby.pambudi10@gmail.com' },
      });
    });
    expect(screen.queryAllByRole('textbox')[0]).toHaveAttribute(
      'type',
      'email'
    );
    expect(screen.queryAllByRole('textbox')[0]).toHaveValue(
      'robby.pambudi10@gmail.com'
    );

    expect(screen.queryAllByText('Login')[0]).toMatchSnapshot();
    expect(screen.queryAllByRole('textbox')[0]).toMatchSnapshot();
  });
});
