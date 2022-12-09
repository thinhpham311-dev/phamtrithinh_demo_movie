import React, { useRef, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'All Movies',
        path: '/movie'
    }
];

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);



    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <i className='bx bx-movie-play' style={{fontSize: '4rem', marginRight: '15px'}}></i>
                    <Link to="/">PTTMovies</Link>
                </div>
                <div className='header__toggle'>
                    <button type='button' onClick={() => setToggle(!toggle)}><i className={!toggle ? 'bx bx-menu' : 'bx bx-x'}></i></button>
                </div>
                <ul className={toggle ? "header__nav show": "header__nav"}>
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
