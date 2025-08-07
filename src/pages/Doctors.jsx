const Doctors = () => {
  const doctors = [
    { name: "Dr. Sharma", specialization: "Cardiologist" },
    { name: "Dr. Mehta", specialization: "Neurologist" },
    { name: "Dr. Verma", specialization: "Dermatologist" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Our Doctors</h2>
      <ul className="space-y-4">
        {doctors.map((doc, i) => (
          <li key={i} className="border p-4">
            <h3 className="font-semibold">{doc.name}</h3>
            <p>{doc.specialization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
