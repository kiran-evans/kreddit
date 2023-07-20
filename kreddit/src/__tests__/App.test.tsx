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

    test('should render an <h1>', () => {
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });

    test('should render an <input> with type="search"', () => {
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
    });

    test('should render a <main>', () => {
        expect(screen.getByRole("main")).toBeInTheDocument();
    });
});