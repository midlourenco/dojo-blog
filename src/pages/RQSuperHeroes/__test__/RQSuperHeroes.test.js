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

const addHero = async (heroes) =>{
    const inputNameElement = await screen.findByPlaceholderText(/add hero name here/i); 
    const inputAlterEgoElement = await screen.findByPlaceholderText(/add hero alter ego here/i); 
    const buttonElement =await screen.findByRole("button", {name:/Add hero/i})

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
        console.log("passei aqui")
        await waitForElementToBeRemoved(()=>screen.getByText(/Please, wait while adding new hero/i))
        //await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))
    });

}

describe("RQSuperHeroes",()=>{

    beforeEach(()=>{
        console.log("RUNNING BEFORE EACH TEST")
    })

    beforeAll(()=>{
        console.log("RUNNING ONCE BEFORE ALL TEST")
    })

    afterEach(()=>{
        console.log("RUNNING AFTER EACH TEST")
    })

    afterAll(()=>{
        console.log("RUNNING ONCE AFTER ALL TEST")
    })

  it('should render one new element', async() => {
//     render(<MockRQSuperHeroes />); 
//     // await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

//     const inputNameElement = await screen.findByPlaceholderText(/add hero name here/i); 
//     const inputAlterEgoElement =await screen.findByPlaceholderText(/add hero alter ego here/i); 
//     const buttonElement = await screen.findByRole("button", {name:/Add hero/i})

//     fireEvent.change(inputNameElement, {target:{value:"fantastic hero from test"}})
//     fireEvent.change(inputAlterEgoElement, {target:{value:"Ego fantastic"}})
//     fireEvent.click(buttonElement)

//     // await waitForElementToBeRemoved(()=>screen.getByText(/Please, wait while adding new hero/i))
//     // await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

//     // addHero([{name:"fantastic hero from test", ego:"ego hero from test"}])
    
  
 
//     const divElements = screen.queryAllByText(/fantastic hero from test/i)

//     expect(divElements.length).toBeGreaterThan(0);
   });

//   it('should render multiple new elements', async() => {
//     render(<MockRQSuperHeroes />); 
//     // await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))

   
//     addHero([
//         {name: "hero1", ego: "ego1"},
//         {name: "hero2", ego: "ego2"},
//         {name: "hero3", ego: "ego3"},
//     ])
//    // await waitForElementToBeRemoved(()=>screen.getByText("Loading..."))


//     const divElements = await screen.findAllByTestId(/hero-cointainer/i)

//     expect(divElements.length).toBe(15);
//   });



})