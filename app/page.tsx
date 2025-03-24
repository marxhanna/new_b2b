"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import img from '../app/img/logos/nobis_principal_branca.png';
import imgFooter from '../app/img/logos/nobis_roxo.png';
import heroBG from '../app/img/heroBG.png';
import impacto from '../app/img/lp/impacto.png';
import branding from '../app/img/lp/branding.png';
import materialidade from '../app/img/lp/materialidade.png';
import handson from '../app/img/lp/handson.png';
import rota from '../app/img/lp/rota.png';
import quiz from '../app/img/lp/quiz.png';
import certificados from '../app/img/certificados.png';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import TeamCarousel from '../app/components/team';
import palestras from '../app/img/palestras.png';
import esgcast from '../app/img/esgcast.png';
import Header from '../app/components/header';
import Footer from '../app/components/footer';

const produtos = [
  { id: "impacto", src: impacto.src, titulo: "Impacto socio-\nambiental com\nmonitoramento" },
  { id: "branding", src: branding.src, titulo: "Comunicação e\nBranding em ESG" },
  { id: "materialidade", src: materialidade.src, titulo: "Selo de\nMaterialidade" },
  { id: "handson", src: handson.src, titulo: "Hands-on ESG" },
  { id: "rota", src: rota.src, titulo: "Rota ESG" },
  { id: "quiz", src: quiz.src, titulo: "Quiz do\nConsumidor ESG" },
];

export default function Home() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
          scrollRef.current.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <>
    <Header />
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }} id="section1">
      {/* Imagem de fundo */}
      <img src={heroBG.src} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover',
          objectPosition: 'top',
          zIndex: 0
        }}
      /> 

      {/* Conteúdo sobreposto */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#fff', width: "80%", margin: "5% auto", padding: "0 20px" }}>
        <p className="frontPageTitle">
          ESG é com a Nobis 
        </p>
        <p className='subtitle'>
          A <strong>única</strong> plataforma que integra soluções em ESG de <strong>ponta-a-ponta</strong>.
        </p>
        <a className="initBtn" href="#sobre">Conheça nossas soluções</a>
      </div>
    </div>
    <div className="solucoes" id="solucoes">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <div className='title'>
        <p>No que podemos te ajudar? <a style={{ letterSpacing: "-3px", marginLeft: "1%" }}>-----------------------</a></p>
        <h1>ESG com Impacto Socioambiental, <br/>
        monitoramento, branding e resultados <span className='gradient-text'>reais.</span></h1>
        </div>
        <div style={{ display: 'flex', marginRight: "5%" }}>
          <button onClick={scrollLeft} className='carBtn'> <LeftOutlined /> </button>
          <button onClick={scrollRight} className='carBtn'> <RightOutlined /> </button>
        </div>
      </div>
      <div className="produtosWrapper">
        <div className="produtosCards" ref={scrollRef} onScroll={updateScrollButtons}>
          {produtos.map((produto) => (
            <div className="produtosCard" key={produto.id}>
              <img src={produto.src} alt={produto.titulo} />
              <div className="produtoOverlay">
                <h3>{produto.titulo.split("\n").map((linha, index) => (
                  <React.Fragment key={index}>
                    {linha}
                    <br />
                  </React.Fragment>
                ))}</h3>
                <button onClick={() => window.location.href = `#${produto.id}`}>Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='section' id='impacto'>
        <div className='text'>
          <p className='floatingText'>Até agora, você investiu em assistência ou impacto?</p>
          <h2>Impacto socioambiental com <span className='gradient-text'>monitoramento</span></h2>
          <p className='desc'>Saiba em tempo real os impactos que seus investimentos promovem para as pessoas, comunidades e o planeta.</p>
          <button className='descBtn' onClick={() => window.location.href = `/impacto-com-monitoramento`}>Como sua empresa pode gerar valor?</button>
        </div>
        <img src={impacto.src} className='imgSolutions right' />
    </div>
    <div className='section' id='branding'>
        <img src={branding.src} className='imgSolutions left' />
        <div className='text right'>
          <h2>Comunicação e <br/> Social <span className='gradient-text'>Branding</span></h2>
          <p className='desc'>Até agora sua empresa fez campanhas para dizer que é responsável ou investiu em causas que realmente conectam sua marca a seu público?</p>
          <button className='descBtn' onClick={() => window.location.href = `/social-branding`}>A Nobis é o novo canal de comunicação!</button>
        </div>
    </div>
    <div className='section' id='materialidade'>
    <div className='text'>
          <h2>Selo de <span className='gradient-text'>Materialidade</span></h2>
          <p className='desc'>Materialidade de Investimentos em ESG para auditoria e <i>due dilligence</i> em tempo real.</p>
          <button className='descBtn' onClick={() => window.location.href = `/impacto-com-monitoramento#selo`}>Certificação dos Investimentos em Impacto</button>
        </div>
        <img src={materialidade.src} className='imgSolutions right' />
    </div>
    <div className='section' id='handson'>
    <img src={handson.src} className='imgSolutions left' />
        <div className='text'>
          <h2>Hands-On <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Aprenda e implante ESG com um framework ideal para sua empresa gerar resultados.</p>
          <button className='descBtn' onClick={() => window.location.href = `/hands-on-esg`}>ESG como Vetor Estratégico do Negócio</button>
        </div>
    </div>
    <div className='section' id='rota'>
    <div className='text'>
          <h2>Rota <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Descubra o nível de maturidade da sua organização em ESG.</p>
          <button className='descBtn' onClick={() => window.location.href = `/rota-esg`}>Faça o teste!</button>
        </div>
        <img src={rota.src} className='imgSolutions right' />
    </div>
    <div className='section' id='quiz'>
    <img src={quiz.src} className='imgSolutions left' />
        <div className='text'>
          <h2>Quiz do Consumidor <span className='gradient-text'>ESG</span></h2>
          <p className='desc'>Descubra o seu nível de conhecimento e comportamento em relação às práticas de consumo ESG.</p>
          <button className='descBtn' onClick={() => window.location.href = `/quiz-do-consumidor`}>Responda ao Quiz!</button>
        </div>
    </div>
    <div className='certificados'>
        <img src={certificados.src} />
    </div>
    <div className='outrasSolucoes'>
      <h1>Outras <span className='gradient-text'>Soluções</span></h1>
      <div className='solucoesCards'>
        <div className='solucoesCard'>
          <img src={palestras.src} />
          <h3>Palestras</h3>
          <p>Conhecimentos, reflexões e práticas em ESG.</p>
        </div>
        <div className='solucoesCard'>
          <img src={esgcast.src} />
          <h3>ESGCAST</h3>
          <p>Seu podcast semanal <br/> sobre ESG.</p>
        </div>
      </div>
    </div>
    <div className='equipe'>
    <div className="content">
        <div className="sectionContent"> 
          <div className="carousel" style={{ width: "30%" }}>
            <TeamCarousel /> 
          </div>
          <div className="textC" style={{ width: "100%" }} id='sobre'>
            <div className='title'>
              <p>As faces por trás <a style={{ letterSpacing: "-4px", marginLeft: "1%" }}>----------------</a></p>
              <h1>Quem somos <a className="gradient-text">nós?</a></h1>
            </div>
            <span>
            A Nobis é uma plataforma de ESG 4.0 que conecta as empresas aos seus públicos a partir de programas socioambientais escaláveis.
            <br/><br/>Nossa missão é gerar valor compartilhado com monitoramento de indicadores de impacto em tempo real, ajudando as empresas a alcançar seus objetivos ESG de forma eficaz e transparente.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className='noticias'>

    </div>
    <br/><br/><br/>
    <Footer />
    </>
  );
}
