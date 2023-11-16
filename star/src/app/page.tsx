import Image from 'next/image';
import styles from './page.module.css';
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
      </section>
      
      
    </main>
  )
}
