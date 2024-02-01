const PrescriptionTable = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-white ">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className=" tracking-wider border-b-2  border-t">
            <tr>
              <th scope="col" className="px-6 py-4 border-x "></th>
              <th scope="col" className="px-6  border-x ">
                Base Curve
              </th>
              <th scope="col" className="px-6  border-x ">
                Diameter
              </th>
              <th scope="col" className="px-6  border-x ">
                Power/Sphere
              </th>
              <th scope="col" className="px-6  border-x ">
                Cylinder
              </th>
              <th scope="col" className="px-6  border-x ">
                Axis
              </th>
              <th scope="col" className="px-6  border-x ">
                Addition
              </th>
              <th scope="col" className="px-6  border-x ">
                Dominant
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b ">
              <th scope="row" className="px-6 py-2 border-x ">
                Left
              </th>
              <td className="px-6  border-x ">8.4</td>
              <td className="px-6  border-x ">14</td>
              <td className="px-6  border-x ">-0.50</td>
              <td className="px-6  border-x ">-1.25</td>
              <td className="px-6  border-x ">10</td>
              <td className="px-6  border-x ">{">+1.0"}</td>
              <td className="px-6  border-x ">N</td>
            </tr>

            <tr className="border-b ">
              <th scope="row" className="px-6  border-x py-2">
                Right
              </th>
              <td className="px-6  border-x ">8.4</td>
              <td className="px-6 border-x ">14</td>
              <td className="px-6  border-x ">-1.25</td>
              <td className="px-6  border-x ">-1.25</td>
              <td className="px-6  border-x ">10</td>
              <td className="px-6  border-x ">{"+1.0"}</td>
              <td className="px-6 border-x ">D</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        <span className=" font-semibold">Name & expiry date:</span> Your
        prescription should also contain the name of your contact lens brand
        (e.g. Acuvue Oasys) and an expiry date, which is usually a year from the
        date of your check-up.
      </p>
    </div>
  );
};

export default PrescriptionTable;
