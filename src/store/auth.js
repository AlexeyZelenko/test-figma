import { createStore } from 'vuex';
import { auth } from '../firebase/config';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (res) {
          commit('setUser', res.user);
          return { success: true };
        }
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('setUser', null);
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  }
});

// Set up auth state listener
onAuthStateChanged(auth, (user) => {
  store.commit('setUser', user);
  store.commit('setAuthIsReady', true);
});

export default store; 