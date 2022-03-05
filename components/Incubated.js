import Link from 'next/link';
import Image from 'next/image';

const organizations = [
  {
    name: 'Ataraxia',
    description: (
      <p className="mb-2 text-lg">
        Ataraxia is a non-profit organization dedicated to providing adequate
        digital resources to promote neurodiversity within our communities,
        while striving to create a tangible impact in the mental health of
        underserved populations.
      </p>
    ),
    image: 'ataraxia',
    link: 'https://ataraxiahealth.org/?utm_source=envisionnew.org'
  },
  {
    name: 'Crown Education Challenge',
    description: (
      <p className="mb-2 text-lg">
        The Crown Education Challenge was started in 2020 during the COVID-19
        pandemic. They were inspired to respond to the countless school closures
        worldwide that caused over 1.5 billion students to be out of school.
      </p>
    ),
    image: 'crowneducationchallenge',
    link: 'https://crowneducationchallenge.org?utm_source=envisionnew.org'
  },
  {
    name: 'Project Carbon',
    description: (
      <p className="mb-2 text-lg">
        Project Carbon uses computer science concepts and ideals to accurately
        visualize, research, and educate others on climate change related topics
        plaguing the world.
      </p>
    ),
    image: 'projectcarbon',
    link:
      'https://envisionnew.org/programs/project-carbon?utm_source=envisionnew.org'
  },
  {
    name: 'Project Lotus',
    description: (
      <p className="mb-2 text-lg">
        Project Lotus is a targeted at creating a national support group for
        teenagers with mental health issues, traumatic experiences, and
        substance abuse experiences, while continuously striving to educate the
        general public.
      </p>
    ),
    image: 'projectlotus',
    link:
      'https://envisionnew.org/programs/project-carbon?utm_source=envisionnew.org'
  }
];

export default function Incubated() {
  return (
    <section id="programs" className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="mb-20 text-center">
          <span className="px-3 py-2.5 mt-16 mb-3 rounded-10 badge badge-success-soft">
            Incubations
          </span>
          <h2 className="mb-4 text-3xl font-medium text-black md:text-5xl lg:text-5xl">
            Incubated Non-profits
          </h2>
          <p className="mx-auto text-base text-xl leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            We take grassroot non-profits and convert them into larger movements
            with national support – and it's all free. Get access to all our{' '}
            <Link href="/programs/inspire">
              <a className="font-medium text-black underline">resources</a>
            </Link>{' '}
            to turn your <span className="font-semibold">idea</span> into an{' '}
            <span className="font-semibold">difference</span> in our community.
            View a few of our incubated non-profits below!
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 mb-5 bg-black rounded-full"></div>
          </div>
          <div className="grid gap-8 lg:mx-auto lg:max-w-7xl lg:grid-cols-2">
            {organizations.map((org) => (
              <div className="duration-150 bg-white hover:shadow-3xl rounded-xl">
                <div className="relative w-full m-0">
                  <Image
                    src={`/images/${org.image}.png`}
                    width="2325"
                    height="1650"
                    alt={org.name}
                    layout="responsive"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-5">
                    <a
                      href={org.link}
                      className="text-2xl font-medium text-black underline md:no-underline outer-glow title-font"
                    >
                      {org.name}
                    </a>
                  </p>
                  {org.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
