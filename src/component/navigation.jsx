import { Link } from 'react-router-dom';

const links = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/public',
        label: 'Public'
    },
    {
        to: '/photo',
        label: 'Photo'
    },
    {
        to: '/contact',
        label: 'Contact'
    }
];

export const Navigation = () => (
    <nav>
        <ul>
            { links.map(link => (
                <li key={ link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
);