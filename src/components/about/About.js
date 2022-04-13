import React from "react";
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Deixa eu te contar algo sobre mim</h3>
        <p>
        Meu nome é Pedro Francisco Abreu Arenas, nasci em Caracas Venezuela, no dia 18 de outubro de 1.958, 
        tenho 4 filhos.<br></br>
        <br></br>
        Tenho formação universitária na área de Administração com menção em Ciência da Computação e meu trabalho se 
        concentrou principalmente no setor financeiro, sempre virado para a área de sistemas.<br></br>
        <br></br>
        Desde minha chegada ao Brasil tenho recebido treinamento em tecnologia para desenvolvimento 
        WEB, isso amplia minhas opções no mercado de trabalho, sendo essa minha principal prioridade. 
        Pessoalmente, achei minha estadia no Brasil muito gratificante.
        </p>
      </div>
      <div className='about-img'>
        <img
          src='../bancos.jpg'
          alt='about'
        />
      </div>
    </div>
  );
};

export default About;
