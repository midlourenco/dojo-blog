import { render, screen } from '@testing-library/react';
import Header from "../Header"


//unit test to component Header

//****GETBY********* */


describe("Header",()=>{
  it('should render same text passed into title prop', async() => {
    render(<Header title="My Header"/>); // which component we want to test
    const headingElement = screen.getByText(/my header/i); // which element in that element we want to test
    //screen procura nos elementos do DOM algum elemento que tem no texto dentro "learn react"

    expect(headingElement).toBeInTheDocument();//o que esperamos que aconteça com esse elemento
  });
})

// it('should exist only one heading', async() => {
//     render(<Header title="My Header"/>); 
//     const headingElement = screen.getByRole("heading");  //se houver mais do que heading este teste vai falhar
//     expect(headingElement).toBeInTheDocument();
//   });


// it('should exist one heading which render same text passed into title prop', async () => {
//     render(<Header title="My Header"/>); 
//     const headingElement = screen.getByRole("heading", {name:"My Header"}); 
//     expect(headingElement).toBeInTheDocument();
//   });

//   it('should exist one heading which testId match with "header-1"', async () => {
//     render(<Header title="My Header"/>);  
//     const headingElement = screen.getByTestId("header-1"); 
//     expect(headingElement).toBeInTheDocument(); 
//   });

//   it('should render same text passed into title prop', async() => {
//     render(<Header title="My Header"/>); 
//     const headingElements =  screen.getAllByRole("heading"); 
//     expect(headingElements.length).toBe(2);
//   }); 

// //****FINDBY********* */
// //assincrono tem de ser com findby
//   it('should render same text passed into title prop', async() => {
//     render(<Header title="My Header"/>); 
//     const headingElement = await screen.findByText(/my header/i); 
//     expect(headingElement).toBeInTheDocument();
//   });
  
//   //QueryBy

// //   it('should render same text passed into title prop', async() => {
// //     render(<Header title="My Header"/>); 
// //     const headingElement =  screen.getByText(/dogs /i);  
// //     expect(headingElement).not.toBeInTheDocument(); //falha porque nem chega a esta linha. falha pq nao encontra o nenhum elemento
// //   }); 

//   it('should render same text passed into title prop', async() => {
//     render(<Header title="My Header"/>); 
//     const headingElement =  screen.queryByText(/dogs /i); 
//     expect(headingElement).not.toBeInTheDocument();
//   }); 

