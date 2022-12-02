import React, { ReactNode } from 'react';
import './layout.css';

const AppLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default AppLayout;
