import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import RQSuperHeroes from "../RQSuperHeroes"
import {BrowserRouter as Router } from "react-router-dom" 
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'




const queryClient = new QueryClient()

const MockRQSuperHeroes = ()=>{
    return(
    <QueryClientProvider client={queryClient}>
        <Router>
            <RQSuperHeroes />
        </Router>
    </QueryClientProvider>
    )
}

const addHero = (heroes) =>{
    const inputNameElement = screen.getByPlaceholderText(/add hero name here/i); 
    const inputAlterEgoElement = screen.getByPlaceholderText(/add hero alter ego here/i); 
    const buttonElement = screen.getByRole("button", {name:/Add hero/i})

    // const loadingElement = screen.getByText(/loading.../i); 

    // if(expect(loadingElement).toBeInTheDocument()){
    //     await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))
    // };
// console.log(heroes)
    heroes.forEach(async(hero) => {
        // console.log(hero)
        fireEvent.change(inputNameElement, {target:{value: hero.name}})
        fireEvent.change(inputAlterEgoElement, {target:{value: hero.ego}})
        fireEvent.click(buttonElement)
        await waitForElementToBeRemoved(()=>screen.getByText(/Please, wait while adding new hero/i))
        await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

    });

}

describe("RQSuperHeroes",()=>{
  it('should render same text passed into title prop', async() => {
    render(<MockRQSuperHeroes />); 
    await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

    const inputNameElement = screen.getByPlaceholderText(/add hero name here/i); 
    const inputAlterEgoElement = screen.getByPlaceholderText(/add hero alter ego here/i); 
    const buttonElement = screen.getByRole("button", {name:/Add hero/i})

    fireEvent.change(inputNameElement, {target:{value:"fantastic hero from test"}})
    fireEvent.change(inputAlterEgoElement, {target:{value:"Ego fantastic"}})
    fireEvent.click(buttonElement)
    await waitForElementToBeRemoved(()=>screen.getByText(/Please, wait while adding new hero/i))
    await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

    // addHero([{name:"fantastic hero from test", ego:"ego hero from test"}])
    
  
 
    const divElements = screen.queryAllByText(/fantastic hero from test/i)

    expect(divElements.length).toBeGreaterThan(0);
  });

//   it('should render multiple elements', async() => {
//     render(<MockRQSuperHeroes />); 
//     // await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

   
//     addHero([
//         {name: "hero1", ego: "ego1"},
//         {name: "hero2", ego: "ego2"},
//         {name: "hero3", ego: "ego3"},
//     ])
//     await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))


//     const divElements = screen.getAllByTestId("hero-cointainer")

//     expect(divElements.length).toBe(11);
//   });



})