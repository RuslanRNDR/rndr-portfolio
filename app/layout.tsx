import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'RNDR',description:'Портфолио интерьерной 3D-визуализации RNDR. Частные интерьеры, жилой дом 150 м², спальни и предметные детали.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>}
