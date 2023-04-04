import React, { useMemo, useState } from "react";
export default function Palindrome() {
  const [word, setWord] = useState("");
  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);
  return (
    <div className="App">
      <form>
        <div>
          <label>word to check : </label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div><h2>Is Palindrome:{isPalindrome ? "Yes" : "No"}</h2></div>
    </div>
  );
}