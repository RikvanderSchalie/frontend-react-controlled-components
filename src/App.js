import React from 'react';
import './App.css';

function App() {
  return (

    <div className="body">

    <form>
      <fieldset>
        <legend>Gegevens</legend>
      <label>Naam : </label>
      <input
      type="tekst"
      name="Naam"

      />
      <p/>
      <label>Leeftijd : </label>
      <input
          type="tekst"
          name="Leeftijd"
      />
      </fieldset>
    </form>
<p>


</p>
      <form>
        <fieldset>
          <legend>Jouw review</legend>
          <label>Hoe heb je dit recept gevonden ? </label>
          <br/>
          <br/>
          <select>
            <option value="google">Google</option>
            <option value="vriend">Vriend</option>
            <option value="anders">Anders</option>
          </select>


          <br/>
          <br/>
          <p/>
          <label>Opmerking : </label>
          <br/>
          <br/>
          <input
              type="tekst"
              name="veld"
              placeholder="Wat vond je van het recept ?"
              id="invoer"

          />
          <br/>
          <br/>
          <button>Versturen</button>
        </fieldset>
      </form>
    </div>


  );
}

export default App;
