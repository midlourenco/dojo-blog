import { render, screen, fireEvent, waitForElementToBeRemoved} from '@testing-library/react';
import AddHeroInput from "../AddHeroInput"
import {BrowserRouter as Router } from "react-router-dom" 
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import userEvent from '@testing-library/user-event';


//unit test to component ListFooter

const queryClient = new QueryClient()


const MockListFooter = ()=>{
    return(
    <QueryClientProvider client={queryClient}>
        <AddHeroInput />
    </QueryClientProvider>
    )
}


//when component received by props elements of one use state from its parent:
// for the variable: we pass empty value of its format. for example if it is one array variableName{[]}
// for the function: we can do one of two things:
// setVariableName={()={}} 
//or
// const mockedSetVariableName = jest.fn() and then setVariableName={mockedSetVariableName}


describe("AddHeroInput",()=>{

        it('should render input element with placeholder "add hero name here"', async() => {
            render(<MockListFooter />); 
            const inputElement = screen.getByPlaceholderText(/add hero name here/i);  
            expect(inputElement).toBeInTheDocument();
        });
        
        it('should be able to type in the input', async() => {
            render(<MockListFooter />); 
            const inputElement = screen.getByPlaceholderText(/add hero name here/i); 
            fireEvent.change(inputElement, {target:{value:"Thor"}}) 
            expect(inputElement.value).toBe("Thor");
        });

        it('should have empty inputs when add button is clicked', async() => {
            render(<MockListFooter />); 
            const inputNameElement = screen.getByPlaceholderText(/add hero name here/i); 
            const inputAlterEgoElement = screen.getByPlaceholderText(/add hero alter ego here/i); 
            const buttonElement = screen.getByRole("button", {name:/Add Hero/i})

            // fireEvent.change(inputNameElement, {target:{value:"Thor"}}) 
            // fireEvent.change(inputAlterEgoElement, {target:{value:"Cenas"}}) 
            //fireEvent.click(buttonElement)
            userEvent.type(inputNameElement, "Thor") 
            userEvent.type(inputAlterEgoElement, "Cenas") 

            userEvent.click(buttonElement)

            expect(inputNameElement.value).toBe("");
            expect(inputAlterEgoElement.value).toBe("");
            await waitForElementToBeRemoved(()=>screen.getByText(/Please, wait while adding new hero/i))
            
        });
})