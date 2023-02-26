import * as React from 'react';

import Button from '@/components/buttons/Button';
import DateForm from '@/components/form/DateForm';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import { PHONE_REGEX } from '@/constant/regex';
import logger from '@/lib/logger';

type BiodataForm = {
  name_lengkap: string;
  phone_number: string;
  nik: string;
  tanggal_lahir: string;
  tempat_lahir: {
    provinsi: string;
    kabupaten: string;
    kecamatan: string;
  };
  jenis_kelamin: string;
};

const provinsi = [
  {
    value: 'A',
    label: 'Provinsi A',
    kabupaten: [
      {
        value: 'A',
        label: 'Kabupaten A',
      },
    ],
  },
  {
    value: 'B',
    label: 'Provinsi B',
    kabupaten: [
      {
        value: 'A',
        label: 'Kabupaten B',
      },
    ],
  },
  {
    value: ' C',
    label: 'Provinsi D',
    kabupaten: [
      {
        value: 'A',
        label: 'Kabupaten C',
      },
    ],
  },
  {
    value: 'E',
    label: 'Provinsi F',
    kabupaten: [
      {
        value: 'A',
        label: 'Kabupaten D',
      },
    ],
  },
];

export default function BiodataForm() {
  const onSubmit = (data: BiodataForm) => {
    logger(data);
  };

  return (
    <Form<BiodataForm> onSubmit={onSubmit} mode='onChange'>
      {({ formState: { isDirty } }) => (
        <>
          <Input
            id='name_lengkap'
            label='Nama Lengkap'
            placeholder='Masukkan nama lengkap'
            showValid={true}
            validate={{
              required: 'Nama lengkap harus diisi',
              minLength: {
                value: 6,
                message: 'Nama lengkap minimal 6 karakter',
              },
            }}
          />
          <div className='max-w-xs'>
            <Input
              id='phone_number'
              label='Nomor Telepon'
              placeholder='Masukkan nomor telepon (+62)'
              validate={{
                required: 'Nomor telepon harus diisi',
                pattern: {
                  value: PHONE_REGEX,
                  message: 'Nomor telepon tidak valid',
                },
              }}
            />
          </div>
          <Input
            id='nik'
            label='NIK'
            placeholder='Masukkan NIK'
            showValid={true}
            validate={{
              required: 'NIK harus diisi',
              minLength: {
                value: 16,
                message: 'NIK minimal 16 karakter',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'NIK harus berupa angka',
              },
            }}
          />
          <DateForm
            id='tanggal_lahir'
            label='Tanggal Lahir'
            placeholder='Tanggal Lahir'
            helperText='Contoh: 01/01/2000'
            validation={{
              required: 'Tanggal lahir harus diisi',
            }}
          />
          <div className='flex'>
            <SelectInput
              id='tempat_lahir.provinsi'
              label='Provinsi'
              placeholder='Provinsi'
              showValid={true}
              options={provinsi}
              validation={{
                required: 'Provinsi harus diisi',
              }}
            />
          </div>
          <div className='w-full flex justify-center items-center mt-4'>
            <Button type='submit' className='w-24' disabled={!isDirty}>
              Kirim
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
