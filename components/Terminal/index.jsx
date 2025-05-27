import { useEffect, useRef, useState } from 'react';
import { TerminalWindow } from './styled';

export default function Terminal() {
  const historyRef = useRef(null);
  const terminalSectionRef = useRef(null);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isAsking, setIsAsking] = useState(false);

  const commands = [
    {
      cmd: 'sudo apt-get update',
      output: 
        'Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease\n' +
        'Hit:2 http://archive.ubuntu.com/ubuntu focal-updates InRelease\n' +
        'Hit:3 http://archive.ubuntu.com/ubuntu focal-backports InRelease\n' +
        'Fetched 0 B in 1s (0 B/s)\n' +
        'Reading package lists... Done'
    },
    {
      cmd: 'sudo apt-get install wget',
      output: 
        'Reading package lists... Done\n' +
        'Building dependency tree\n' +
        'Reading state information... Done\n' +
        'Get:1 http://archive.ubuntu.com/ubuntu focal/universe amd64 wget amd64 1.20.3-1ubuntu1 [1,300 kB]\n' +
        'Fetched 1,300 kB in 1s (1,500 kB/s)\n' +
        'Preparing to unpack .../wget_1.20.3-1ubuntu1_amd64.deb ...\n' +
        'Unpacking wget (1.20.3-1ubuntu1) ...\n' +
        'Setting up wget (1.20.3-1ubuntu1) ...\n' +
        'Processing triggers for libc-bin (2.31-0ubuntu9.9) ...\n' +
        'wget installed successfully.'
    },
    {
      cmd: 'wget https://drive.google.com/uc?export=download&id=1XI_mgJ7r9bvj8rE_Biyk3t7KI5BIcfE-',
      output: 
        'Connecting to drive.google.com (drive.google.com)|172.217.1.206|:443... connected.\n' +
        'HTTP request sent, awaiting response... 302 Found\n' +
        'Location: https://drive.google.com/uc?id=1ttv_CZrDpmqG7WPMxLwK0OLBofPCRn5_&export=download [following]\n' +
        'Length: 1,024,000 (1.0M) [application/pdf]\n' +
        'Saving to: ‘resume.pdf’\n\n' +
        'resume.pdf                  100%[=================================================>]   1.00M  1.13MB/s    in 0.9s\n\n' +
        '‘resume.pdf’ saved [1024000/1024000]'
    },
    {
      cmd: 'Would you like to download resume.pdf? (S/N)',
      output: ''
    }
  ];

  const typeCommand = async (command) => {
    let typedCommand = '';
    for (let i = 0; i < command.length; i++) {
        typedCommand += command[i];
        setCurrentCommand(typedCommand);
        await new Promise(resolve => setTimeout(resolve, 30)); 

        setShowCursor(true);
        await new Promise(resolve => setTimeout(resolve, 60));
        setShowCursor(false);
    }

    const history = historyRef.current;
    const newCommand = document.createElement('div');
    newCommand.className = 'command';
    newCommand.innerHTML = `<span class="prompt">$</span> ${typedCommand}`;
    history.appendChild(newCommand);

    setCurrentCommand('');
    terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;
  };

  const typeOutput = async (output) => {
    const history = historyRef.current;
    const newOutput = document.createElement('div');
    newOutput.className = 'output';
    newOutput.innerText = output;
    history.appendChild(newOutput);
    terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;
  };

  useEffect(() => {
    const simulateCommands = async () => {
      for (let i = 0; i < commands.length; i++) {
        const command = commands[i].cmd;
        const output = commands[i].output;
        await typeCommand(command);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeOutput(output);

        if (command.includes('download')) {
          setIsAsking(true); 
        }
      }
    };

    simulateCommands();
  }, []);

  const handleUserResponse = (event) => {
    const value = event.key.toLowerCase();
    const affirmatives = ['s', 'sim', 'y', 'yes'];
    const negatives = ['n', 'não', 'no'];

    if (isAsking) {
      if (affirmatives.includes(value)) {
        handleAffirmativeResponse();
      } else if (negatives.includes(value)) {
        handleNegativeResponse();
      } else {
        const history = historyRef.current;
        const errorMessage = document.createElement('div');
        errorMessage.className = 'output';
        errorMessage.innerText = 'Invalid response. Please respond with S/N.';
        history.appendChild(errorMessage);
        terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;
        setTimeout(() => {
          history.removeChild(errorMessage);
          askToRestartDownload(); 
        }, 5000);
      }
    }
  };

  const handleAffirmativeResponse = () => {
    setIsAsking(false);

    const history = historyRef.current;
    const responseCommand = document.createElement('div');
    responseCommand.innerHTML = `<span class="prompt">$</span> S`;
    history.appendChild(responseCommand);

    const downloadMessage = document.createElement('div');
    downloadMessage.className = 'output';
    downloadMessage.innerText = 'Downloading resume.pdf...';
    history.appendChild(downloadMessage);
    terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;

    setTimeout(() => {
      const thankYouMessage = document.createElement('div');
      thankYouMessage.className = 'output';
      thankYouMessage.innerText = 'Thank you for downloading!';
      history.appendChild(thankYouMessage);
      terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;

      setTimeout(() => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1XI_mgJ7r9bvj8rE_Biyk3t7KI5BIcfE-';
      }, 1000); 
    }, 1000);
  };

  const handleNegativeResponse = () => {
    setIsAsking(false);

    const history = historyRef.current;
    const responseCommand = document.createElement('div');
    responseCommand.innerHTML = `<span class="prompt">$</span> N`;
    history.appendChild(responseCommand);

    const cancelMessage = document.createElement('div');
    cancelMessage.className = 'output';
    cancelMessage.innerText = 'Download canceled.';
    history.appendChild(cancelMessage);
    terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;

    setTimeout(() => {
      askToRestartDownload();
    }, 1000); 
  };

  const askToRestartDownload = () => {
    const history = historyRef.current;
    const restartMessage = document.createElement('div');
    restartMessage.className = 'output';
    restartMessage.innerText = 'Would you like to restart the download? (S/N)';
    history.appendChild(restartMessage);

    setIsAsking(true);
    terminalSectionRef.current.scrollTop = terminalSectionRef.current.scrollHeight;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserResponse);
    return () => window.removeEventListener('keydown', handleUserResponse);
  }, [isAsking]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <TerminalWindow>
      <div className="terminal-window">
        <header>
          <div className="button green"></div>
          <div className="button yellow"></div>
          <div className="button red"></div>
        </header>
        <section className="terminal" ref={terminalSectionRef}>
          <div className="history" ref={historyRef}></div>
          <div className="prompt-line">
            <span className="prompt">$</span>&nbsp;
            <span className="prompt">{currentCommand}</span>
            {showCursor && <span className="typed-cursor">|</span>} 
          </div>
        </section>
      </div>
    </TerminalWindow>
  );
}
