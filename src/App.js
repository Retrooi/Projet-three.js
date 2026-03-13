import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation } from "wouter";
import './index.css';
import logoHistoire from './histoire.webp';

const questionsHistoire = [
  {
    question: "En quelle année la Première guerre mondiale a-t-elle commencé ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cheshire_Regiment_trench_Somme_1916.jpg/800px-Cheshire_Regiment_trench_Somme_1916.jpg",
    reponses: [
      { text: "1914", correct: true },
      { text: "1918", correct: false },
      { text: "1939", correct: false },
      { text: "1945", correct: false },
    ],
  },
  {
    question: "Quelle date marque le début de la Révolution française avec la prise de la Bastille ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/800px-Prise_de_la_Bastille.jpg",
    reponses: [
      { text: "1789", correct: true },
      { text: "1792", correct: false },
      { text: "1804", correct: false },
      { text: "1815", correct: false },
    ],
  },
  {
    question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/800px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
    reponses: [
      { text: "1453", correct: false },
      { text: "1492", correct: true },
      { text: "1515", correct: false },
      { text: "1534", correct: false },
    ],
  },
  {
    question: "Quel roi de France était surnommé le « Roi-Soleil » ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/800px-Louis_XIV_of_France.jpg",
    reponses: [
      { text: "Henri IV", correct: false },
      { text: "Louis XIII", correct: false },
      { text: "Louis XIV", correct: true },
      { text: "Louis XVI", correct: false },
    ],
  },
  {
    question: "En quelle année le mur de Berlin est-il tombé ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Berlin_Wall_1989.jpg/800px-Berlin_Wall_1989.jpg",
    reponses: [
      { text: "1961", correct: false },
      { text: "1989", correct: true },
      { text: "1991", correct: false },
      { text: "2000", correct: false },
    ],
  },
  {
    question: "Quelle héroïne a aidé Charles VII lors de la guerre de Cent Ans ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Joan_of_arc_miniature_graded.jpg/800px-Joan_of_arc_miniature_graded.jpg",
    reponses: [
      { text: "Marie-Antoinette", correct: false },
      { text: "Catherine de Médicis", correct: false },
      { text: "Jeanne d'Arc", correct: true },
      { text: "Aliénor d'Aquitaine", correct: false },
    ],
  },
  {
    question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Apollo_11_first_step.jpg/800px-Apollo_11_first_step.jpg",
    reponses: [
      { text: "1957", correct: false },
      { text: "1961", correct: false },
      { text: "1969", correct: true },
      { text: "1972", correct: false },
    ],
  },
  {
    question: "Qui a inventé l'imprimerie à caractères mobiles en Europe vers 1440 ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gutenberg_Bible_B42_Genesis.JPG/800px-Gutenberg_Bible_B42_Genesis.JPG",
    reponses: [
      { text: "Léonard de Vinci", correct: false },
      { text: "Johannes Gutenberg", correct: true },
      { text: "Galilée", correct: false },
      { text: "Nicolas Copernic", correct: false },
    ],
  },
  {
    question: "Quelle bataille a marqué la défaite définitive de Napoléon Ier en 1815 ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Battle_of_Waterloo_1815.PNG/800px-Battle_of_Waterloo_1815.PNG",
    reponses: [
      { text: "Austerlitz", correct: false },
      { text: "Waterloo", correct: true },
      { text: "Trafalgar", correct: false },
      { text: "Verdun", correct: false },
    ],
  },
  {
    question: "Pour quel événement la Tour Eiffel a-t-elle été construite ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg",
    reponses: [
      { text: "L'Exposition universelle de 1889", correct: true },
      { text: "Le centenaire de Paris", correct: false },
      { text: "L'Exposition universelle de 1900", correct: false },
      { text: "Les Jeux Olympiques de 1924", correct: false },
    ],
  }
];

const listeLecons = [
  { niveau: "niveau.1", titre: "révolution française" },
  { niveau: "niveau.2", titre: "Égypte antique" },
  { niveau: "niveau.3", titre: "guerre mondiale" }
];

function Accueil({ xp }) {
  return (
    <div className="home-container">
      <h1 className="home-title">
        L'encyclopédie devient une<br />aventure.
      </h1>
      
      <div className="parcours-section">
        <p className="parcours-subtitle">Parcours disponibles</p>
        <div className="parcours-grid">
          <Link href="/histoire" className="card">
            <h3>histoire</h3>
            <p>palier 1</p>
          </Link>
          
          <div className={`card ${xp < 15 ? 'card--locked' : ''}`}>
            <h3>science</h3>
            <p>palier 2</p>
            {xp < 15 && <span style={{fontSize: '0.8rem', display: 'block', marginTop: '10px'}}>🔒 (15 XP requis)</span>}
          </div>
          
          <div className={`card ${xp < 30 ? 'card--locked' : ''}`}>
            <h3>culture</h3>
            <p>palier 3</p>
            {xp < 30 && <span style={{fontSize: '0.8rem', display: 'block', marginTop: '10px'}}>🔒 (30 XP requis)</span>}
          </div>
        </div>
      </div>

      <div className="sparkle-icon">✦</div>
    </div>
  );
}

function Histoire({ onComplete }) {
  const [, setLocation] = useLocation();
  const [etape, setEtape] = useState("lecon");
  const [temps, setTemps] = useState(10);
  const [quizActive, setQuizActive] = useState(false);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    let timer;
    if (etape === "quiz" && quizActive && temps > 0) {
      timer = setTimeout(() => setTemps(temps - 1), 1000);
    } else if (etape === "quiz" && quizActive && temps === 0) {
      gererReponse(null, false);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etape, quizActive, temps]);

  const gererReponse = (index, estCorrect) => {
    setSelectedAnswerIndex(index);
    setAnswerStatus(estCorrect ? 'correct' : 'incorrect');
    setQuizActive(false);
    setShowFeedback(true);

    let newScore = score;
    if (estCorrect) {
      newScore = score + 1;
      setScore(newScore);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswerIndex(null);
      setAnswerStatus(null);
      
      if (currentQuestionIndex < questionsHistoire.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTemps(10);
        setQuizActive(true);
      } else {
        const xpGagnes = newScore;
        onComplete(xpGagnes);
        alert(`Quiz terminé ! Vous avez eu ${newScore} bonnes réponses.\nVous gagnez +${xpGagnes} XP ! 🏆`);
        setLocation("/");
      }
    }, 1500);
  };

  if (etape === "lecon") {
    return (
      <div className="container">
        <Link href="/" className="btn-retour">
          ⬅ retour
        </Link>
        
        <h1 className="title">histoire</h1>
        <img 
          className="img-histoire" 
          src={logoHistoire} 
          alt="Illustration Révolution" 
        />
        
        <div className="lessons-container">
          {listeLecons.map((lecon, index) => (
            <div className="lesson-item" key={index}>
              <div className="lesson-info">
                <span>{lecon.niveau}</span>
                <span>{lecon.titre}</span>
              </div>
              <div className="btn-group-pill">
                <button className="btn-split" onClick={() => { setEtape("quiz"); setQuizActive(true); }}>
                  commencer
                </button>
                <button className="btn-split" onClick={() => alert("Ouvre la page Wikipédia de la leçon...")}>
                  leçon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const q = questionsHistoire[currentQuestionIndex];

  return (
    <div className="container quiz-container">
      <div className="timer-badge">
        {temps} sec!
        <div className="timer-bar">
          <div className="timer-fill" style={{ width: `${(temps / 10) * 100}%` }}></div>
        </div>
      </div>
      
      <h2 style={{marginBottom: '20px', fontSize: '1.5rem'}}>
        Question {currentQuestionIndex + 1}/10 : {q.question}
      </h2>
      
      <img 
        className="img-histoire" 
        src={q.image} 
        alt="Illustration" 
      />
      
      <div className="reponses-grid">
        {q.reponses.map((reponse, index) => {
          let btnClass = "btn-reponse";
          if (index === selectedAnswerIndex) {
            btnClass += ` btn-reponse--${answerStatus}`;
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => quizActive && !showFeedback && gererReponse(index, reponse.correct)}
              disabled={!quizActive || showFeedback}
            >
              {index === selectedAnswerIndex && answerStatus === 'correct' && (
                <span className="feedback-icon feedback-icon--correct">✔️</span>
              )}
              {index === selectedAnswerIndex && answerStatus === 'incorrect' && (
                <span className="feedback-icon feedback-icon--incorrect">❌</span>
              )}
              {reponse.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [xp, setXp] = useState(0);

  return (
    <div>
      <header className="header">
        <a href="https://fr.wikipedia.org/" target="_blank" rel="noopener noreferrer">
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" alt="Logo Wikipedia" title="Aller sur Wikipédia" />
        </a>
        <div className="header__info">
          <strong>Niveau {Math.floor(xp / 15) + 1}</strong>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((xp % 15) / 15) * 100}%` }}></div>
          </div>
        </div>
      </header>

      <Switch>
        <Route path="/"><Accueil xp={xp} /></Route>
        <Route path="/histoire"><Histoire onComplete={(val) => setXp(xp + val)} /></Route>
      </Switch>
    </div>
  );
}