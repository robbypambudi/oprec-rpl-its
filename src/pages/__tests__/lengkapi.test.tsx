import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import LengkapiPage from '@/pages/lengkapi/index.page';

describe('Lengkapi Page', () => {
  it('renders correctly', () => {
    render(<LengkapiPage />);

    expect(
      screen.queryAllByText('Lengkapi Data Diri Anda')[0]
    ).toBeInTheDocument();

    expect(screen.queryAllByText('Nama Lengkap')[0]).toBeInTheDocument();
  });
});
