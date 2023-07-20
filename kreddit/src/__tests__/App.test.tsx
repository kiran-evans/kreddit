import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../lib/store';

describe("<App />", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    });

    test('Should render a <header>', () => {
        expect(screen.getByText("kreddit")).toBeDefined();
    });
});