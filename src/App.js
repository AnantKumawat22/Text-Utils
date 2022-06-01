import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  const [data, setdata] = useState('');
  const [theme, settheme] = useState('light');

  const toggletheme = () => {
    if (theme === 'light') {
      settheme('dark');
      document.body.style.backgroundColor = "#042743";
    }
    else {
      settheme('light');
      document.body.style.backgroundColor = "white";
    }
  }

  const changedata = (e) => {
    setdata(e.target.value);
  }
  const conuppercase = () => {
    setdata(data.toUpperCase());

  }

  const conlowercase = () => {
    setdata(data.toLowerCase());
  }

  const cleardata = () => {
    setdata('');
  }

  const copydata = () => {
    navigator.clipboard.writeText(data);
  }

  const removespaces = () => {
    setdata(data.replace(/\s+/g, ' ').trim());
  }

  return (
    <>
      <Navbar theme={theme} toggletheme={toggletheme} />
      {/* <div class="alert alert-success" role="alert"></div> */}
      <div className="container d-flex flex-column justify-content-center">
        <h2 className={`pt-3 text-${theme === 'light' ? 'dark' : 'light'}`}>Enter Some Text Here</h2>
        <textarea value={data} onChange={changedata} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        <div className="buttons">
          <button type="button" onClick={conuppercase} className="btn btn-primary mr-2 mt-2">Convert to UpperCase</button>
          <button type="button" onClick={conlowercase} className="btn btn-primary mr-2 mt-2">Convert to LowerCase</button>
          <button type="button" onClick={cleardata} className="btn btn-primary mr-2 mt-2">Clear Text</button>
          <button type="button" onClick={copydata} className="btn btn-primary mr-2 mt-2">Copy Text</button>
          <button type="button" onClick={removespaces} className="btn btn-primary mr-2 mt-2">Remove Extra Spaces</button>
        </div>
        <div className={`d-flex justify-content-start text-${theme === 'light' ? 'dark' : 'light'} flex-column `}>
          <h3 className='mt-4'>Your Test Summary</h3>
          <p>{data === "" ? 0 : data.endsWith(" ") ? data.split(" ").length - 1 : data.split(" ").length} and {data.length} characters.</p>
          <p>{0.008 * data.split(" ").length} minutes it take to read.</p>
          <h3 className='mt-5'>Preview in manner</h3>
          <span>{data.length > 0 ? data : "Enter some text in above box to preview here."}</span>
        </div>

      </div>
    </>
  );
}

export default App;
