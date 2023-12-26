

function FormInput(prop) {
  let {type, title, show, rest, needed, change, error } = prop;

  

  // console.log(prop);

  return (
    <>
      <div className="input-wrapper">
      {/* <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" placeholder="Robin"/> */}

      {/* <label htmlFor={rest}>{title}</label>
      <input type={type} name={rest} id={rest} placeholder={show}/> */}

      {
        needed === true ? 
        <>
          <label htmlFor={rest}>{title}</label>
          <input type = {type} name = {rest} id = {rest} placeholder= {show} required onChange={change}/>
        </> 
        : 
        <>
          <label htmlFor={rest}>{title}</label>
          <input type = {type} name = {rest} id = {rest} placeholder= {show} onChange={change}/>
          <br />
        </>
      }
    </div>
      {
        error[rest] !== "" ? <div className="error">{error[rest]}</div> :  <></>
      }

    </>
  );
}

export default FormInput;
