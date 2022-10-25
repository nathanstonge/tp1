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
      textInUse:{},
      textsCompleted: [],
      editMode: false,
    },
    {
      id: 2,
      nom: "St-Onge",
      prenom: "Nathan",
      dateNaissance: "1999-10-22",
      nomUtilisateur: "nath",
      motPasse: "nath",
      typeCompte: "Client",
      codeAccesAdmin: "",
      textInUse:{},
      textsCompleted: [],
      editMode: false,
    },
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
        textInUse: {},
        textsCompleted: [],
        editMode: false,
      };
      state.push(newUser);
    },
    editUser: (state, action) => {
      const modifiedUser = action.payload;
      state = state.filter((u) => u.id !== modifiedUser.id);
      state.push(modifiedUser);
      return state;
    },
    addTextCompleted: (state, action) => {
      // // [{text: {}, bonnesReponses:[], date:""}]
      // // on recoit sessionUser(textInUse), bonnesReponses(["", ""])
      
      // // console.log(action.payload.bonnesReponses);
      // // console.log(action.payload.date);
      const newTextResult = {text: action.payload.connectedUser.textInUse, bonnesReponses: action.payload.bonnesReponses, date: action.payload.date};
    
     
      // const stateWithOnlyUser = state.filter((u) => u.id === action.payload.connectedUser.id);
      // stateWithOnlyUser.push(...stateWithOnlyUser, newTextResult);

      // state = state.filter((u) => u.id !== action.payload.connectedUser.id);
      // state.push(stateWithOnlyUser);
      // return state;
      
    
      console.log(newTextResult);
      const newUser = {
        id: action.payload.connectedUser.id,
        nom: action.payload.connectedUser.nom,
        prenom: action.payload.connectedUser.prenom,
        dateNaissance: action.payload.connectedUser.dateNaissance,
        nomUtilisateur: action.payload.connectedUser.nomUtilisateur,
        motPasse: action.payload.connectedUser.motPasse,
        typeCompte: action.payload.connectedUser.typeCompte,
        codeAccesAdmin: action.payload.connectedUser.codeAccesAdmin,
        textInUse: {},
        textsCompleted: [...action.payload.connectedUser.textsCompleted, newTextResult],
        editMode:false,
      };
       state = state.filter((u) => u.id !== action.payload.connectedUser.id);
      state.push(newUser);
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
    },
    useText: (state, action) => {
      state.textInUse = action.payload;
      return state;
    },
    unuseText: (state, action) => {
      state.textInUse = {};
      return state;
    },
    setEditMode : (state, action) => {
      state.editMode = !state.editMode;
      return state;
    },
    
  },
});

const textsSlice = createSlice({
  name: "texts",
  initialState: [
    {
      id: v4(),
      titre: "Le troisième lien entre Québec et Lévis",
      audioTitre: "/TP01_Ressources/1_3e_lien/audio/title.mp3",
      imageTitre: "/TP01_Ressources/1_3e_lien/pont.png",
      images: [
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/chiens.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/combien.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/été.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/décider.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/2.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/enfants.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/fleuve.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/forêt.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/gros.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/matin.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/nouveau.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/où.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/pas.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/personnes.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/petit.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/peut-être.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/pont.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/ponts.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/Pourquoi.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/problèmes.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/proches.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/Quand.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/Qui.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/sale.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/samedi.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/semaines.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/sépare.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/temps.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/toi.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/travailleurs.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/traverser.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/troisième.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/tunnel.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/vieux.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/villes.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/ville.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/voiture.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/3.png" },
        { id: v4(), src: "/TP01_Ressources/1_3e_lien/lien.png" },

      ],
      phrases: [
        {
          id: v4(),
          text: "Québec et Lévis sont deux villes.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_01.mp3",
        },
        {
          id: v4(),
          text: "Elles sont très proches.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_02.mp3",
        },
        {
          id: v4(),
          text: "Le fleuve Saint-Laurent sépare Québec et Lévis.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_03.mp3",
        },
        {
          id: v4(),
          text: "Il y a 2 ponts pour se rendre à Québec ou à Lévis.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_04.mp3",
        },
        {
          id: v4(),
          text: "Beaucoup de travailleurs traversent le pont le matin et le soir.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_05.mp3",
        },
        {
          id: v4(),
          text: "Les travailleurs traversent le pont en voiture.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_06.mp3",
        },
        {
          id: v4(),
          text: "Le matin et le soir, il y a des problèmes de circulation.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_07.mp3",
        },
        {
          id: v4(),
          text: "Il y a beaucoup de voiture qui traversent à Québec et à Lévis.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_08.mp3",
        },
        {
          id: v4(),
          text: "Beaucoup de personnes aimeraient avoir 3 ponts entre les 2 villes.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_09.mp3",
        },
        {
          id: v4(),
          text: "Des personnes veulent un gros pont.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_10.mp3",
        },
        {
          id: v4(),
          text: "Des personnes veulent un petit pont.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_11.mp3",
        },
        {
          id: v4(),
          text: "Des personnes veulent un pont-tunnel qui passe sous l’eau.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_12.mp3",
        },
        {
          id: v4(),
          text: "Des personnes ne veulent pas de nouveau pont.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_13.mp3",
        },
        {
          id: v4(),
          text: "Quand ce sera décidé, il y a aura peut-être un nouveau pont.",
          audio: "/TP01_Ressources/1_3e_lien/audio/sentence_14.mp3",
        },
      ],
      questions: [
        {
          id: 1,
          text: "Pourquoi on veut construire un nouveau pont?	",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_01/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "On veut construire un pont parce qu’il y a des problèmes de circulation.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_01/response_01.mp3",
              image: "/TP01_Ressources/1_3e_lien/problèmes.png",
            },
            {
              id: 2,
              text: "On veut construire un pont parce que le pont est sale.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_01/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/sale.png",
            },
            {
              id: 3,
              text: "On veut construire un pont parce que le pont est vieux.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_01/response_03.mp3",
              image: "/TP01_Ressources/1_3e_lien/vieux.png",
            },
            {
              id: 4,
              text: "Le fleuve Saint-Laurent sépare Québec et Lévis.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_01/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/fleuve.png",
            }

          ],
        },
        {
          id: 2,
          text: "Qui utilise le pont le matin et le soir?",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_02/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "Les travailleurs utilisent les ponts entre Québec et Lévis.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_02/response_01.mp3",
              image: "/TP01_Ressources/1_3e_lien/travailleurs.png",
            },
            {
              id: 2,
              text: "Les enfants utilisent les ponts entre Québec et Lévis.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_02/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/enfants.png",
            },
            {
              id: 3,
              text: "Les chiens utilisent les ponts entre Québec et Lévis.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_02/response_03.mp3",
              image: "/TP01_Ressources/1_3e_lien/chiens.png",
            },
            {
              id: 4,
              text: "Des personnes veulent un petit pont.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_02/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/petit.png",
            }

          ],
        },
        {
          id: 3,
          text: "Quand est-ce qu’il a des problèmes de circulation?",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_03/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "Les problèmes de circulation sont le matin et le soir.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_03/response_01.mp3",
              image: "/TP01_Ressources/1_3e_lien/matin.png",
            },
            {
              id: 2,
              text: "Les problèmes de circulation sont en été.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_03/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/été.png",
            },
            {
              id: 3,
              text: "Les problèmes de circulation sont le samedi.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_03/response_03.mp3",
              image: "/TP01_Ressources/1_3e_lien/samedi.png",
            },
            {
              id: 4,
              text: "Des personnes veulent un pont tunnel qui passe sous l’eau.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_03/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/tunnel.png",
            }

          ],
        },
        {
          id: 4,
          text: "Où est la ville de Lévis?",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_04/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "La ville de Lévis est près de la ville de Québec.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_04/response_01.mp3",
              image: "/TP01_Ressources/1_3e_lien/proches.png",
            },
            {
              id: 2,
              text: "La ville de Lévis est dans le fleuve Saint-Laurent.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_04/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/fleuve.png",
            },
            {
              id: 3,
              text: "La ville de Lévis est dans la forêt.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_04/response_03.mp3",
              image: "/TP01_Ressources/1_3e_lien/forêt.png",
            },
            {
              id: 4,
              text: "Les travailleurs traversent le pont en voiture.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_04/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/travailleurs.png",
            }

          ],
        },
        {
          id: 5,
          text: "Combien y a-t-il de ponts pour traverser de Lévis à Québec?",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_05/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "Il y a 2 ponts pour traverser de Lévis à Québec.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_05/response_01.mp3",
              image: "/TP01_Ressources/1_3e_lien/2.png",
            },
            {
              id: 2,
              text: "Il n’y a pas de pont pour traverser de Lévis à Québec.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_05/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/pas.png",
            },
            {
              id: 3,
              text: "Il y a trop de ponts pour traverser de Lévis à Québec.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_05/response_03.mp3",
              image: "",
            },
            {
              id: 4,
              text: "Lévis est proche de Québec.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_05/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/proche.png",
            }

          ],
        },
        {
          id: 6,
          text: "D’après toi, s’il y a un nouveau pont, ce sera dans combien de temps?",
          audio: "/TP01_Ressources/1_3e_lien/audio/question_06/question.mp3",
          answer: "1",
          answerChoices: [
            {
              id: 1,
              text: "D’après moi, ça sera dans plusieurs années.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_06/response_01.mp3",
              image: "",
            },
            {
              id: 2,
              text: "D’après moi, ça sera l’été prochain.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_06/response_02.mp3",
              image: "/TP01_Ressources/1_3e_lien/été.png",
            },
            {
              id: 3,
              text: "D’après moi, ça sera dans des semaines.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_06/response_03.mp3",
              image: "/TP01_Ressources/1_3e_lien/semaines.png",
            },
            {
              id: 4,
              text: "Quand ce sera décidé, il y aura peut-être un nouveau pont.",
              audio:
                "/TP01_Ressources/1_3e_lien/audio/question_06/response_04.mp3",
              image: "/TP01_Ressources/1_3e_lien/décidé.png",
            }

          ],
        }
      ],
    },
  ],
  reducers: {
    addText: (state, action) => {
      const newText = {
        id: v4(),
        audioTitre: action.payload.audioTitre,
        imageTitre: action.payload.imageTitre,
        titre: action.payload.titre,
        images: action.payload.images,
        phrases: action.payload.phrases,
        questions: action.payload.questions,
      };
      state.push(newText);
    },
    deleteText: (state, action) => {
      state = state.filter(t => t.id != action.payload.id);
      return state;
    },
  },
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
export const { addUser, editUser, addTextCompleted } = usersSlice.actions;

//Session
export const { connectUser, disconnectUser, useText, unuseText, setEditMode } = sessionUserSlice.actions;

//Texts
export const { addText, deleteText } = textsSlice.actions;



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
