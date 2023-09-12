import React from "react";
import { useState } from "react";

function PetItem({ data }) {
  return (
    <li>
      {data.name}는 {data.species}입니다. 그리고 {data.age}입니다.
    </li>
  );
}

function AddPetForm({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPets((prev) => {
      return [...prev, { name, species, age, id: Date.now() }];
    });
    setName("");
    setSpecies("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <label>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="specied"
            value={species}
            onChange={(event) => setSpecies(event.target.value)}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="나이"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <button type="submit">추가하기</button>
      </fieldset>
    </form>
  );
}

function MainPet() {
  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);

  return (
    <>
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((item) => {
          return <PetItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}

function Pet() {
  return (
    <>
      <h1>애완동물 정보 리스트</h1>
      <MainPet />
    </>
  );
}

export default Pet;
