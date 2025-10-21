import renderer from 'react-test-renderer';

import Counter from '../../src/renderer/components/Counter';

describe('Counter component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Counter value={1} incrementValue={jest.fn()} decrementValue={jest.fn()} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('displays the correct value', () => {
        const mockIncrement = jest.fn();
        const mockDecrement = jest.fn();
        const component = renderer.create(
            <Counter value={5} incrementValue={mockIncrement} decrementValue={mockDecrement} />,
        );
        const tree = component.toJSON();
        expect(tree).toBeTruthy();
    });
});
