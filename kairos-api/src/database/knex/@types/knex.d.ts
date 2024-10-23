import { UsuarioModel } from '../../../server/models/Usuario';
import { AdministradorModel } from '../../../models/Administrador';


declare module 'knex/types/tables' {
    interface Tables {
        usuarios: UsuarioModel;
        administradores: AdministradorModel;
    }
}
