import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { ApiServidor } from '../services/Api';
import { ReactNode, createContext, useEffect, useState } from 'react';


interface IAdministrador {
    id: number;
}

interface IAutenticacaoAdministradorContext {
    administrador: IAdministrador | undefined;
    estaAutenticado: boolean;
    entrar: (credentials: { apelido: string; senha: string }) => Promise<void | string>;
    sair: () => void;
}

interface IAutenticacaoAdministradorProvider {
    children: ReactNode;
}


const AutenticacaoAdministradorContext = createContext<IAutenticacaoAdministradorContext>({} as IAutenticacaoAdministradorContext);

const AutenticacaoAdministradorProvider: React.FC<IAutenticacaoAdministradorProvider> = ({ children }) => {
    const [administrador, definirAdministrador] = useState<IAdministrador | undefined>(undefined);
    
    const entrar = async ({ apelido, senha }: { apelido: string; senha: string }): Promise<string | undefined> => {
        try {
            sair()
            const resposta = await ApiServidor.post('/admin/entrar', { apelido, senha });
            const { tokenAcesso } = resposta.data;
            const tokenDecodificado: any = jwtDecode(tokenAcesso);

            definirAdministrador({ id: tokenDecodificado.id_usuario });
            ApiServidor.defaults.headers.common['Authorization'] = `Bearer ${ tokenAcesso }`;
            Cookies.set('kairos.token.administrador', tokenAcesso, { path: '/admin', expires: 60 * 60 });  // 1 hora

            return undefined;
        } 
        catch (erro: any) {
            return erro.response.data.erro;
        }
    };

    const sair = () => {
        definirAdministrador(undefined);
        Cookies.remove('kairos.token.administrador');
        return <Navigate to="/admin/entrar" />;
    };

    useEffect(() => {
        const { 'kairos.token.administrador': token } = Cookies.get();
        if (token) {
            const dataAtual = (new Date().getTime() + 1) / 1000;
            const tokenDecodificado: any = jwtDecode(token);

            if (tokenDecodificado.exp < dataAtual) sair(); 
            
            definirAdministrador({ id: tokenDecodificado.id });
        } 
        else {
            sair();
        }
    }, []);

    return (
        <AutenticacaoAdministradorContext.Provider value={{ administrador, estaAutenticado: !!administrador, entrar, sair }}>
            { children }
        </AutenticacaoAdministradorContext.Provider>
    );
};


export { AutenticacaoAdministradorContext, AutenticacaoAdministradorProvider };
