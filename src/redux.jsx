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
  initialState: [],
  reducers: {
    addText: (state, action) => {
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

const sentencesSlice = createSlice({
  name: "sentences",
  initialState: [],
  reducers: {
    addSentence: (state, action) => {
      const newSentence = {
        id: v4(),
        texte: action.payload.texte,
        audio: action.payload.audio,
        textId: action.payload.textId,
      
      };
      state.push(newSentence);

    },
  }
});

const questionSclice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = {
        id: v4(),
        texte: action.payload.texte,
        reponse: action.payload.reponse,
        choixReponse: action.payload.choixReponse,
        textId: action.payload.textId
      };
      state.push(newQuestion);

    },
  }
});
const answerChoicesSlice = createSlice({
  name: "answerChoices",
  initialState: [],
  reducers: {
    addAnswerChoice: (state, action) => {
      const newAnswerChoice = {
        id: v4(),
        texte: action.payload.texte,
        audio: action.payload.audio,
        questionId: action.payload.questionId
      };
      state.push(newAnswerChoice);

    },
  }
});



//Users
export const { addUser, editUser } = usersSlice.actions;

//Session
export const { connectUser, disconnectUser } = sessionUserSlice.actions;

//Texts
export const { addText } = textsSlice.actions;

//Sentences
export const { addSentence } = sentencesSlice.actions;

//Questions
export const { addQuestion } = questionSclice.actions;

//Answer choices
export const { addAnswerChoice } = answerChoicesSlice.actions;


export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    sessionUser: sessionUserSlice.reducer,
    texts: textsSlice.reducer,
    sentences: sentencesSlice.reducer,
    questions: questionSclice.reducer,
    answerChoices: answerChoicesSlice.reducer,

  },
});
