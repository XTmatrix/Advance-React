import { useState } from "react";

function InputForm() {
  const [details, setDetails] = useState({
    name: "",
  });

  console.log(details);
  return (
    <div>
      <div className="form-group mt-[100px]">
        <label for="">Form</label>
        <input
          type="text"
          className="bg-gray-400"
          name="name"
          id=""
          aria-describedby="helpId"
          placeholder=""
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>
    </div>
  );
}

export default InputForm;
