import { createContext } from 'react';

import cardsPrimary from '../components/cards/Primary.module.css';
import cardsSecondary from '../components/cards/Secondary.module.css';
import cardsSkill from '../components/cards/Skill.module.css';
import cardsTestimonial from '../components/cards/Testimonial.module.css';

import pages from '../components/pages/index.module.css';

import pagesContactAddress from '../components/pages/Contact/Address.module.css';
import pagesContactForm from '../components/pages/Contact/Form.module.css';
import pagesContactFormDialog from '../components/pages/Contact/FormDialog.module.css';
import pagesContactFormLoader from '../components/pages/Contact/FormLoader.module.css';
import pagesContactSocial from '../components/pages/Contact/Social.module.css';

import pagesHomeAbout from '../components/pages/Home/About.module.css';
import pagesHomeService from '../components/pages/Home/Service.module.css';
import pagesHomeTestimonial from '../components/pages/Home/Testimonial.module.css';

import pagesPortfolio from '../components/pages/Portfolio/index.module.css';

import pagesResumeEducation from '../components/pages/Resume/Education.module.css';
import pagesResumeSkills from '../components/pages/Resume/Skills.module.css';

import utilsHeading from '../components/utils/Heading.module.css';
import utilsTitle from '../components/utils/Title.module.css';

import cardsMiscellaneous from '../components/cards/Miscellaneous.module.css';
import cardsProjectPrimary from '../components/cards/ProjectPrimary.module.css';
import pagesError from '../components/pages/Error/index.module.css';
import pagesPortfolioDetails from '../components/pages/Portfolio/Details.module.css';
import pagesPortfolioMiscellaneous from '../components/pages/Portfolio/Miscellaneous.module.css';
import pagesPortfolioShare from '../components/pages/Portfolio/Share.module.css';

const styles = {
  utilsTitle,
  utilsHeading,
  cardsPrimary,
  cardsSecondary,
  cardsSkill,
  cardsTestimonial,
  pages,
  pagesContactAddress,
  pagesContactForm,
  pagesContactFormDialog,
  pagesContactFormLoader,
  pagesContactSocial,
  pagesHomeAbout,
  pagesHomeService,
  pagesHomeTestimonial,
  pagesPortfolio,
  pagesResumeEducation,
  pagesResumeSkills,
  cardsMiscellaneous,
  cardsProjectPrimary,
  pagesError,
  pagesPortfolioDetails,
  pagesPortfolioMiscellaneous,
  pagesPortfolioShare,
};

export const StylesContext = createContext(styles);

const StylesContextProvider = ({ children }) => {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
};

export default StylesContextProvider;
