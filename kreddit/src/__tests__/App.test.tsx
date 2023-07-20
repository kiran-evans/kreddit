import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe("<App />", () => {
    test('Should render a <header>', () => {
        render(<App />);
        expect(screen.getByText("kreddit")).toBeDefined();
    });
});