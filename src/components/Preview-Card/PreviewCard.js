import React from 'react';
import Logo from '../../images/Logo-Gryffincode.png';
import '../../stylesheets/_App.scss';

// class PreviewCard extends React.Component {
//   render() {
//     return (
//       <section className="section__card preview__section">
//         <div className="preview__container">
//           <button className="button__reset js-reset" type="submit">
//             <i className="far fa-trash-alt"></i>Reset
//           </button>
//           <article className="preview__card">
//             <div className="title">
//               <h2 className="title__name js-text-name">Nombre Apellido</h2>
//               <h3 className="title__position js-text-job">
//                 Front-end developer
//               </h3>
//             </div>
//             <div className="profile__image js__profile-image">
//               <img src={Logo}></img>
//             </div>
//             <div>
//               <ul className="social__links">
//                 <li>
//                   <a
//                     className="social__button phone__icon js-number"
//                     href="tel: 999999999"
//                   >
//                     <i className="fas fa-mobile-alt"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="social__button buttonMail js-mail"
//                     href="mailto: adalab@adalab.com"
//                   >
//                     <i className="far fa-envelope"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="social__button linkedin js-linkedin"
//                     href="https://www.linkedin.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="social__button github js-github"
//                     href="https://github.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fab fa-github-alt"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </article>
//         </div>
//       </section>
//     );
//   }
// }

const PreviewCard = (props) => {
  return (
    <div>
      <section className="section__card preview__section">
        <div className="preview__container">
          <button className="button__reset js-reset" type="submit">
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <article className="preview__card">
            <div className="title">
              <h2 className="title__name js-text-name">
                {props.objectInfo.name || 'Nombre Apellidos'}
              </h2>
              <h3 className="title__position js-text-job">
                {props.objectInfo.job || 'Front-End Developer'}
              </h3>
            </div>
            <div className="profile__image js__profile-image">
              <img src={Logo}></img>
            </div>
            <div>
              <ul className="social__links">
                <li>
                  <a
                    className="social__button phone__icon js-number"
                    href={`tel:${props.objectInfo.phone}`}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social__button buttonMail js-mail"
                    href={`mailto:${props.objectInfo.email}`}
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social__button linkedin js-linkedin"
                    href={`https://www.linkedin.com/${props.objectInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social__button github js-github"
                    href={`https://www.github.com/${props.objectInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PreviewCard;
