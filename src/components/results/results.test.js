import Results from './Results';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('render Pokimon lists', () => {
    const data = {
        "Headers" : {
            "cache-control": 'string no-cache'
        },
        "count" : 2,
        "results": [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
        ]
    };
    render(<Results data={data} />);
    const items = screen.getByTestId('result');
    expect(items).toHaveTextContent(
        `"Headers" :"Count" :2"Results" :[ { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" } ]`
    );
    expect(items).toHaveTextContent('bulbasaur');

     

    // expect(items).toHaveLength(2);
    // expect(items[0]).toHaveTextContent('bulbasaur');
    // expect(items[1]).toHaveTextContent('ivysaur');
});