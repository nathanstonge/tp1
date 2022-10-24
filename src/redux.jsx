import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 1,
      nom: "Pouliot",
      prenom: "Mariane",
      dateNaissance: "2000-04-10",
      nomUtilisateur: "marie",
      motPasse: "marie",
      typeCompte: "Admin",
      codeAccesAdmin: "2525",
    },
    {
      id: 2,
      nom: "St-Onge",
      prenom: "Nathan",
      dateNaissance: "1999-10-22",
      nomUtilisateur: "nath",
      motPasse: "nath",
      typeCompte: "Client",
      codeAccesAdmin: ""
    }
  ],
  reducers: {
    addUser: (state, action) => {
      

      const newUser = {
        id: v4(),
        nom: action.payload.nom,
        prenom: action.payload.prenom,
        dateNaissance: action.payload.dateNaissance,
        nomUtilisateur: action.payload.nomUtilisateur,
        motPasse: action.payload.motPasse,
        typeCompte: action.payload.typeCompte,
        codeAccesAdmin: action.payload.codeAccesAdmin,
      };
      state.push(newUser);

     
    },
    editUser: (state, action) => {
      const modifiedUser = action.payload;
      state = state.filter(u => u.id !== modifiedUser.id);
      state.push(modifiedUser);
      return state;

    },
  },
  
});

const sessionUserSlice = createSlice({
    name: "sessionUser",
    initialState: {},
    reducers: {
      connectUser: (state, action) => {
        state = action.payload;
        return state;
      },
      disconnectUser: (state, action) => {
        state = {};
        return state;
      }
    }
});

const textsSlice = createSlice({
  name: "texts",
  initialState: [{
    id:v4(),
    titre: "Le troisième lien entre Québec et Lévis",
    images: [{id: v4(), src: "/TP01_Ressources/1_3e_lien/chiens.png"},{id: v4(), src: "/TP01_Ressources/1_3e_lien/combien.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/été.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/décider.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/deux.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/enfants.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/fleuve.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/forêt.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/gros.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/matin.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/nouveau.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/ou.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/pas.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/personnes.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/petit.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/peut-être.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/pont.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/Pourquoi.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/problèmes.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/proche.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/Quand.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/Qui.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/sale.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/samedi.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/semaines.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/sépare.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/temps.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/toi.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/travailleurs.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/traverser.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/troisième.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/tunnel.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/vieux.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/ville.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/voiture.png"}, {id: v4(), src: "/TP01_Ressources/1_3e_lien/trois.png"}],
    phrases: [{id:v4(), text:"Québec et Lévis sont deux villes.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_01.mp3"}, {id:v4(), text:"Elles sont très proches.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_02.mp3"}, {id:v4(), text:"Le fleuve Saint-Laurent sépare Québec et Lévis.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_03.mp3"}, {id:v4(), text:"Il y a deux ponts pour se rendre à Québec ou à Lévis.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_04.mp3"}, {id:v4(), text:"Beaucoup de travailleurs traversent le pont le matin et le soir.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_05.mp3"}, {id:v4(), text:"Les travailleurs traversent le pont en voiture.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_06.mp3"}, {id:v4(), text:"Le matin et le soir, il y a des problèmes de circulation.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_07.mp3"}, {id:v4(), text:"Il y a beaucoup de voiture qui traversent à Québec et à Lévis.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_08.mp3"}, {id:v4(), text:"Beaucoup de personnes aimeraient avoir trois ponts entre les deux villes.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_09.mp3"}, {id:v4(), text:"Des personnes veulent un gros pont.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_10.mp3"}, {id:v4(), text:"Des personnes veulent un petit pont.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_11.mp3"}, {id:v4(), text:"Des personnes veulent un pont-tunnel qui passe sous l’eau.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_12.mp3"}, {id:v4(), text:"Des personnes ne veulent pas de nouveau pont.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_13.mp3"}, {id:v4(), text:"Quand ce sera décidé, il y a aura peut-être un nouveau pont.", audio: "/TP01_Ressources/1_3e_lien/audio/sentence_14.mp3"} ],
    questions: [{id: 1, text:"", audio: "", answer: ""}]
  }],
  reducers: {
    addText: (state, action) => {
      console.log(action.payload);

      const newText = {
        id: v4(),
        titre: action.payload.titre,
        images: action.payload.images,
        phrases: action.payload.phrases,
        questions: action.payload.questions
      };
      state.push(newText);

    },
  }
});

// const sentencesSlice = createSlice({
//   name: "sentences",
//   initialState: [],
//   reducers: {
//     addSentence: (state, action) => {
//       const newSentence = {
//         id: v4(),
//         texte: action.payload.texte,
//         audio: action.payload.audio,
//         textId: action.payload.textId,
      
//       };
//       state.push(newSentence);

//     },
//   }
// });

// const questionSclice = createSlice({
//   name: "questions",
//   initialState: [],
//   reducers: {
//     addQuestion: (state, action) => {
//       const newQuestion = {
//         id: v4(),
//         texte: action.payload.texte,
//         reponse: action.payload.reponse,
//         choixReponse: action.payload.choixReponse,
//         textId: action.payload.textId
//       };
//       state.push(newQuestion);

//     },
//   }
// });
// const answerChoicesSlice = createSlice({
//   name: "answerChoices",
//   initialState: [],
//   reducers: {
//     addAnswerChoice: (state, action) => {
//       const newAnswerChoice = {
//         id: v4(),
//         texte: action.payload.texte,
//         audio: action.payload.audio,
//         questionId: action.payload.questionId
//       };
//       state.push(newAnswerChoice);

//     },
//   }
// });



//Users
export const { addUser, editUser } = usersSlice.actions;

//Session
export const { connectUser, disconnectUser } = sessionUserSlice.actions;

//Texts
export const { addText } = textsSlice.actions;

// //Sentences
// export const { addSentence } = sentencesSlice.actions;

// //Questions
// export const { addQuestion } = questionSclice.actions;

// //Answer choices
// export const { addAnswerChoice } = answerChoicesSlice.actions;


export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    sessionUser: sessionUserSlice.reducer,
    texts: textsSlice.reducer,
    // sentences: sentencesSlice.reducer,
    // questions: questionSclice.reducer,
    // answerChoices: answerChoicesSlice.reducer,

  },
});
