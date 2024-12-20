import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, User, Info, MessageSquare, Globe } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', icon: BookOpen, label: 'Essays' },
    // { to: '/profile', icon: User, label: 'Profile' },
    { to: '/about', icon: Info, label: 'About' },
    // { to: '/feedback', icon: MessageSquare, label: 'Feedback' },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="md:hidden">
                  <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </label>
                </div>
                <Globe className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Essay Library</span>
              </div>
              <div className="hidden md:flex space-x-4">
                {navItems.map(({ to, icon: Icon, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};