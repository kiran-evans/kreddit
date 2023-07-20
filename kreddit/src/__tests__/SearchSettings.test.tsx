import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../lib/store';

describe("<SearchSettings />", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    });

    test('should render 3 <select>s', () => {
        expect(screen.getAllByRole("combobox").length).toBe(3);
    });
});