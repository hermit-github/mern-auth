import { RouterProvider } from "react-router-dom"
import router from "./pages/index"
import { Provider } from "react-redux"
import { store } from "./state/store"

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  )
}

export default App