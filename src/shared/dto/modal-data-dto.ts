export class ModalDataDto {
    constructor(
        readonly data: string,
        readonly autorizar: string,
        readonly terminal: string,
        readonly canal: string,
        readonly tipo: string,
        readonly bandeira: string,
        readonly cc: string,
        readonly estagio: string,
        readonly valor_bruto: string,
        readonly valor_liquido: string,
        readonly disponivel: string,
        readonly mdr_min: string,
        readonly mdr_imposto: string,
        readonly mdr_tax: string,
        readonly adm_tax: string,
    ){};
}