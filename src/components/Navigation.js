import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import NavigationMenu from './NavigationMenu';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'treanslateX(-100%)' },
        enter: { opacity: 1, transform: 'treanslateX(0)' },
        leave: { opacity: 0, transform: 'treanslateX(-100%)' }
    });
    menuTransitions.map(({ item, key, props }) => console.log({ item, key, props }));
    return <nav >
        <FontAwesomeIcon className="text-xl" icon={faBars} onClick={() => setShowMenu(!showMenu)} />
        {
            maskTransitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props} className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)} />
            )
        }
        {
            menuTransitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props} className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" >
                    <NavigationMenu closeMenu={() => setShowMenu(false)} />
                </animated.div>
            )
        }
    </nav>
}

export default Navigation;