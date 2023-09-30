import Link from "./Link";

const Navbar = () => {

    const manus = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", age: 28 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer", age: 25 },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", age: 32 },
        { id: 4, name: "Alice Brown", email: "alice@example.com", role: "QA Engineer", age: 24 },
        { id: 5, name: "Ella Davis", email: "ella@example.com", role: "Product Manager", age: 30 }
    ];
    return (

        <nav >
            <ul className="flex">
                {
                   manus.map(manu => <Link key={manu.id} manu={manu}></Link>) 
                }
                
            </ul>

        </nav>


    );
};

export default Navbar;