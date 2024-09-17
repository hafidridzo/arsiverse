import { ButtonTema } from '../elemen/button-tema'
import { MenuNavbar } from '../elemen/menu-navbar'
import Logo from '../elemen/logo'
import { BellRing, Grip, Inbox } from 'lucide-react'
import { Button } from '../../ui/button'
import { MenuUser } from '../elemen/menu-user'
import { CariNavbar } from '../elemen/pencarian'
import { ButtonUpload } from '../elemen/button-upload'
import { ButtonApps } from '../elemen/button-apps'
import { ButtonNotif } from '../elemen/button-notif'

const Navbar = () => {
  return (
    <>
      <header className="z-50 top-0 flex sticky w-full items-center border-b border-background dark:border-b dark:border-border px-6 py-2 h-12 gap-4 text-foreground  shadow-gray-100 shadow-xl dark:shadow-none bg-background">
        <div className='flex w-full justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <Logo />
              <MenuNavbar />
            </div>
          </div>
          <div className='flex'>
            <div className='flex items-center justify-end gap-2'>
              <ButtonUpload />
              <CariNavbar />
              <p className='text-muted-foreground'>|</p>
              <ButtonNotif />
              <Button variant="icon2" size="icon" className="h-9 w-9">
                <Inbox />
              </Button>
              <ButtonTema />
              <ButtonApps />
              <MenuUser />
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
