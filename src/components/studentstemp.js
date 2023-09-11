const StudentsTemp = ({ Stemp }) => {
  return (
    <div className="info">
      {Stemp.map((Stemp) => {
        return (
          <div className="infobox" key={Stemp.id}>
            {/* <div className="Ps">
              <p>First Name: {Stemp.firstName} </p>
              <p> Last Name: {Stemp.lastName} </p>
              <p> Surname: {Stemp.surname} </p>
              <p> Age: {Stemp.age} </p>
            </div> */}

            <div class="card">
  <div class="card-overlay"></div>
  <div class="card-inner">   <p>First Name: {Stemp.firstName} </p>
              <p> Last Name: {Stemp.lastName} </p>
              <p> Current Class: {Stemp.class} </p>
              <p> Age: {Stemp.age} </p></div>
</div>

          </div>
        );
      })}
    </div>
  );
};

export default StudentsTemp;
