const PrescriptionFigure = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <img src="/prescription-figure.jpg" />
      <div className="flex flex-col gap-4">
        <h3>What does each prescription mean?</h3>
        <p>
          <span className=" font-semibold">Base Curve (BC):</span> The base
          curve determines what type of fit is required for the lens to meet the
          curve of your eye; this is usually written in millimeters or sometimes
          with the words: flat, median or steep.
        </p>
        <p>
          <span className=" font-semibold">Diameter (DIA):</span> The diameter
          of the contact lens is also written in millimeters and determines the
          width that best fits your eye.
        </p>
        <p>
          <span className=" font-semibold">Power/Sphere (PWR/SPH):</span> This
          figure shows whether you&apos;re long or short-sighted and how much
          correction your eyes require. If you have long-sightedness (hyperopia)
          your figure will begin
        </p>
      </div>
    </div>
  );
};

export default PrescriptionFigure;
