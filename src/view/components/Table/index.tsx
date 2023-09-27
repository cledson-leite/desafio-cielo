import { mask } from '../../../shared/mask'
import { TRow } from './component/TRow'
import { THead } from './component/Thead'
import * as Styled from './styles'

type CellsProps = {
    codigo: string,
    data: string,
    canal: string,
    tipo: string,
    bandeira: string,
    valor_bruto: string,
    valor_liquido: string,
    estagio: string,
}

export const Table = () => {
    const cells: CellsProps[] = [
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
        {
            codigo: '123456',
            data: '12/12/12',
            bandeira: 'mastercard',
            canal: 'Venda',
            tipo: 'venda direta',
            valor_bruto: mask('12.00'),
            valor_liquido: mask('11.00'),
            estagio:'aprovado'
        },
        {
            codigo: '654321',
            data: '12/11/10',
            bandeira: 'visa',
            canal: 'emprestimo',
            tipo: 'dar dinheiro',
            valor_bruto: mask('1.00'),
            valor_liquido: mask('0.00'),
            estagio:'cancelado'
        },
    ]
  return (
    <Styled.Container>
        <THead texts={Object.keys(cells[1])} />
        <Styled.TBody>
            {
                cells.map((cell, index) => (
                    <TRow key={index} index={index+1} texts={Object.values(cell)}/>
                ))
            }
        </Styled.TBody>
    </Styled.Container>
  )
}
