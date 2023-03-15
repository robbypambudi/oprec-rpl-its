import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Typography from '@/components/Typography';

describe('Typography', () => {
  it('Cek Components', () => {
    render(
      <Typography variant='h1' as='h1'>
        Hallo
      </Typography>
    );

    // Test for functionality of the component
    expect(screen.queryAllByText('Hallo')).toBeInTheDocument;
    expect(screen.queryAllByText('Hallo')[0]).toHaveClass(
      'text-4xl',
      'font-bold'
    );
    expect(screen.queryAllByText('Hallo')[0]).toHaveTextContent('Hallo');
    expect(screen.queryAllByText('Hallo')[0]).toBeVisible();

    render(
      <Typography variant='p' as='p'>
        Dimana
      </Typography>
    );
    expect(screen.queryAllByText('Dimana')[0]).toHaveTextContent('Dimana');
    expect(screen.queryAllByText('Dimana')[0]).toHaveClass(
      'text-sm font-normal md:text-base text-black'
    );
  });
});
