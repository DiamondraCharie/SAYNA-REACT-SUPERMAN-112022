import React from 'react';
import '../styles/Home.css';
import facebook from '../assets/icones/facebook.png';
import instagram from '../assets/icones/instagram.png';
import twitter from '../assets/icones/twitter.png';
import logoDC from '../assets/logos/logoDC.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import Polygon from '../assets/icones/Polygon.png';
import Polygon1 from '../assets/icones/Polygon1.png';
import img12 from '../assets/images/img12.png';
import img15 from '../assets/images/img15.png';
import iconguillemets1 from '../assets/icones/iconguillemets1.png';
import iconguillemets2 from '../assets/icones/iconguillemets2.png';


function Home() {
  return (
    
       <>
       <section className="superman-image ">
               <div className='scroll'>
                  <img className='s-med' src={facebook} alt='fb'/>
                  <img className='s-med' src={instagram} alt='insta'/>
                  <img className='s-med' src={twitter} alt='tw'/>
               </div>  
               <div className='head-content'> 
                  <img src={logoDC} alt=''/>
                  <div className='title'>
                    <h1>SUPERMAN </h1>
                    <h2>L’HOMME D’ACIER </h2>
                  </div>
               </div>
        </section>
         <div className='container'>
            <div className='superman-cinema'>
               <div className='s-content'>
                 <h2>SUPERMAN AU CINÉMA</h2>
                 <p>Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.
                    Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde.
                 </p>
              </div>
              <div className='s-personnage'>
                 <img src={img2} alt=''style={{ marginRight: '105px' }}/>
                 <img className='sup' src={img3} alt=''style={{ marginRight: '105px' }}/>
                 <img className='sup' src={img4} alt=''/>
              </div>
            </div>
           <div className='superman-nemesis'>
              <div className='s-content'>
                 <h2>NÉMÉSIS</h2>
                 <p>Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.
                 </p>
              </div>
              <div className='s-personnage'>
                <img src={img5} alt=''style={{ marginRight: '105px' }}/>
                <img src={img6} alt=''style={{ marginRight: '105px' }}/>
                <img src={img7} alt=''/>
              </div>
           </div>
           <div className='superman-allies'>
              <div className='s-content'>
                <h2>ALLIÉS</h2>
                <p>Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur  le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”.
                </p>
             </div>
             <div className='s-personnage'>
               <img src={img8} alt=''style={{ marginRight: '105px' }}/>
               <img src={img9} alt=''style={{ marginRight: '105px' }}/>
               <img src={img10} alt=''/>
             </div>
           </div>
         </div>
         <div className='container'>
                <div className='vs'>   
                  <div className='s-content'>
                    <h2>BATMAN V SUPERMAN</h2>
                    <p>Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte. </p>
                   <p>De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.</p>
                 </div>
               </div>
          </div> 
  
        <div className='multimedia'> 
               <div className='slide'>
                 <div className='container'> 
                   <div className='s-content'>
                     <h2 className="title">MULTIMÉDIA</h2>
                   </div>
                   <button className="left">
                       <img src={Polygon1} alt="Icon flèche 1"/>
                   </button>
                   <button className="right">
                       <img src={Polygon} alt="Icon flèche 2"/>
                   </button>
                   <div className="slider-multimedia">
                       <div className="slider-image">
                          <img src={img12} alt="sup of steel"/>
                       </div>
                      <div className="slider-content">
                         <h2>ACTION, Adventure</h2>
                         <h3>Superman Man of Steel</h3>
                         <p>IMDB : <span className="yellow">7.1</span></p>
                         <p>Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une armée de survivants qui menacent détruire la planète.
                         </p>
                       </div>
                 </div>
                 <div className='container'>      
                    <div className="image-bande-annonce">
                       <img src={img15} alt="sup b"/>
                    </div>
                 </div>  
              </div>  
          </div>  
        </div> 

        <section className="contact">
          <div className="form">
              <h2>PRENONS CONTACT</h2>
              <form action="form" method="get">
                <label className="titre" for="email">ADRESSE EMAIL</label>
                <input type="email" id="email" name="email" placeholder="Adresse email"/>
                <label className="titre" for="newsletter">NEWSLETTER</label>
                <label className="text" for="case">En cochant cette case vous acceptez de recevoir l’actualité concernant les aventures de
                  Batman :</label>
                  <input type="checkbox"/> 
                  <div className="frequence">
                    <span className="text">Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter</span>
                    <span className="icon">
                      <img src={Polygon1} alt="Flèche"/>
                    </span>
                  </div>
                  <div className="text">
                    <p className="news">Souhaitez-vous recevoir des news</p>
                  </div>
                  <div className="btn-group">
                    <input className="bouton" type="radio" id="film"/>
                    <label for="film">Des Films</label>
                    <input className="bouton" type="radio" id="comics"/>
                    <label for="comics">Des Comics </label>
                    <input className="bouton" type="radio" id="tout"/>
                    <label for="tout">De tout</label>
                  </div>
                  <p className="titre">MESSAGE</p>
                  <textarea name="commentaire" id="commentaire" cols="30" placeholder="Laissez un commentaire pour la communauté"></textarea>
                  <input className="my-bouton" type="submit" value="CONFIRMER"/>
              </form>
            </div>
        </section>
        
        <section className='citations'>
          <div className="container">
               <div className="guillemet-open">
                 <img src={iconguillemets1} alt="logo"/>
               </div>
               <div className="citation-carte">
                 <div> 
                   <p className="citation-text"> - Que représente le S ? </p>
                   <p className="citation-text">- Ce n’est pas un S. Sur ma planète cela signifie espoir.</p>
                 </div>
                 <div className="citation-auteur">            
                   <p>Man Of Steel, Lois Lane et Clark Kent.</p>
                 </div>
               </div>
               <div className="guillemet-close">
                   <img src={iconguillemets2} alt="logo"/>
               </div>
          </div>
        </section>
      <div className="clearfix"></div>

      </>
      

  )
}

export default Home