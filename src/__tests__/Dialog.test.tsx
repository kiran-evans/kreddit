import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../lib/store';

describe("<Dialog />", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    });

    test('should render a <dialog> when an <article> is clicked', async () => {
        // Wait until the app has fetched the data from the API and rendered the posts
        // Then click the first post
        await userEvent.setup().click((await screen.findAllByTestId("postCard"))[0]);

        expect(screen.getByTestId("dialog")).toBeInTheDocument();
    });
});