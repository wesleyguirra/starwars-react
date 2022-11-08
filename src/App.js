import './App.css';
import {useEffect, useState} from "react";
import PeopleRow from "./components/PeopleRow";

const fieldsToHide = ['created', 'edited', 'species', 'vehicles', 'url']

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0)

  const fetchPeople = async () => {
    const result = await fetch('https://swapi.dev/api/people')
    const {results} = await result.json()
    const normalizedResults = results.map((person, index) => {
      Object.keys(person)
        .filter(key => fieldsToHide.includes(key))
        .forEach(key => delete person[key])

      return person
    })
    setPeople(normalizedResults)
  }

  useEffect(() => {
    fetchPeople();
  }, [page])

  return (
    <div className="App">
      <table border="0" cellSpacing="0" cellPadding="0" className="Table">
        <thead className="Table-head">
          <tr>
            <td>Name</td>
            <td>Height (m)</td>
            <td>Weight (kg)</td>
            <td>Hair color</td>
            <td>Skin color</td>
            <td>Eye color</td>
            <td>Birth year</td>
            <td>Gender</td>
            <td>Planet of origin</td>
            <td>Films</td>
            <td>Starships</td>
          </tr>
        </thead>
        <tbody className="Table-body">
          {people.map((people) => <PeopleRow data={people} />)}
        </tbody>
        {/*TODO: Implement pagination*/}
        <tfoot>
          <div>
            <span>page {page}</span>
          </div>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
