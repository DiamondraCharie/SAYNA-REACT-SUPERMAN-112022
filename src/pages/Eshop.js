import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroShop from '../components/HeroShop';

const Eshop = () => {

  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <>
      <HeroShop/>
      <section className='container pt-5'>
        <div className='float-end'>
          <Link to='/cart'>
            <i class="fa-solid fa-2x fa-cart-shopping"></i>
          </Link>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h1>FILTRES</h1>
            <div>
              <input type="text" onChange={(e) => setSearch(e.target.value) } class="form-control" id="exampleFormControlInput1" placeholder="search ...."/>
            </div>
          </div>
          <div className='col-md-9'>

          </div>
        </div>
      </div>

    </>
  )
}

export default Eshop