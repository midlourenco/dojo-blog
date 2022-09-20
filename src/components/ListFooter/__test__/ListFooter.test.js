import { render, screen } from '@testing-library/react';
import ListFooter from "../ListFooter"
import {BrowserRouter as Router } from "react-router-dom" 



//unit test to component ListFooter


const MockListFooter = ({numberOfResults})=>{
    return(
    <Router>
        <ListFooter numberOfResults={numberOfResults} />
    </Router>
    )
}

describe("ListFooter",()=>{
    
    // describe("functionality 1", ()=>{
        it('should render the correct amount of results showed in the list', async() => {
            render(<MockListFooter numberOfResults={5}/>); 
            const paragraphElement = screen.getByText(/total: 5 results/i);  
            expect(paragraphElement).toBeInTheDocument();
        });// se nao tiver o Mock vai falahr porque está fora do contexto do router
        
    // })

    
    it('should render "result" when then number of the results showed is one', async() => {
        render(<MockListFooter numberOfResults={1}/>); 
        const paragraphElement = screen.getByText(/total: 1 result/i);  
        expect(paragraphElement).toBeInTheDocument();
    });
})



// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByText(/total: 1 result/i);  
//     expect(paragraphElement).toBeTruthy();
// });

// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByText(/total: 1 result/i);  
//     expect(paragraphElement).toBeVisible();
// });// se o p tivesse style={{opacity: 0}} este teste falhava -> não é visivel para o utilizador


// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByText(/total: 1 result/i);  
//     expect(paragraphElement).toContainHTML("p");
// });

// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByTestId("para");  
//     // const paragraphElement = screen.getByRole("paragraph");   // failed
//     expect(paragraphElement).toHaveTextContent("Total: 1 result");
// });

// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByTestId("para");  
//     expect(paragraphElement).not.toBeFalsy();
// }); 


// it('should render "result" when then number of the results showed is one', async() => {
//     render(<MockListFooter numberOfResults={1}/>); 
//     const paragraphElement = screen.getByTestId("para");  
//     expect(paragraphElement.textContent).toBe("Total: 1 result");
// });