import React from 'react';
import './globals.css';
import LiteralHeader from './LiteralHeader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body>
        <main>
          <nav>
            <div id="header">
              <div>

                <div id="header-content">
                  <div id="header-content-left">
                    <div id="logo"></div>
                  </div>

                  <div id="header-content-right">
                    <div id="links">
                      
                      <LiteralHeader />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </nav>
        </main>
        {children}
      </body>
  )
}
