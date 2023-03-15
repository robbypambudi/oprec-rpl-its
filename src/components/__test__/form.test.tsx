import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';

import Form from '@/components/form/Form';
import Input from '@/components/form/Input';

describe('Form', () => {
  it('Cek Components', () => {
    act(() => {
      const onSubmit = jest.fn();
      render(
        <Form onSubmit={onSubmit}>
          {() => <Input name='name' label='Nama Lengkap' id='name' />}
        </Form>
      );
    });

    // Test for functionality of the component
    expect(screen.queryAllByText('Nama Lengkap')[0]).toBeInTheDocument();
    expect(screen.queryAllByText('Nama Lengkap')[0]).toBeVisible();
    expect(screen.queryAllByRole('textbox')[0]).toBeInTheDocument();
    expect(screen.queryAllByRole('textbox')[0]).toBeVisible();
    expect(screen.queryAllByRole('textbox')[0]).toBeEnabled();

    act(() => {
      fireEvent.change(screen.queryAllByRole('textbox')[0], {
        target: { value: 'Dimas' },
      });
    });

    expect(screen.queryAllByRole('textbox')[0]).toHaveValue('Dimas');
    expect(screen.queryAllByRole('textbox')[0]).toBeEnabled();
    expect(screen.queryAllByRole('textbox')[0]).toBeVisible();

    // Snapshot
  });

  it('Cek IF Form Disable', () => {
    act(() => {
      const onSubmit = jest.fn();
      render(
        <Form onSubmit={onSubmit}>
          {() => <Input name='name' label='Nama Lengkap' id='name' disabled />}
        </Form>
      );
    });

    expect(screen.queryAllByRole('textbox')[0]).toBeDisabled();
    expect(screen.queryAllByRole('textbox')[0]).toBeVisible();
  });
});
