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
      <h1 className="mt-5 text-center">Raffle</h1>
      <h4 className="text-center mb-5">Minimum of 10 entries</h4>
      <RaffleForm />
    </div>
  );
}
