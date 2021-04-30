import React from 'react';
import './style.css'

const TruthsAndLies = () => {
    return (
      <div>
      <form action="#">
      <h3 id="form-title">Choose 2 truths about me from the list below</h3>
      <p><label for="ballroom-championship"><input id="ballroom-championship" type="checkbox" name="2-truths-and-a-lie" value="ballroom-championship"/>I have been in the final of the World Ballroom Championship in Junior category
      </label></p>
      <p><label for="study-england"><input id="study-england" type="checkbox" name="2-truths-and-a-lie" value="study-england"/>I was studying in England for 6 years</label></p>
      <p><label for="eric-clapton"><input id="eric-clapton" type="checkbox" name="2-truths-and-a-lie" value="eric-clapton"/>I like Eric Clapton's music and I saw him in Royal Albert Hall in May 2019</label></p>
      <button type="submit">Submit</button>
      </form>
      </div>
    )
}

export default TruthsAndLies;