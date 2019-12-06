import React from 'react';
import { render } from '@testing-library/react';

import List from '../index';

interface ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  [propName: string]: any;
}

const Button = ({ backgroundColor, borderColor, ...props }: ButtonProps) => (
  <button
    style={{
      backgroundColor: backgroundColor || 'red',
      borderColor: borderColor || 'purple',
    }}
    {...props}
  />
);

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const privatePropsItems = [
  {
    id: 1,
    className: 'private-class-name',
  },
];

describe('<List />', () => {
  /* it('should render empty list', () => {
        const { container } = render(<List component={Button} />);
        expect(container.querySelector('.MuiGrid-container')).toBeEmpty();
    }); */

  it('should accept a component type in "component" prop', () => {
    expect(() => render(<List component={Button} />)).not.toThrow(Error);
  });

  it('should accept a string type in "component" prop', () => {
    expect(() => render(<List component="button" />)).not.toThrow(Error);
  });

  /* it('should render the content passed to it', () => {
        const { container } = render(<List component={Button} items={items}>Click me</List>);
        expect(container.querySelector('button')).toBeDefined();
        expect(container.querySelector('.MuiGrid-container')).not.toBeEmpty();
    }); */

  /* it('should accept any other prop as a shared prop and pass it to list items', () => {
        const { container } = render(
            <List
                component={Button}
                items={items}
                backgroundColor="blue"
                borderColor="yellow"
                disabled
            />
        );
        expect(container.querySelector('button')).toHaveStyle('background-color: blue');
        expect(container.querySelector('button')).toHaveStyle('border-color: yellow');
        expect(container.querySelector('button')).toBeDisabled();
    }) */

  /* it('should pass className as a shared prop', () => {
        const { container } = render(
            <List
                component={Button}
                items={items}
                className="custom-class-name"
            />
        );
        expect(container.querySelector('button')).toHaveClass('custom-class-name');
        expect(container.querySelector('.custom-class-name')).toBeInTheDocument();
    })

    it('should make item\'s private props overriding shared props', () => {
        const { container } = render(
            <List
                component={Button}
                items={privatePropsItems}
                className="custom-class-name"
            />
        );
        expect(container.querySelector('.private-class-name')).toBeInTheDocument();
        expect(container.querySelector('.custom-class-name')).not.toBeInTheDocument();
    }) */
});
