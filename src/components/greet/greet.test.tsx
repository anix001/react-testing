import { render , screen} from "@testing-library/react"
import { Greet } from "./greet"


//Group testing
describe('Greet', ()=>{
    test('Greet renders Correctly',()=>{
        render(<Greet/>)
        const textElement = screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument()
    } );
    
    describe('Nested',()=>{
        it('Greet renders with a name',()=>{
            render(<Greet name='Anish'/>);
            const textElement = screen.getByText('Hello Anish'|| 'Hello Guest');
            expect(textElement).toBeInTheDocument()
        }) 
    })
    
})

/*test.skip - to skip the test */
/* test.only - to perform that only that test in the page */
/*we can also use .skip and  .only method with describe */
/*Alternative of test method is it*/
/*Alternative of test.only => fit */
/*Alternative of test.skip => xit */