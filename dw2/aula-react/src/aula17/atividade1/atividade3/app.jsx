import {useState} from 'react';
import irmao1 from './irmao1';
import irmão2 from './irmao2';

function app() {
    const [mensagem,setMensagem] = useState('');

    return (
        <div>
            <h1>Exemplo: Comunicação entre irmãos</h1>
            <irmao1 enviarMensagem= {setMensagem}/>
            <irmão2 mensagem={mensagem}/>
        </div>
    );
}

export default app;