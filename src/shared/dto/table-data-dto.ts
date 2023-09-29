export class TableDataDto {
    constructor(
        readonly autorizar: string,
        readonly data: string,
        readonly canal: string,
        readonly tipo: string,
        readonly bandeira: string,
        readonly valor_bruto: string,
        readonly valor_liquido: string,
        readonly estagio: string,
    ){};
}