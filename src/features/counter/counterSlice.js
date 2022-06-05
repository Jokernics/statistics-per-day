import { createSlice } from '@reduxjs/toolkit'

const offers = [
  'КК', 'ПРО', 'СИМ', 'ИНВ', 'МНП', 'ДК'
]

let activites = []

function addClient() {
  const activity = {}
  offers.forEach(offer => activity[offer] = {
    amount: 0, total: 0
  })
  return activity
}

activites.push(addClient())


const initialState = {
  activites,
  current: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementOffer: (state, action) => {
      state.activites[state.current][action.payload].amount = 1
      state.activites[state.current][action.payload].total = 1
    },
    decrementOffer: (state, action) => {
      state.activites[state.current][action.payload].amount = 0
    },
    incrementTotal: (state, action) => {
      state.activites[state.current][action.payload].amount = 1
    },
    decrementTotal: (state, action) => {
      state.activites[state.current][action.payload].amount = 0
      state.activites[state.current][action.payload].total = 0
    },
    toNextClient: (state) => {
      state.activites = [...state.activites, addClient()]
      state.current += 1
    },
  },
})

export const {
  incrementOffer,
  decrementOffer,
  incrementTotal,
  decrementTotal,
  toNextClient,
} = counterSlice.actions

export default counterSlice.reducer

