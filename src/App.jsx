import {
  MainTitle,
  PrescriptionFigure,
  PrescriptionTable,
  RelatedLinks,
  Header,
  Navbar,
  Trial,
  Positives,
  Footer,
} from "./components";
import "./index.css";

function App() {
  return (
    <main>
      <Header />
      <div className="hidden md:inline">
        <Navbar />
        <Trial />
        <Positives />
      </div>
      <div className=" max-container gap-4 flex flex-col py-8 xl:px-0 px-4 md:mt-4 mt-0 flex-1">
        <MainTitle />
        <div>
          <h2>Do I need a prescription for contact lenses in the UK?</h2>
          <div className="flex flex-col gap-6">
            <p>
              When it comes to correcting your eyesight, the answer is ‘yes’,
              you do need a prescription for contact lenses in the UK like you
              do for eyeglasses, as well as regular visits to your optometrist
              to check up on your eye health. However, even though you
              technically don&apos;t need a prescription to buy coloured contact
              lenses, our optical advisor recommends that an eye test will help
              you to choose the most suitable ones.
            </p>
            <p>
              Ordering contact lenses from us is super-easy, as we don&apos;t
              need to verify your physical prescription. Having a valid
              prescription is obviously essential, but we trust you to take your
              eye health into your own hands. If you would like us to verify it,
              we&apos;re happy to do that too.
            </p>
          </div>
        </div>
        <div>
          <h2>Reading your contact lens prescription</h2>
          <div className="flex flex-col gap-4">
            <p>
              For new contact lens wearers, this video will be especially handy
              in helping you to learn how to read your prescription correctly.
            </p>
            <iframe
              className="mb-4"
              // width="full"
              height="400"
              src="https://www.youtube.com/embed/INqJ63lczo8?si=Hv9srRHqhSTZ6BpN"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2>How do I read my prescription?</h2>
          <div className="flex flex-col gap-8">
            <p>
              You can find your prescription on the piece of paper given to you
              by your optician during a check-up, on the end/side of your
              contact lens box or on the blister packs that contain your contact
              lenses.
            </p>
            <p>
              A written prescription usually includes the following
              specifications: base curve, diameter, power (or sphere), and then
              additional figures for Cylinder and Axis if you have astigmatism,
              and Addition and Dominant figures for presbyopia correction. The
              prescription for your left and right eye will be listed separately
              as they may vary.
            </p>
            <p className=" font-semibold">Example prescription:</p>
            <PrescriptionTable />
            <p>
              Below is an example of the prescription listed on the side of the
              box for 1-Day Acuvue Moist for Astigmatism.
            </p>
            <p className=" text-red-500">
              Please be aware that a contact lens prescription is different from
              a glasses prescription, so you cannot use one for the other.
            </p>
            <PrescriptionFigure />
            <div>
              <h3>Prescription Figures for Astigmatism</h3>
              <p>
                The below figures are only displayed on contact lens
                prescriptions where there is a need for astigmatism correction,
                and you require toric lenses.
              </p>
            </div>
            <p>
              <span className=" font-semibold">Cylinder (CYL):</span> The
              cylinder will always be a minus number that increases in measures
              of 0.25. Much like the power/sphere figure that is shown on all
              standard prescriptions, the cylinder for toric lenses denotes the
              extra visual requirements needed for astigmatism and how severe
              the astigmatism is.
            </p>
            <p>
              <span className=" font-semibold">Axis (AX):</span> Astigmatism is
              caused by the irregular curvature of the eye; the axis is a figure
              which determines the angle of the correction needed in order to
              see clearly. The Axis is always a number between 0 and 180
              degrees.
            </p>
            <div>
              <h3>Prescription Figures for Presbyopia</h3>
              <p>
                The below figures are only displayed on contact lens
                prescriptions where there is a need for presbyopia/multifocal
                correction.
              </p>
            </div>
            <p>
              <span className=" font-semibold">Addition (ADD):</span> If you
              suffer from presbyopia it affects your near vision, the Addition
              figure determines what level of correction you need to be able to
              see clearly at a close distance. This is a number between 0.50 and
              3.00, some contact lens brands refer to this as a high, medium or
              low.
            </p>
            <p>
              <span className=" font-semibold">Dominant:</span> Multifocal or
              bifocal contact lens wearers will see that the correction is
              determined by a dominant and non- dominant eye. This is the
              dominant figure, and is usually marked with a &quot;D&quot; and
              &quot;N&quot; to express which eye is which.
            </p>
            <div>
              <RelatedLinks />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
