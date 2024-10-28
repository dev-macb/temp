const FormatarDataService = (data: string, comHora: boolean = false): string => { 
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Os meses são de 0 a 11, então adicionamos 1
    const ano = dataObj.getFullYear();

    let dataFormatada = `${dia} / ${mes} / ${ano}`;

    if (comHora) {
        const horas = String(dataObj.getHours()).padStart(2, '0');
        const minutos = String(dataObj.getMinutes()).padStart(2, '0');
        const segundos = String(dataObj.getSeconds()).padStart(2, '0');
        dataFormatada += ` • ${horas}:${minutos}:${segundos}`;
    }

    return dataFormatada;
};

export { FormatarDataService };