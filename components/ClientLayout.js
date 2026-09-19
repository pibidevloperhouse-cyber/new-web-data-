'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { DatasetModal } from './DatasetModal';

export default function ClientLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main id="app">{children}</main>
      <Footer />
      <DatasetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
