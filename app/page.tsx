'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import images from './images.json';
const srcs=(items:{src:string}[])=>items.map(i=>i.src);
const projects=[
{title:'Тёплая классика',type:'Гостиная · интерьерная визуализация',images:['/images/living-5.webp',...srcs(images.living).filter(s=>!s.includes('living-5'))]},
{title:'Жилой дом',type:'150 м² · частный интерьер',images:srcs(images.house)},
{title:'Спальня',type:'Частный интерьер · 5 ракурсов',images:srcs(images.bedroom)},
{title:'Тихая геометрия',type:'Гостиная · минимализм',images:['/images/minimal.webp']},
{title:'Орех и камень',type:'Интерьерная композиция',images:['/images/walnut.webp','/images/walnut-detail.webp']},
{title:'Rome',type:'Современная классика',images:['/images/rome.webp']},
{title:'Тактильность',type:'Спальня · материалы и детали',images:['/images/texture-1.webp','/images/texture-6.webp','/images/texture-7.webp']},
{title:'Розовый акцент',type:'Гостиная · цвет и форма',images:['/images/rose-7.webp','/images/rose-1.webp','/images/rose-3.webp','/images/rose-5.webp']},
{title:'Astra',type:'Столовая · предметные детали',images:['/images/astra.webp','/images/astra-detail.webp','/images/astra-detail2.webp']},
{title:'Clio',type:'Гостиная · лаконичные линии',images:['/images/clio.webp']},
{title:'Марта',type:'Гостиная · свет и ритм',images:['/images/marta.webp']}];
export default function Home(){
const [selected,setSelected]=useState<number|null>(null),[frame,setFrame]=useState(0);
const project=selected===null?null:projects[selected];
function open(i:number){setFrame(0);setSelected(i)}
function step(d:number){if(project)setFrame(i=>(i+d+project.images.length)%project.images.length)}
return <main id="top">
<header className="site-header"><a className="brand" href="#top" aria-label="RNDR — на главную"><img src="/images/logo.png" alt="RNDR"/><span>ARCHITECTURAL<br/>VISUALIZATION</span></a><nav><a href="#projects">Проекты <sup>11</sup></a><a href="#contact">Контакты ↗</a></nav></header>
<section className="intro"><div className="eyebrow">RNDR / ПОРТФОЛИО</div><h1>Пространство.<br/><span>Свет. Детали.</span></h1><div className="intro-bottom"><p>Интерьерная 3D-визуализация.<br/>От общего впечатления до фактуры.</p><a href="#projects">Смотреть проекты <span>↓</span></a></div></section>
<button className="hero" onClick={()=>open(0)} aria-label="Открыть проект Тёплая классика"><img src="/images/living-5.webp" alt="Гостиная с мягким диваном и скульптурной люстрой" fetchPriority="high"/><span className="hero-caption"><span>01 / Тёплая классика</span><span>Открыть проект ↗</span></span></button>
<section className="work" id="projects"><div className="section-heading"><h2>Избранные проекты</h2><span>01 — 11</span></div><div className="project-grid">{projects.slice(1).map((p,i)=><button className={'project project-'+(i+1)} key={p.title} onClick={()=>open(i+1)}><div className="project-image"><img src={p.images[0]} alt={p.title} loading="lazy"/><span className="image-open">Смотреть ↗</span></div><div className="project-label"><div><h3>{p.title}</h3><p>{p.type}</p></div><span className="project-number">{String(i+2).padStart(2,'0')} ↗</span></div></button>)}</div></section>
<footer id="contact"><div className="eyebrow">КОНТАКТЫ</div><h2>Обсудим ваш<br/>следующий проект?</h2><div className="contact-links"><a href="https://www.behance.net/RuslanDesign21" target="_blank" rel="noopener noreferrer">Behance <span>↗</span></a></div><div className="footer-bottom"><span>© 2026 RNDR</span><span>Интерьерная визуализация</span><a href="#top">Наверх ↑</a></div></footer>
<Dialog open={project!==null} onOpenChange={v=>{if(!v)setSelected(null)}}><DialogContent className="gallery" showCloseButton={false} onKeyDown={e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)}}>{project&&<><div className="gallery-head"><div><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.type}</DialogDescription></div><DialogClose className="close-gallery" aria-label="Закрыть галерею">Закрыть ×</DialogClose></div><img className="gallery-image" src={project.images[frame]} alt={project.title+' — ракурс '+(frame+1)}/><div className="gallery-controls"><button disabled={project.images.length<2} onClick={()=>step(-1)} aria-label="Предыдущий ракурс">←</button><span>{String(frame+1).padStart(2,'0')} / {String(project.images.length).padStart(2,'0')}</span><button disabled={project.images.length<2} onClick={()=>step(1)} aria-label="Следующий ракурс">→</button></div></>}</DialogContent></Dialog>
</main>}

