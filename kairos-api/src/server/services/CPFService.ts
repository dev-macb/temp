const validar = (cpf: string): boolean => {    
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;  // CPF deve ter 11 dígitos
    if (/^(\d)\1+$/.test(cpf)) return false;  // Verifica se todos os dígitos são iguais

    // Cálculo dos dígitos verificadores
    let soma = 0;
    let resto: number;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
};


const gerar = (formatar: boolean = true): string => {    
    const randomCPFArray = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    const digitos = randomCPFArray.map(Number);
    
    const calcularDigito = (array: number[], fator: number): number => {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i] * fator--;
        }
        const resto = total % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const primeiroDigito = calcularDigito(digitos, 10);
    digitos.push(primeiroDigito);

    const segundoDigito = calcularDigito(digitos, 11);
    digitos.push(segundoDigito);

    const cpf = digitos.join('');

    if (formatar) return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    else return cpf;
};


export const CPFService = { validar, gerar };