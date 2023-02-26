import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import useDialogStore from '@/store/useDialogStore';

export default function Layout({
  children,
  withNav = true,
  withFoot = true,
}: {
  children: React.ReactNode;
  withNav?: boolean;
  withFoot?: boolean;
}) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <div className='overflow-hidden'>
      {withNav && <Navbar />}
      {children}
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
      {withFoot && <Footer />}
    </div>
  );
}
