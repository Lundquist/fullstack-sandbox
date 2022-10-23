import React, { Fragment, useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { TodoListForm } from './TodoListForm'
import { getLists, getList, addTodo, updateTodo, updateToDos } from '../../api'

export const TodoLists = ({ style }) => {
  const [todos, setTodos] = useState([])
  const [lists, setLists] = useState([])
  const [activeList, setActiveList] = useState(null)

  const loadLists = async () => {
    getLists().then(res => setLists(res))
  }
  const loadList = async (id) => {
    getList(id).then(res => {
      setTodos(res.todos);
      setActiveList(res.list)
    })
  }

  const handleTodo = async (type, id, value = '') => {
    switch (type) {
      case 'add': {
        await addTodo(activeList)
        break;
      }
      case 'update': {
        await updateTodo({ id, value })
        break;
      }
      case 'delete': {
        const newTodos = activeList.todos.filter(todo => todo !== id)
        await updateToDos(activeList.id, newTodos)
        break;
      }
      case 'changeCompleted': {
        await updateTodo({ id, value })
        break;
      }
      default: { }
    }
    loadList(activeList.id);
  }

  useEffect(() => {
    loadLists()
  }, [])

  useEffect(() => {
  }, [todos, lists])

  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Typography component='h2'>My Todo Lists</Typography>
          <List>
            {lists.map((v, k) => (
              <ListItem key={k} button onClick={() => loadList(v.id)}>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={v.title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      {activeList && <TodoListForm
        todos={todos}
        list={activeList}
        callback={handleTodo}
      />}
    </Fragment>
  )
}
