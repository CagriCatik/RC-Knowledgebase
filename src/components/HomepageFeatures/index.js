import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beginner-Friendly',
    //Svg: require('@site/static/img/undraw_beginner_friendly.svg').default, // Replace with an appropriate RC plane-related SVG
    description: (
      <>
        Designed for RC enthusiasts of all levels, from beginners to pros. Get started with building and flying your RC plane quickly.
      </>
    ),
  },
  {
    title: 'Comprehensive Guides',
    //Svg: require('@site/static/img/undraw_guides.svg').default, // Replace with an RC plane guide-related SVG
    description: (
      <>
        Learn step-by-step how to design, build, and maintain RC planes. Focus on enjoying the hobby, and let us handle the technical details.
      </>
    ),
  },
  {
    title: 'Powered by Passion',
    //Svg: require('@site/static/img/undraw_passion.svg').default, // Replace with an SVG related to passion or creativity
    description: (
      <>
        Built by RC enthusiasts for RC enthusiasts. Constantly updated with the latest tips, tricks, and resources.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
