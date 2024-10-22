import styled from 'styled-components';

export const TerminalWindow = styled.div`
  .terminal-window {
    text-align: left;
    width: 600px;
    height: 360px;
    margin: auto;
    position: relative;
    border-style: solid; 
    border-color: #333; 
    border-radius: 8px;
    border-width: 1px 1px 6px 0px; /* Cima, Direita, Fundo, Esquerda */

    	-webkit-box-shadow: 0 0 20px grey;
	        box-shadow: 0 0 20px grey;

  }

  .terminal-window header {
    background: #333;
    height: 30px;
    border-radius: 8px 8px 0 0;
    padding-left: 10px;
  }

  .terminal-window header .button {
    width: 12px;
    height: 12px;
    margin: 10px 4px 0 0;
    display: inline-block;
    border-radius: 8px;
  }

  .terminal-window header .button.green {
    background: #3BB662;
  }

  .terminal-window header .button.yellow {
    background: #E5C30F;
  }

  .terminal-window header .button.red {
    background: #E75448;
  }

  .terminal-window section.terminal {
    color: white;
    font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
    font-size: 11pt;
    background: #000;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 30px;
    bottom: 0;
    overflow: auto;
  }

  .terminal-window section.terminal .prompt-line {
    margin-bottom: 15px; /* Espaço entre comandos */
  }

  .terminal-window section.terminal .typed-cursor {
    opacity: 1;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  .terminal-window .output {
    color: #8A8F98; /* Cor diferente para outputs */
    margin-bottom: 15px; /* Espaço abaixo do output */
    white-space: pre-line; /* Preserva quebras de linha nos outputs */
  }

  .terminal-window .command {
    color: #FFFFFF; /* Cor branca para os comandos */
  }

  .terminal-window .prompt {
    color: #00FF00; /* Cor vibrante para o $ */
  }

  .terminal-window .typed-cursor {
    color: green;
  }
  
  .terminal-data {
    display: none;
  }

  .terminal-window .gray {
    color: gray;
  }

  .terminal-window .green {
    color: green;
  }
`;
