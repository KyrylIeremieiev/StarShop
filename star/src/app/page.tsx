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
        Star's The Limit
      </section>
      <section className="nav--right nav"></section>
      <section className="nav--bottom nav"></section>
      
      <section className='shop'>
        <article className='welcome'>
          <h1 className={'welcome__title'}>Stars</h1>
          
        </article>
      </section>
      
      
    </main>
  )
}
