import { React } from "react";
import RaffleForm from "../components/forms/RaffleForm";

export default function Raffle() {
  // const [nameList, updateNameList] = useState([]);

  // const addName = (fullName) => {
  //   updateNameList([...nameList, fullName]);
  // };
  // console.log(nameList);
  return (
    <div className="container">
      <h1 className="my-5 text-center">Raffle</h1>
      <RaffleForm />
    </div>
  );
}
