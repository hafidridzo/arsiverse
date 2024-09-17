import { ButtonTema } from '../elemen/button-tema'
import { MenuNavbar } from '../elemen/menu-navbar'
import Logo from '../elemen/logo'
import { BellRing, Grip, Inbox } from 'lucide-react'
import { Button } from '../../ui/button'
import { MenuUser } from '../elemen/menu-user'
import { CariNavbar } from '../elemen/pencarian'

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-background dark:border-b dark:border-border px-6 py-2 h-12 bg-background gap-4 text-foreground">
      <div className='grid grid-cols-2 w-full'>
        <div className="grid grid-cols-subgrid">
        <div className='flex  items-center justify-start gap-3'>
          <Logo />
          <MenuNavbar />
        </div>
        </div>
        <div className='grid grid-cols-subgrid'>
          <div className='flex items-center justify-end gap-3'>
          <CariNavbar />
          <p className='text-muted-foreground'>|</p>
            <ButtonTema />
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <BellRing className='h-6 w-6' />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Inbox />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Grip />
            </Button>
            <MenuUser />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
