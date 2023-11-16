import Image from 'next/image';
import styles from './page.module.css';
import Andromeda from '../../public/andromeda.jpg'
import Sirius from '../../public/sirius.jpg'
import Betelgeuse from '../../public/betelgeuse.jpeg'
export default function Home() {
  
  return (
    <main className='main'>
      <div className="nav__dummy nav__dummy--right"></div>
      <div className="nav__dummy nav__dummy--top"></div>
      <div className="nav__dummy nav__dummy--left"></div>
      <div className="nav__dummy nav__dummy--bottom"></div>

      <section className='nav--left nav'>
        <figure className='menu'><i className="fa-solid fa-bars menu__icon"></i></figure>
      </section>
      <section className="nav--top nav">
        <h2 className='nav--top__title'>$0</h2>
        <h2 className='nav--top__title nav--top__title--right'>Login</h2>
      </section>
      <section className="nav--right nav">
        <a className='nav--right__item'><i className="fa-solid fa-envelope"></i></a>
        <a className='nav--right__item'><i className="fa-solid fa-phone"></i></a>
      </section>
      <section className="nav--bottom nav">
      <h2 className='nav--top__title nav--bottom__title'>Created by Kyrylo Ieremieiev</h2>
        <h2 className='nav--top__title nav--top__title--right nav--bottom__title'>Inspired By Starpeggio</h2>
      </section>

      <section className='shop'>
        <article className='welcome'>
          <div className='welcome__titleWrap'>
            <h1 className={'welcome__title'}>Stars</h1>
            <figure className='starHolder'><div className='four-pointed-star'></div></figure>
          </div>
          
          <p className='welcome__subtext'>We Sell Stars</p>
          
        </article>

        <section className='cat'>
          <article className="article top">
              <h3 className='article__title'>Andromeda</h3>
              <form action="" className='article__form'>
                <label className='article__price'>$19.000.0000.000</label>
                <p className="article__order">Order</p>
              </form>
          </article>
          <div className='imgCarrier'>
              <Image src={Andromeda} alt='image of Andromeda Galaxy' className='article__img'></Image>
          </div>

          <article className="article">
              <h3 className='article__title'>Sirius</h3>
              <form action="" className='article__form'>
                <label className='article__price'>$5.000.000.000</label>
                <p className="article__order">Order</p>
              </form>
          </article>
          <div className='imgCarrier'>
              <Image src={Sirius} alt='image of Sirius Star' className='article__img'></Image>
          </div>

          <article className="article">
              <h3 className='article__title'>Betelgeuse</h3>
              <form action="" className='article__form'>
                <label className='article__price'>$3.000.000.000</label>
                <p className="article__order">Order</p>
              </form>
          </article>
          <div className='imgCarrier'>
              <Image src={Betelgeuse} alt='image of Betelgeuse supernova' className='article__img'></Image>
          </div>
        </section>
      </section>
      
      
    </main>
  )
}
