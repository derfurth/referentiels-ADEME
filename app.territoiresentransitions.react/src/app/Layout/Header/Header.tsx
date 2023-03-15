import {useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {HeaderProps, HeaderPropsWithModalState} from './types';
import {MenuPrincipal} from './MenuPrincipal';
import {AccesRapide} from './AccesRapide';
import {MaintenanceNotice} from './MaintenanceNotice';
import ademeSrc from 'app/static/img/ademe.jpg';

/**
 * Affiche l'en-tête
 */
export const Header = (props: HeaderProps) => {
  const {maintenance} = props;
  // état ouverture menu mobile
  const [modalOpened, setModalOpened] = useState(false);
  // id du menu ouvert
  const [openedId, setOpenedId] = useState<string | null>(null);

  const propsWithState = {
    ...props,
    modalOpened,
    setModalOpened,
    openedId,
    setOpenedId,
  };

  return (
    <>
      <header role="banner" className="fr-header">
        <Body {...propsWithState} />
        <Menu {...propsWithState} />
      </header>
      <MaintenanceNotice maintenance={maintenance} />
    </>
  );
};

/** Affiche les blocs "marque", "service" et les liens "accès rapides". Sur
 *  mobile, Le bloc "accès rapides" est masqué (mais est afiché par la modale
 *  incluse dans Menu). */
const Body = (props: HeaderPropsWithModalState) => {
  return (
    <div className="fr-header__body">
      <div className="fr-container">
        <div className="fr-header__body-row">
          <div className="fr-header__brand fr-enlarge-link">
            <Brand {...props} />
            <div className="fr-header__service">
              <Link to="/" title="Accueil - Territoires en Transitions">
                <p className="fr-header__service-title">
                  Territoires en Transitions
                </p>
                <p className="fr-header__service-tagline">
                  Accompagner la transition écologique des collectivités
                </p>
              </Link>
            </div>
          </div>
          <div className="fr-header__tools">
            <div className="fr-header__tools-links">
              <AccesRapide {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Affiche les liens de la navigation principale. Les liens sont présentés dans
 * une modale sur mobile, accompagnés des liens "accès rapides". */
const Menu = (props: HeaderPropsWithModalState) => {
  const {modalOpened, setModalOpened} = props;

  return (
    <div
      id="modal-header__menu"
      className={classNames('fr-header__menu fr-modal', {
        'fr-modal--opened': modalOpened,
      })}
      role={modalOpened ? 'dialog' : undefined}
    >
      <div className="fr-container">
        <button
          aria-controls="modal-header__menu"
          className="fr-btn fr-btn--close"
          onClick={() => setModalOpened(false)}
        >
          Fermer
        </button>
        <MenuPrincipal {...props} />
        <div className="fr-header__menu-links">
          <AccesRapide {...props} />
        </div>
      </div>
    </div>
  );
};

/** Affiche le bloc "marque" */
const Brand = (props: HeaderPropsWithModalState) => {
  const {modalOpened, setModalOpened} = props;

  return (
    <div className="fr-header__brand-top">
      <div className="fr-header__logo">
        <p className="fr-logo">
          République
          <br />
          Française
        </p>
      </div>
      <div className="fr-header__operator">
        <div className="fr-grid-row">
          <img src={ademeSrc} alt="ADEME" width="70" height="80" />
        </div>
      </div>
      <div className="fr-header__navbar">
        <button
          data-fr-opened={modalOpened}
          aria-controls="modal-header__menu"
          aria-haspopup="menu"
          title="Menu"
          className="fr-btn--menu fr-btn"
          onClick={() => setModalOpened(!modalOpened)}
        >
          Menu
        </button>
      </div>
    </div>
  );
};
