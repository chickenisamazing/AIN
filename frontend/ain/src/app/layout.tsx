import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';

// 아래는 next에서 FontAwesomeIcon 로딩중 발생하는 크기 문제를 해결하기위한 코드
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ height: '100%' }}>
      <body className='flex justify-center' style={{ minHeight: '100%', margin: 0 }}>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          <div>
            <Header />
          </div>
          <div
            className='flex flex-col items-center justify-between p-24 h-full w-full max-w-lg '
            style={{ width: '372px' }}
          >
            {children}
          </div>
          <div className='fixed bottom-0 left-0 flex w-full items-end justify-center'>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}
