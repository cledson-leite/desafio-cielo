import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { App } from './';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  it('Should have a content', () => {
    expect(screen.queryByRole('content')).toBeInTheDocument();
  })
  it('Should have a topBar', () => {
    expect(screen.queryByRole('topBar')).toBeInTheDocument();
  })
  it('Should have a bottonBar', () => {
    expect(screen.queryByRole('bottonBar')).toBeInTheDocument();
  })
  it('Should have a main', () => {
    expect(screen.queryByRole('main')).toBeInTheDocument();
  })
});