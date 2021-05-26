import React from 'react';
import './App.css';


function App() {
  return (

    <div className="body">


      {/*//GEGEVENS*/}

      {/*
      [] Alle inputs zijn controlled components
      [] Wanneer de gebruiker op de versturen-knop klikt, worden alle waarden van de inputvelden in de console gelogt.
      [] In plaats van een onClick eventlistener op de button te plaatsen, mag je de onSubmit event-listener,
      op het <form>-element plaatsen!
      [] Deze wordt automatisch getriggerd wanneer er geklikt wordt op een button met type=submit in het formulier.
      [] Omdat de button een submit button is, zal de pagina automatisch herladen wanneer je erop klikt, Zorg dat je dit voorkomt.
      Tip: lees dit artikel over preventDefault() in React.
      */}

      <form>

      <fieldset>
      <legend>Gegevens</legend>
      <label>Naam : </label>
      <input
      type="tekst"
      name="Naam"
      />
      <br/>
      <br/>
      <label>Leeftijd : </label>
      <input
          type="number"
          name="Leeftijd"
      />
      </fieldset>
    </form>
<p>


</p>
      <form>
       {/* HOE HEB JE DIT RECEPT GEVONDEN*/}
        <fieldset>
          <legend>Jouw review</legend>
          <label>Hoe heb je dit recept gevonden ? </label>
          <br/>
          <br/>
          <select
          name="keuze"
          id="drop"
          >
            <option value="google">Google</option>
            <option value="vriend">Vriend</option>
            <option value="anders">Anders</option>
          </select>
          <br/>
          <br/>
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
          <button
          type="submit"
        /*  onClick={() => console.log("HOI")}*/
          >Versturen</button>
        </fieldset>
      </form>
    </div>


  );
}

export default App;
