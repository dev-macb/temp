import * as jwt from 'jsonwebtoken';


interface IDadosAdministrador {
    id_usuario: string;
}

interface IDadosUsuario {
    id_usuario: string;
    tipo_usuario: number;
}


const gerarUsuario = (dados: IDadosUsuario): string | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';
    
    return jwt.sign(
        dados, 
        process.env.APP_SEGREDO_JWT,
        { expiresIn: '8h'}
    );
};


const autenticarUsuario = (token: string): IDadosUsuario | 'TOKEN_INVALIDO' | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';

    try {
        const decoded = jwt.verify(token, process.env.APP_SEGREDO_JWT);

        if(typeof decoded === 'string') return 'TOKEN_INVALIDO';
        else return decoded as IDadosUsuario;
    }
    catch (erro) {
        return 'TOKEN_INVALIDO';
    }
};


const gerarAdministrador = (dados: IDadosAdministrador): string | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';
    
    return jwt.sign(
        dados, 
        process.env.APP_SEGREDO_JWT,
        { expiresIn: '8h'}
    );
};


const autenticarAdministrador = (token: string): IDadosAdministrador | 'TOKEN_INVALIDO' | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';

    try {
        const decoded = jwt.verify(token, process.env.APP_SEGREDO_JWT);

        if(typeof decoded === 'string') return 'TOKEN_INVALIDO';
        else return decoded as IDadosAdministrador;
    }
    catch (erro) {
        return 'TOKEN_INVALIDO';
    }
};


export const JWTService = { gerarUsuario, gerarAdministrador, autenticarUsuario, autenticarAdministrador };