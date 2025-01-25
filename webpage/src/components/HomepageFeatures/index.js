import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🚁 RC Plane Guides',
    description: (
      <>
        Master the skies with our comprehensive RC plane guides. From beginner setups to advanced aerobatics, we've got you covered. ✈️
      </>
    ),
  },
  {
    title: '🏎️ RC Car Tutorials',
    description: (
      <>
        Speed up your RC car knowledge! Learn about tuning, maintenance, and racing techniques to dominate the track. 🏁
      </>
    ),
  },
  {
    title: '🛠️ 3D Printing FAQ Blog',
    description: (
      <>
        Dive into the world of 3D printing for RC customization. Get tips, troubleshooting help, and design inspiration. 🖨️
      </>
    ),
  },
  {
    title: '🔧 Troubleshooting Guides',
    description: (
      <>
        Fix common RC issues with step-by-step solutions. From radio interference to motor calibration, we make it easy. 🛠️
      </>
    ),
  },
  {
    title: '🔍 Product Comparisons',
    description: (
      <>
        Compare RC controllers, batteries, and upgrade kits side-by-side. Make informed decisions with our expert analysis. ⚖️
      </>
    ),
  },
  {
    title: '🔌 Component Compatibility',
    description: (
      <>
        Find the perfect match for your RC parts. Detailed matrices for transmitters, receivers, ESCs, and batteries. 🔋
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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