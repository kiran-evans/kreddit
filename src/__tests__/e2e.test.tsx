import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../lib/store';

describe("Search for 'bananas'", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    });

    test('should return at least one PostCard', async () => {
        await userEvent.type(screen.getByRole("searchbox"), "bananas");
        await userEvent.keyboard("{Enter}");

        expect((await screen.findAllByTestId("postCard")).length).toBeGreaterThanOrEqual(1);
    });
});