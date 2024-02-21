import React, { useState } from "react";
import "./calculator.css";

// Composant principal de la calculatrice
const Calculator = () => {
  // Déclaration de l'état pour stocker le résultat affiché
  let [result, setResult] = useState("");

  // Fonction pour gérer les clics sur les boutons
  const handleClick = (e) => {
    // Si le résultat est trop long (plus de 16 caractères), on ignore la saisie
    if (result.length >= 16) {
      setResult("Entrée trop longue ! ");
      return;
    }
    // On supprime le "0" initial si présent
    if (result.charAt(0) === "0") {
      result = result.slice(1, result.length);
    }
    // On concatène le nom du bouton (chiffre, opérateur, etc.) au résultat
    setResult(result.concat(e.target.name));
  };

  // Fonction pour effacer le résultat
  const clear = () => {
    setResult("");
  };

  // Fonction pour supprimer le dernier caractère du résultat
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  // Fonction pour calculer le résultat
  const calculate = () => {
    try {
      // On évalue l'expression comme une expression JavaScript
      result = eval(result).toString();
      // Si le résultat est un nombre décimal, on le formate avec 4 chiffres après la virgule
      if (result.includes(".")) {
        result = +eval(result);
        result = result.toFixed(4).toString();
        setResult(result);
      } else {
        // Sinon, on affiche simplement le résultat de l'évaluation
        setResult(eval(result).toString());
      }
    } catch (err) {
      // En cas d'erreur, on affiche "Erreur"
      setResult("Erreur");
    }
  };

  // Structure HTML de la calculatrice
  return (
    <div className="container">
      {/* En-tête */}
      <h3
        style={{
          fontSize: "25px",
          color: "#8205ca",
          borderBottom: "2px solid whitesmoke",
        }}
      >
        Calculatrice
      </h3>
      {/* Formulaire pour le champ de saisie */}
      <form action="">
        <input type="text" value={result} />
      </form>

      {/* Clavier numérique et boutons d'action */}
      <div className="keypad">
        {/* Boutons "Effacer" et "Retour arrière" */}
        <button onClick={clear} className="clear color">
          Effacer
        </button>
        <button onClick={backSpace} className="backspace color">
          C
        </button>
        {/* Boutons des opérateurs (+, -, *, /) */}
        <button name="/" className="color" onClick={handleClick}>
          /
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" className="color" onClick={handleClick}>
          *
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" className="color" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" className="color" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." className="color" onClick={handleClick}>
          .
        </button>
        {/* Bouton "=" pour lancer le calcul */}
        <button onClick={calculate} className="equal color">
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
