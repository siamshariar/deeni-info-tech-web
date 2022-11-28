import ServiceCard from '../../cards/ServiceCard';
import styles from './Services.module.scss';

const HomeServices = () => {
  return (
    <div className={styles.wrapper}>
      {/* <ServiceCard
        imagePos="right"
        imageSrc="img/service/01.png"
        altText=""
        title="Autumn"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="/detail"
        grid={false}
      />
      <ServiceCard
        imagePos="left"
        imageSrc="img/service/02.png"
        altText=""
        title="Spring"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="/detail"
        grid={false}
      />
      <ServiceCard
        imagePos="right"
        imageSrc="img/service/03.png"
        altText=""
        title="Winter"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="/detail"
        grid={false}
      /> */}
      <ServiceCard
        imagePos="right"
        // imageSrc="img/service/04.png"
        // altText=""
        title="Dawah in non-muslim countries"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab suscipit cupiditate hic quaerat alias dolores quisquam in voluptatum temporibus minima repellat."
        link="/detail-grid-1"
        grid={true}
      />
    </div>
  );
};

export default HomeServices;
