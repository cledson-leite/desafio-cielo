import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Header } from './';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Header />,
    );
  })
  it('Should have the title sales report', () => {
    const title = screen.queryByRole('title')
    expect(title).toHaveTextContent('Relatório de vendas');
  })
});