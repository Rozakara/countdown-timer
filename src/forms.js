import React from 'react';

const label = {
    fontWeight:'bold',
    margin:'10px auto',
    color: '#075CE3'
  }

  const button={
    margin: '10px 0'
  }

const Forms = (props) => (
    <div>
        <form className="form-group row" onSubmit={e=>props.onDataSubmit(e)}>
            <label style={label} htmlFor="hours"> Hours </label>
            <input id="hours" type="number"  min="0" max="24" className="form-control"/>
            <label style={label} htmlFor="minutes"> Minutes </label>
            <input id="minutes"  type="number" min="0" max="60" className="form-control"/>
            <label style={label} htmlFor="seconds"> Seconds </label>
            <input id="seconds"  type="number" min="0" max="60" className="form-control"/>
            <button style={button}  className="btn btn-outline-success btn-block" disabled={props.calculating}>Calculate</button>
        </form>
        <button style={button}  className="btn btn btn-outline-danger btn-block" disabled={!props.calculating} onClick={props.reset}>Reset</button>
    </div>
);

export default Forms;