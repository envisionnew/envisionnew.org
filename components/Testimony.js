import { Parallax } from 'react-parallax';

export default function Testimony() {
  return (
    <Parallax
      strength={500}
      bgImage="/images/class.jpg"
      contentClassName="py-xl max-w-full w-auto"
      bgImageAlt="A Project enVision class at a title one school."
      bgStyle={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      bgImageSize="4032x3024"
    >
      <div className="w-full h-full m-auto bg-black bg-opacity-50">
        <div style={{ height: '50rem' }}>
          <div className="insideStyles">
            <h2 className="mb-3 text-3xl text-white font-lg title-font">
              "Project enVision established programs at our school that will
              bring STEM closer to thousands of students. Their efforts will
              bring invaluable opportunities to our students to see that they
              belong in this new high tech society for years to come."
            </h2>
            <p className="mb-3 text-lg text-gray-300 font-lg title-font">
              - Kim Sheffield, Principal of Stonegate Elementary School (Title I
              School)
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
