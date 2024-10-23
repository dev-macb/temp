import { servidor } from './server/Servidor';


function banner() { 
    console.clear();
    console.log('╦╔═ ┌─┐ ┬ ┬─┐ ┌─┐ ┌─┐');
    console.log('╠╩╗ ├─┤ │ ├┬┘ │ │ └─┐');
    console.log('╩ ╩ ┴ ┴ ┴ ┴└─ └─┘ └─┘');
    console.log('@dev_macb      v1.0.0\n');
}


const iniciarServidor = () => {
    banner();

    if (process.env.NODE_ENV === 'producao') {
        console.log('AMBIENTE DE PRODUÇÃO\n');
    }
    else if (process.env.NODE_ENV === 'test') {
        console.log('AMBIENTE DE TESTES\n');
    }
    else {
        console.log('AMBIENTE DE DESENVOLVIMENTO\n');
    }

    servidor.listen(process.env.APP_PORTA || 3333, () => {
        console.log('[*] O servidor HTTP está rodando...');
        console.log(`[*] Aplicação escutando em ${ process.env.APP_HOST || 'localhost' } : ${ process.env.APP_PORTA || 3333 }\n`);
    });
};


iniciarServidor();