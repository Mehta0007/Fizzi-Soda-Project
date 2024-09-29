import { FizziLogo } from './FizziLogo';


export default function Header() {
    return (
        <header className="flex justify-center py-4 -mb-20">
            <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
        </header>
    );
}