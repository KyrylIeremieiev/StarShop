import Image from 'next/image';
import styles from './page.module.css';
import Andromeda from '../../public/andromeda.jpg'
export default function Home() {
  
  return (
    <main className='main'>
      <div className="nav__dummy nav__dummy--right"></div>
      <div className="nav__dummy nav__dummy--top"></div>
      <div className="nav__dummy nav__dummy--left"></div>
      <div className="nav__dummy nav__dummy--bottom"></div>

      <section className='nav--left nav'>
        
      </section>
      <section className="nav--top nav">
        <h2 className='nav--top__title'>Created by Kyrylo Ieremieiev</h2>
        <h2 className='nav--top__title nav--top__title--right'>Inspired By Starpeggio</h2>
      </section>
      <section className="nav--right nav"></section>
      <section className="nav--bottom nav"></section>

      <section className='shop'>
        <article className='welcome'>
          <h1 className={'welcome__title'}>Stars</h1>
          <figure className='starHolder'><div className='four-pointed-star'></div></figure>
        </article>

        <section className='cat'>
          <article className="article">
            <div>
              <h3 className='article__title'>Andromeda</h3>
              <em className='article__price'>$19.000.0000.000</em>
            </div>
            <div className='imgCarrier'>
              <Image src={Andromeda} alt='image of Andromeda Galaxy' className='article__img'></Image>
            </div>
          </article>

          <article className="article">
            <div>
              <h3 className='article__title'>Andromeda</h3>
            <p>The Andromeda Galaxy is a barred spiral galaxy and is the nearest major galaxy to the Milky Way. It was originally named the Andromeda Nebula and is cataloged as Messier 31, M31, and NGC 224. Andromeda has a diameter of about 46.56 kiloparsecs (152,000 light-years)[8] and is approximately 765 kpc (2.5 million light-years) from Earth.</p>
            
            </div>
            <div className='imgCarrier'>
              <Image src={Andromeda} alt='image of Andromeda Galaxy' className='article__img'></Image>
            </div>
          </article>
        </section>
      </section>
      
      
    </main>
  )
}
