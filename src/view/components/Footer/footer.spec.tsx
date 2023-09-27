import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Footer } from './';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <Footer />,
    );
  })
  it('Should have the text "Desenvolvido por:"', () => {
    const text = screen.queryByRole('text')
    expect(text).toHaveTextContent('Desenvolvido por:');
  })
  it('Should have the name "Cledson Leite"', () => {
    const name = screen.queryByRole('desenvolvedor')
    expect(name).toHaveTextContent('Cledson Leite');
  })
  it('Should have the field action with two children', () => {
    const action = screen.queryByRole('action')
    expect(action).toBeInTheDocument();
    expect(action?.children).toHaveLength(2);
  })
  it('Should have a href like linkedin', () => {
    const linkedin = screen.queryByRole('linkedin')
    expect(linkedin).toHaveAttribute(
        'href', 
        'https://www.linkedin.com/in/cledson-leite/'
        );
  })
  it('Should have a href like github', () => {
    const github = screen.queryByRole('github')
    expect(github).toHaveAttribute(
        'href', 
        'https://github.com/cledson-leite/'
        );
  })
});