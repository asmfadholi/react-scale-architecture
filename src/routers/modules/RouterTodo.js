import Home from '../../App'
import Detail from '../../components/EditTodo'

export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
              path: "/detail/:id",
              component: Detail
            },
          ]
      }
]