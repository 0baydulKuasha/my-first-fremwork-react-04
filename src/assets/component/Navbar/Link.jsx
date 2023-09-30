import { data } from "autoprefixer";

const Link = ({manu}) => {
    return (
        <div>
            <li className="ml-6 py-3 px-10   border-4 rounded-xl">
                <a className="text-3xl font-semibold " href={manu.name}> {manu.name} </a>
            </li> 
        </div>
    );
};

export default Link;