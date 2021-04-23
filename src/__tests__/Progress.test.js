import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Progress from '../components/Progress';
import store from '../store';

describe('checks if Home component renders correctly', () => {
  test('should renders correct text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Progress />
        </BrowserRouter>
      </Provider>,
    );
    const text = screen.getByText('mi');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Progress />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
