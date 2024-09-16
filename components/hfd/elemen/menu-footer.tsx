import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
    title:string;
    links:Array<string>;
  }
  
  const FooterColumn = ({title,links}:ColumnProps) => (
    <div className='flex-1 flex flex-col gap-3 text-sm min-w-max'>
      <h4 className='font-bold'>{title}</h4>
      <ul className='flex flex-col gap-2 font-normal'>
  {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
      </ul>
    </div>
  )

export function MenuFooter(){
    return(
        <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
              src="/ArsiVerse.svg"
              width={0}
              height={0}
              alt='ArsiVerse'/>
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Arsiverse adalah platform #1 pusat arsitek mencari inspirasi, saling terhubung dan upgrade skill.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
        </div>

      </div>
    )
}