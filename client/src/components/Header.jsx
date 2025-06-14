import { Button, Navbar, TextInput, NavbarLink, NavbarCollapse, NavbarToggle } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className='border-b-2'>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sanya's</span>Blog
            </Link>
            <form>
                <TextInput 
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='blue' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline border border-gray-300' color='white' pill>
                    <FaMoon/>
                </Button>
                <Link to='/sign-in'>
                    <Button color='purple' outline>
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink as={Link} to="/" active={path === '/'}>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} to="/about" active={path === '/about'}>
                    About
                </NavbarLink>
                <NavbarLink as={Link} to="/projects" active={path === '/projects'}>
                    Projects
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}