import { render, screen } from '@testing-library/react';
import CookieBanner from './index';

describe("Renders the component", ()=>{
    const isVisible = true;
    const onClick = {accept: jest.fn, reject: jest.fn};

    beforeEach(()=>{
        render (<CookieBanner isVisible={isVisible} onClick={onClick}/>)
    });

    it("It renders correctly", ()=> {
        expect(screen.getByRole("region", {name: "cookie banner"}))
    });

    it("it contains one header", ()=> {
        expect(screen.getAllByRole("heading", {level: 2}).length).toEqual(1)
    });
})