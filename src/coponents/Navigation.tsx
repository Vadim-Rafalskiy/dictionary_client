import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [current, setCurrent] = useState(() => {
        return sessionStorage.getItem('currentMenuItem') || 'home';
    });

    const updateActiveMenuItemClass = (currentName: string) => {
        const elements = document.querySelectorAll('#menu a');

        elements.forEach((el) => {
            const anchorElement = el as HTMLAnchorElement;
            anchorElement.dataset.name === currentName
                ? anchorElement.classList.add('text-pink-400')
                : anchorElement.classList.remove('text-pink-400');
        });
    };

    useEffect(() => {
        updateActiveMenuItemClass(current);
    }, [current]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const currentElement = e.target as HTMLAnchorElement;

        const newCurrent = currentElement.dataset.name as string;

        setCurrent(newCurrent);
        sessionStorage.setItem('currentMenuItem', newCurrent);

        updateActiveMenuItemClass(newCurrent);
    };

    return (
        <div className="max-w-7xl mx-auto p-5">
            <nav
                id="menu"
                onClick={handleClick}
                className="flex gap-7 text-2xl  text-gray-300"
            >
                <Link data-name="home" to="/" className="text-pink-400">
                    Домашня
                </Link>
                <Link data-name="dictionary" to="/dictionary">
                    Словник
                </Link>
            </nav>
        </div>
    );
};

export default Navigation;
