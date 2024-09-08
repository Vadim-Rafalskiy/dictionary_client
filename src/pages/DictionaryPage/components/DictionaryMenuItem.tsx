import { Link } from 'react-router-dom';

interface DictionaryMenuItemProps {
    path: string;
    name: string;
    count?: number;
}

const DictionaryMenuItem: React.FC<DictionaryMenuItemProps> = ({
    path,
    name,
    count,
}) => {
    return (
        <Link
            className="text-gray-300 font-bold tracking-wider text-xl flex justify-between w-full p-3  border-2 rounded-lg border-solid border-gray-800 bg-gray-600"
            to={path}
        >
            <div>{name}</div>
            <div>{count}</div>
        </Link>
    );
};

export default DictionaryMenuItem;
