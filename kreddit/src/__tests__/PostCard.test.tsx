import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../lib/store';

describe("<PostCard />", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    });

    test('should render a <section>', async () => {
        // Wait for the posts to be loaded
        await screen.findAllByTestId("postCard");

        expect(screen.getAllByTestId("postCardSection")[0]).toBeInTheDocument();
    });
});