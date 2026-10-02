'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Reveal } from '@/components/sections/Reveal';
import { SimulationForm } from '@/components/sections/SimulationForm';

const nav = ['Início', 'Sobre', 'Soluções', 'Como funciona', 'Obras', 'FAQ'];
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '558781641809';
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const solutions = [
  ['Residencial', 'Um sistema desenhado para o ritmo e o consumo da sua casa.', '⌂'],
  ['Empresarial', 'Energia para reduzir custos e dar previsibilidade à operação.', '▦'],
  ['Propriedades rurais', 'Geração para fazer a energia trabalhar em cada hectare.', '⌁'],
  ['Manutenção e monitoramento', 'Acompanhamento para manter o seu sistema produzindo bem.', '◌']
];
const faqs = [
  ['Quanto custa um sistema solar?', 'O investimento depende do seu consumo, telhado e padrão de entrada. A simulação gratuita dimensiona o projeto para a sua realidade.'],
  ['Quanto tempo demora a instalação?', 'O prazo é definido após a análise técnica e também considera a etapa de homologação junto à distribuidora.'],
  ['Funciona em dia nublado?', 'Sim. A geração pode diminuir em condições de menor irradiação, mas o sistema continua produzindo energia.'],
  ['Preciso fazer manutenção?', 'A limpeza e a inspeção periódicas ajudam a preservar o desempenho. A necessidade varia conforme o local e o sistema.'],
  ['Como funciona o financiamento?', 'As possibilidades de pagamento são avaliadas na proposta, de acordo com o projeto e a disponibilidade de crédito.'],
  ['O que acontece com o excedente?', 'Em sistemas conectados à rede, a energia excedente pode virar créditos conforme as regras da sua distribuidora.']
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><a className="brand" href="#inicio" aria-label="Sollar Energia - início"><img src="/brand-mark.svg" alt=""/><span>SOLLAR <em>ENERG</em></span></a><nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}<a className="button button-solar nav-cta" href="#simulacao">Simular economia <span>↗</span></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><i></i><i></i></button></header>
    <section id="inicio" className="hero"><div className="panel-grid" aria-hidden="true"/><div className="sun-rays" aria-hidden="true">{Array.from({ length: 13 }).map((_, i) => <b key={i} style={{ transform: `rotate(${i * 14 - 84}deg)` }}/>)}</div><div className="wrap hero-layout"><Reveal className="hero-copy"><p className="eyebrow"><span/> Energia solar fotovoltaica</p><h1>Sua conta de luz tem <mark>prazo</mark> para acabar.</h1><p className="hero-text">Projetos personalizados para residências, empresas e propriedades rurais. Da engenharia à homologação, a Sollar cuida do caminho inteiro.</p><div className="hero-actions"><a className="button button-solar" href="#simulacao">Simular minha economia <span>↗</span></a></div></Reveal><div className="hero-visual"><div className="image-frame"><Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80" alt="Painéis solares sobre um telhado, imagem ilustrativa" fill priority sizes="(max-width: 780px) 100vw, 50vw"/></div><p>Imagem de referência — substitua pelas fotos reais das obras Sollar.</p></div></div></section>
    <section className="trust-strip dark" aria-label="Diferenciais rápidos da Sollar"><div className="wrap trust-grid">{[
      ['Arcoverde e região', 'Atendimento próximo para cidade, campo e comércio.'],
      ['Projeto sob medida', 'Dimensionamento pensado para o seu consumo real.'],
      ['Homologação acompanhada', 'A Sollar orienta a etapa com a concessionária.'],
      ['Do orçamento à ligação', 'Uma equipe conduz o processo até a energia gerar.']
    ].map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></section>
    <section id="sobre" className="section light"><div className="wrap two-col"><Reveal><p className="eyebrow dark-ink"><span/> Sobre a Sollar</p><h2>Energia bem projetada é tranquilidade por muitos anos.</h2><p>A Sollar Energia desenvolve soluções em energia solar fotovoltaica para quem quer reduzir custos sem ter de desvendar cada etapa técnica. O projeto começa pela sua realidade e segue com orientação clara, instalação e suporte.</p><a className="text-link" href="#como-funciona">Conheça o processo <span>→</span></a></Reveal><Reveal className="about-photo"><Image src="/obra-rural.jpg" alt="Painéis solares instalados no telhado de uma propriedade rural atendida pela Sollar" fill sizes="(max-width: 800px) 100vw, 50vw"/><div className="about-photo-caption"><span>Energia no campo e na cidade</span><b>Um projeto pensado para a sua realidade.</b></div></Reveal></div></section>
    <section id="soluções" className="section light solutions"><div className="wrap"><Reveal><p className="eyebrow dark-ink"><span/> Soluções</p><h2>O sol da sua rotina.<br/><mark>Do seu jeito.</mark></h2></Reveal><div className="solution-grid">{solutions.map(([title, copy, icon]) => <Reveal key={title} className="solution-card"><span className="solution-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{copy}</p><a href="#simulacao">Saiba mais <span>→</span></a></Reveal>)}</div></div></section>
    <section id="como-funciona" className="section process dark"><div className="panel-grid" aria-hidden="true"/><div className="wrap"><Reveal><p className="eyebrow"><span/> Como funciona</p><h2>Você decide economizar.<br/>A gente <mark>liga os pontos.</mark></h2></Reveal><ol className="steps">{['Simulação gratuita', 'Projeto e engenharia', 'Instalação', 'Homologação e ligação'].map((step, i) => <Reveal key={step}><li><b>0{i + 1}</b><div><h3>{step}</h3><p>{['Entendemos seu consumo e as condições do imóvel.', 'Desenhamos uma solução adequada à sua necessidade.', 'Executamos a instalação com atenção a cada detalhe.', 'Acompanhamos a burocracia junto à concessionária.'][i]}</p></div></li></Reveal>)}</ol></div></section>
    <section className="section light differentials"><div className="wrap"><Reveal><p className="eyebrow dark-ink"><span/> Por que Sollar</p><h2>Clareza para escolher.<br/>Cuidado para instalar.</h2></Reveal><div className="differential-grid">{['Engenharia e projeto personalizado', 'Acompanhamento da homologação', 'Equipamentos e garantia conforme proposta', 'Suporte após a instalação'].map((item, i) => <Reveal key={item}><b>0{i + 1}</b><p>{item}</p></Reveal>)}</div></div></section>
    <section id="obras" className="section works"><div className="wrap"><Reveal className="section-heading"><div><p className="eyebrow dark-ink"><span/> Obras</p><h2>Resultados que pedem<br/>luz de verdade.</h2></div><p>Instalações reais da Sollar em residências e propriedades rurais do interior de Pernambuco.</p></Reveal><div className="work-grid">{[
      { src: '/obra-tupanatinga-familia.jpg', alt: 'Painéis solares instalados no telhado de uma casa em Tupanatinga', title: 'Projeto residencial', place: 'Tupanatinga · PE' },
      { src: '/obra-rural.jpg', alt: 'Sistema solar instalado em uma propriedade rural', title: 'Energia no campo', place: 'Instalação rural' },
      { src: '/obra-projeto-rural.jpg', alt: 'Fileira de painéis solares em instalação rural', title: 'Projeto concluído', place: 'Sistema fotovoltaico' }
    ].map((project) => <article key={project.src} className="work-card"><Image src={project.src} alt={project.alt} fill loading="lazy" sizes="(max-width: 780px) 100vw, 33vw"/><span>{project.title}<b>{project.place}</b></span></article>)}</div></div></section>
    <section id="faq" className="section light faq"><div className="wrap two-col"><Reveal><p className="eyebrow dark-ink"><span/> FAQ</p><h2>As respostas antes da sua primeira conversa.</h2><p>Uma boa decisão começa com informação objetiva. Se a sua dúvida não estiver aqui, fale com um consultor.</p></Reveal><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}<span>{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>
    <section id="simulacao" className="final-cta dark"><div className="panel-grid" aria-hidden="true"/><div className="wrap final-layout"><Reveal><p className="eyebrow"><span/> Simulação gratuita</p><h2>Sua próxima conta pode <mark>custar menos.</mark></h2><p>Informe sua cidade e o valor médio da conta. A equipe Sollar avalia seu perfil e apresenta os próximos passos.</p></Reveal><Reveal><SimulationForm /></Reveal></div></section>
      <footer className="footer"><div className="wrap footer-top"><a className="brand" href="#inicio"><img src="/brand-mark.svg" alt=""/><span>SOLLAR <em>ENERG</em></span></a><div><b>Endereço</b><p>Rua Governador Estácio Coimbra, 289<br/>Arcoverde · PE · CEP 56512-050</p></div><div><b>Contato</b><p><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Image src="/whatsapp-icon.png" alt="" width={24} height={24}/> Chamar no WhatsApp</a><br/><a href="tel:+558781641809">87 8164-1809</a></p></div></div><div id="privacidade" className="wrap footer-bottom"><span>© {new Date().getFullYear()} Sollar Energia.</span><span>Política de privacidade: inserir link oficial.</span></div></footer>
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chamar a Sollar Energia no WhatsApp"><Image src="/whatsapp-icon.png" alt="" width={38} height={38}/></a>
  </main>;
}
