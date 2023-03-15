import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Button from '@/components/buttons/Button';

describe('Button', () => {
  it('Test Button Variant', () => {
    render(<Button variant='primary'>Primary</Button>);
    expect(screen.queryAllByText('Primary')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Primary')[0]).toHaveClass(
      'button inline-flex items-center justify-center rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary-500 transition-colors duration-75 min-h-[34px] py-1.5 px-2.5 font-bold md:min-h-[42px] md:py-2 md:px-3 text-sm md:text-base border border-primary-600 text-primary-600 disabled:bg-primary-100 disabled:border-primary-300 hover:disable:text-primary-300 hover:bg-primary-600 active:bg-primary-700 hover:text-white disabled:cursor-not-allowed'
    );
    expect(screen.queryAllByText('Primary')[0]).toBeVisible();

    // Can Clicked
    expect(screen.queryAllByText('Primary')[0]).toBeEnabled();
    fireEvent.click(screen.queryAllByText('Primary')[0]);
  });

  it('Test Button Variant Outline', () => {
    render(<Button variant='outline'>Secondary</Button>);
    expect(screen.queryAllByText('Secondary')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Secondary')[0]).toBeVisible();

    fireEvent.click(screen.queryAllByText('Secondary')[0]);
    expect(screen.queryAllByText('Secondary')[0]).toBeEnabled();
  });

  it('Test IsLoading Button', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.queryAllByText('Loading')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Loading')[0]).toBeVisible();
    expect(screen.queryAllByText('Loading')[0]).toBeDisabled();
  });

  it('Test Disabled Button', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.queryAllByText('Disabled')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Disabled')[0]).toBeVisible();
    expect(screen.queryAllByText('Disabled')[0]).toBeDisabled();
  });

  it('Take Snapshot', () => {
    const { asFragment } = render(<Button>Snapshot</Button>);
    expect(asFragment()).toMatchSnapshot();

    const { asFragment: asFragment2 } = render(
      <Button variant='outline'>Snapshot</Button>
    );
    expect(asFragment2()).toMatchSnapshot();
  });
});
