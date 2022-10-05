import { screen, render, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills",()=>{
    const skills = ["HTML","CSS","JS"];

    test("renders correctly", ()=>{
        render(<Skills skills={skills}/>);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });
    
    test("renders a list of skills", ()=>{
        render(<Skills skills={skills}/>);
        const listElements = screen.getAllByRole('listitem');
        expect(listElements).toHaveLength(skills.length);
    });

    test("renders login button",()=>{
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole("button",{
            name:"Login"
        });
        expect(loginButton).toBeInTheDocument(); 
    });

    test("renders start learning button",()=>{
        render(<Skills skills={skills}/>);
        const loginButton = screen.queryByRole("button",{
            name:"Start Learning"
        });
        expect(loginButton).not.toBeInTheDocument(); 
    })

    test("Start learning button displayed eventually", async()=>{
        const view = render(<Skills skills={skills}/>);
        logRoles(view.container);
        const loginButton = await screen.findByRole("button",{
            name:"Start Learning",
        },{
            timeout:2000,
        });
        // screen.debug()
        expect(loginButton).toBeInTheDocument(); 
    })
})