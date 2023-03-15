import '@testing-library/jest-dom';
import '@tanstack/react-query';

import { act, render, screen } from '@testing-library/react';

import Home from '@/pages/index.page';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: {
      data: [
        {
          id_: 1,
          country: 'Indonesia',
          role: 'Frontend Developer',
          experience: '1-2 years',
          developer: 'Junior',
        },
      ],
    },
  })),
}));

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />);

    // Home
    expect(screen.queryAllByText('Home')[0]).toBeVisible();
    // snapshoot
    expect(screen.queryAllByText('Home')[0]).toMatchSnapshot();
  });
  //
  // sentry
  // Get Title
  it('Get Title', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading', { level: 1 })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })[0]).toBeVisible();
    expect(screen.getAllByRole('heading', { level: 1 })[0]).toMatchSnapshot();
  });

  it('Get Agency', () => {
    act(() => {
      render(<Home />);
    });

    expect(screen.getAllByText('Agencies')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Agencies')[0]).toBeVisible();
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
    expect(screen.getAllByText('1')[0]).toBeVisible();
  });
});
