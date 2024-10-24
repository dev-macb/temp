import React, { useContext, useEffect, useState } from 'react';

import { usarTema } from '../../contexts/TemaContext';
import { Pagina } from '../../components/pagina/Pagina';
import { Caixa } from '../../components/caixa/Caixa';
import { Secao } from '../../components/secao/SecaoConteiner';
import { Divisor } from '../../components/divisor/Divisor';
import { Butao } from '../../components/butao/Butao';
import { Entrada } from '../../components/entrada/Entrada';
import { AutenticacaoAdministradorContext } from '../../contexts/AutenticacaoAdministrador';
import { Link, Navigate } from 'react-router-dom';
import { Rodape } from '../../components/rodape/Rodape';


const Entrar: React.FC = () => {
    const { alterarTema } = usarTema();
    const [apelido, definirApelido] = useState('');
    const [senha, definirSenha] = useState('');
    const [carregando, definirCarregando] = useState(false);
    const [mensagemErro, definirMensagemErro] = useState<string | void>(undefined);
    const { entrar, estaAutenticado } = useContext(AutenticacaoAdministradorContext);

    const loginAdministrativo = async (evento: React.FormEvent) => {
        evento.preventDefault();

        definirCarregando(true);
        const resultado = await entrar({ apelido, senha });
        definirMensagemErro(resultado);
        if (resultado !== 'Apelido ou senha inválidos') {
            definirApelido('');
            definirSenha('');
        }
        definirCarregando(false);
    };

    const resetarFormulario = () => {
        definirSenha('');
        definirMensagemErro(undefined);
    };

    useEffect(() => {
        const paginaRecarregada = sessionStorage.getItem('reloaded');
        if (paginaRecarregada) {
            sessionStorage.removeItem('reloaded');
        }
    }, []);

    if (estaAutenticado) return <Navigate to='/admin/painel' />

    return (
        <Pagina>
            <Secao style={{ flex: '1' }}>
                <Caixa.Vertical style={{ width: "400px" }}>
                    <svg width="307" height="69" viewBox="0 0 307 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.688 68H30.192V55.04C30.192 41.088 25.424 33.6 15.888 32.576V68H0.72V1.75999H15.888V28.544C19.024 27.84 21.84 26.112 24.336 23.36C26.896 20.608 28.176 17.408 28.176 13.76V1.75999H43.44V6.752C43.44 11.424 42 15.904 39.12 20.192C36.304 24.416 32.624 27.52 28.08 29.504C38.704 32.192 44.24 40.128 44.688 53.312C44.688 54.336 44.688 55.68 44.688 57.344V68ZM91.356 46.208V23.072C91.356 18.272 90.076 13.92 87.516 10.016C85.02 6.112 81.724 4.16 77.628 4.16C75.772 4.16 74.204 4.768 72.924 5.984C71.708 7.2 70.844 8.8 70.332 10.784C69.436 13.856 68.988 17.024 68.988 20.288V49.088C68.988 54.72 69.82 58.88 71.484 61.568C73.212 64.256 75.452 65.6 78.204 65.6C82.236 65.6 85.436 63.68 87.804 59.84C90.172 56 91.356 51.456 91.356 46.208ZM106.716 68H91.452V57.44C89.98 61.28 87.868 64.16 85.116 66.08C82.364 68 79.484 68.96 76.476 68.96C69.564 68.96 64.06 66.816 59.964 62.528C55.868 58.176 53.82 52.096 53.82 44.288V25.184C53.82 17.312 56.092 11.296 60.636 7.136C65.18 2.912 70.524 0.799995 76.668 0.799995C80.252 0.799995 83.356 1.984 85.98 4.352C88.604 6.656 90.428 9.472 91.452 12.8V1.75999H106.716V68ZM133.948 1.75999V68H118.684V1.75999H133.948ZM174.827 19.424C174.827 14.048 173.739 10.304 171.563 8.192C169.451 6.016 166.123 4.928 161.579 4.928H156.299V68H141.131V1.75999H164.651C181.227 1.75999 189.515 7.456 189.515 18.848C189.515 26.464 183.723 32 172.139 35.456C184.427 37.888 190.571 44.416 190.571 55.04V68H175.403V51.776C175.403 46.912 174.411 43.2 172.427 40.64C170.443 38.08 167.659 36.8 164.075 36.8C163.051 36.8 161.675 36.864 159.947 36.992V34.496C163.403 34.368 166.603 33.248 169.547 31.136C173.067 28.704 174.827 24.8 174.827 19.424ZM249.479 43.04C249.479 50.912 247.175 57.216 242.567 61.952C237.959 66.624 231.495 68.96 223.175 68.96C214.919 68.96 208.487 66.624 203.879 61.952C199.335 57.216 197.063 50.912 197.063 43.04V26.816C197.063 18.944 199.335 12.64 203.879 7.904C208.487 3.168 214.919 0.799995 223.175 0.799995C231.495 0.799995 237.959 3.168 242.567 7.904C247.175 12.64 249.479 18.944 249.479 26.816V43.04ZM234.119 50.528V19.232C234.119 14.752 233.191 11.136 231.335 8.384C229.479 5.568 226.759 4.16 223.175 4.16C219.655 4.16 216.967 5.568 215.111 8.384C213.255 11.136 212.327 14.752 212.327 19.232V50.528C212.327 55.072 213.255 58.72 215.111 61.472C216.967 64.224 219.655 65.6 223.175 65.6C226.759 65.6 229.479 64.224 231.335 61.472C233.191 58.656 234.119 55.008 234.119 50.528ZM298.824 36.8C303.752 39.936 306.216 44.096 306.216 49.28C306.216 54.4 303.528 58.976 298.152 63.008C292.84 66.976 286.888 68.96 280.296 68.96C273.704 68.96 268.04 67.296 263.304 63.968C258.568 60.576 256.2 55.744 256.2 49.472V48.416H268.392V50.528C268.392 54.816 269.576 58.4 271.944 61.28C274.376 64.096 277.32 65.504 280.776 65.504C284.296 65.504 287.112 64.416 289.224 62.24C291.4 60 292.488 56.928 292.488 53.024C292.488 50.08 290.248 47.232 285.768 44.48L266.568 32.768C261.256 29.568 258.6 25.088 258.6 19.328C258.6 14.656 260.776 10.4 265.128 6.56C269.48 2.72 274.856 0.799995 281.256 0.799995C284.648 0.799995 287.624 1.312 290.184 2.336C292.808 3.36 294.76 4.64 296.04 6.17599C298.408 9.056 299.592 11.456 299.592 13.376V13.952H296.328C296.328 11.776 295.112 9.6 292.68 7.424C290.312 5.248 287.4 4.16 283.944 4.16C280.552 4.16 277.64 5.216 275.208 7.328C272.776 9.44 271.56 12.16 271.56 15.488C271.56 17.472 272.232 19.168 273.576 20.576C274.984 21.984 276.872 23.392 279.24 24.8L298.824 36.8Z" fill="#0053A0"/>
                    </svg>
                    <Caixa.Vertical style={{ gap: '0' }}>
                        <h4>Acesso Administrativo</h4>
                        <p>Preencha com seus dados</p>
                    </Caixa.Vertical>

                    <Caixa.Vertical>
                        <form onSubmit={ loginAdministrativo } style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center'}}>
                            <Entrada
                                dinamico
                                type="text"
                                titulo="Apelido"
                                value={apelido}
                                onChange={(evento) => definirApelido(evento.target.value)}
                                onFocus={() => resetarFormulario() }
                                erro={ mensagemErro === 'Apelido ou senha inválidos' }
                                required
                            />
                            <Entrada
                                dinamico
                                type="password"
                                titulo="Senha"
                                value={senha}
                                onChange={(evento) => definirSenha(evento.target.value)}
                                onFocus={() => resetarFormulario() }
                                erro={ mensagemErro === 'Apelido ou senha inválidos' }
                                required
                            />
                            <Butao animado type='submit'>Entrar</Butao>
                        </form>
                        <Divisor texto="ou" cor="#909090" />
                        <a href="/entrar">Entrar como Usuário</a>
                    </Caixa.Vertical>
                </Caixa.Vertical>
                
            </Secao>
            <Rodape textoCopyright='@dev-macb' linkCopyright='https://github.com/dev-macb'>
                <Caixa.Vertical >
                    <Divisor />
                    <Caixa.Horizontal>
                        <p>Kairos - Uma Oportunidade de tempo!</p>
                    </Caixa.Horizontal>
                </Caixa.Vertical>
            </Rodape>
        </Pagina>
    );
}


export { Entrar };
