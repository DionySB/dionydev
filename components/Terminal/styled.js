import styled from 'styled-components';

export const TerminalWindow = styled.div`
  .terminal-window {
    text-align: left;
    width: 100%;
    width: 600px;
    height: 360px;
    margin: auto;
    position: relative;
    border-style: solid; 
    border-color: #333; 
    border-radius: 8px;
    border-width: 1px 1px 6px 0px;
    -webkit-box-shadow: 0 0 20px grey;
    box-shadow: 0 0 20px grey;
    overflow: hidden;
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
    margin-bottom: 15px; 
  }

  .terminal-window section.terminal .typed-cursor {
    opacity: 1;
    animation: red blink  0.7s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  .terminal-window .output {
    color: #8A8F98; 
    margin-bottom: 15px; 
    white-space: pre-line;
  }

  .terminal-window .command {
    color: #FFFFFF; 
  }

  .terminal-window .prompt {
    color: #00FF00;
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

  @media (max-width: 768px) {
    .terminal-window {
      width: 300px; 
    }

    .terminal-window section.terminal {
      font-size: 10pt;
    }
  }

  @media (max-width: 480px) {
    .terminal-window section.terminal {
      font-size: 9pt;
    }
  }
`;
