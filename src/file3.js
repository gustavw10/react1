
import person, {males, females, listOf, persons} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function WelcomePerson(props){
return <h2>{props.extraMessage} Your person is: {props.person.firstName}, {props.person.lastName}, {props.person.email} </h2>
}
  
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]}/>
        <WelcomePerson person={persons[1]}/>
        <WelcomePerson person={persons[2]}/>
        {persons.map((data) => (
            <WelcomePerson person={data} extraMessage ="FROM MAP--"/>
           
        ))}
      </div>
    );
  }
  
  export default MultiWelcome;