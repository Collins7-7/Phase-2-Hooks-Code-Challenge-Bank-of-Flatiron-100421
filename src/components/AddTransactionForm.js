import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category:"",
    amount:null
  });
  function handleChanges(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmission(event){
    event.preventDefault()
    onSubmission(formData)
    
     
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmission} onChange={handleChanges} className="ui form">
        <div className="inline fields">
          <input onChange={handleChanges} type="date" name="date" />
          <input onChange={handleChanges} type="text" name="description" placeholder="Description" />
          <input onChange={handleChanges}type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;