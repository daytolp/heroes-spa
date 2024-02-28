import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers/getHeroeById';
import { useMemo } from 'react';


export const HeroPage = () => {
  //use
  const { id, ...resto } = useParams();
  const navigate = useNavigate();

  //helpers
  console.log("id: " + id)
  console.log( "resto:",resto)
  // const hero = getHeroeById(id);
  //con el useMemo eviatare que se mande a ejecutar esta funcion cada vez que se renderice este componente o el componente padre, solo se va a llamar de nuevo si el id cambia 
  const hero = useMemo( () => getHeroeById( id ), [ id ]); 

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !hero ) {
    return <Navigate to="/marvel" />
  }  

    return (
        <div className="row mt-5">
        <div className="col-4">
          <img 
            src={ `/assets/heroes/${ id }.jpg` } 
            alt={ hero.superhero }
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
            <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
          </ul>

          <h5 className="mt-3"> Characters </h5>
          <p>{ hero.characters }</p>

          <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Regresar
          </button>
        </div>
      </div>
    )
}